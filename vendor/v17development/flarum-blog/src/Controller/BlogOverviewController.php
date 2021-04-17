<?php

namespace V17Development\FlarumBlog\Controller;

use Flarum\Frontend\Document;
use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Client;
use Flarum\User\User;
use Flarum\Extension\ExtensionManager;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\Translation\TranslatorInterface;
use Flarum\Tags\Tag;
use Illuminate\Support\Arr;

class BlogOverviewController
{
    public function __construct(Client $api, TranslatorInterface $translator, ExtensionManager $extensionManager)
    {
        $this->api = $api;
        $this->translator = $translator;
        $this->extensionManager = $extensionManager;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $queryParams = $request->getQueryParams();

        // Set meta tags
        if(class_exists("V17Development\FlarumSeo\Extend")) {
            // Get category
            if(Arr::get($queryParams, 'category')) {
                $category = Tag::where('slug', Arr::get($queryParams, 'category'))->firstOrFail();

                // Set description of the tag has a description
                if($category->getAttribute("description")) {
                    \V17Development\FlarumSeo\Extend::setDescription($category->getAttribute("description"));
                }
            }

            \V17Development\FlarumSeo\Extend::setTitle((isset($category) ? $category->getAttribute("name") . " - " : "") . $this->translator->trans('v17development-flarum-blog.forum.blog'));
        }

        $q = "";
        
        // Add language support
        if($this->extensionManager->isEnabled("fof-discussion-language")) {
            $q = "language:{$document->language} ";
        }

        $q .= "is:blog" . (Arr::get($queryParams, 'category') ? " tag:" . Arr::get($queryParams, 'category') : "");

        // Preload blog posts
        $apiDocument = $this->getApiDocument($request->getAttribute('actor'), [
            "filter" => [
                "q" => $q
            ],
            "sort" => "-createdAt"
        ]);

        // Set payload
        $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    /**
     * Preload blog posts
     *
     * @param User  $actor
     * @param array $params
     *
     * @return object
     */
    private function getApiDocument(User $actor, array $params)
    {
        $response = $this->api->send(ListDiscussionsController::class, $actor, $params);

        // Unfortunately there were no records found
        if ($response->getStatusCode() === 404) {
            return null;
        }

        return json_decode($response->getBody());
    }
}