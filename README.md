<p align="center"><img src="https://flarum.org/assets/img/logo.png"></p>

## 关于 Flarum

**[Flarum](https://flarum.net.cn/)  是一款非常简洁的开源论坛软件。它响应快速、简便易用，拥有打造一片成功的社区所需的所有功能。**

* **高效而简洁**  不杂乱不臃肿，没有复杂的依赖关系。Flarum 使用 PHP 构建，因此很容易被部署。同时界面采用高性能 JavaScript 框架 Mithril (opens new window)，因此占用空间很小。

* **漂亮、响应式。**  专为人设计的论坛程序。Flarum 经过精心设计，完美支持跨平台、开箱即用。

* **强大、可扩展。** 您可以客制化、扩展或集成 Flarum 以满足您的社区需求。Flarum 拥有非常全面、强大的 扩展 API (opens new window)，她的架构及其灵活。

![screenshot](https://flarum.org/assets/img/home-screenshot.png)

## 直接下载安装包安装

本仓库下载地址: https://gitee.com/wenhainande/flarum/repository/archive/master.zip


## 环境要求
* PHP7.3+
* Mysql5.6+

## Nginx伪静态
```
location / {  
  try_files $uri $uri/ /index.php$is_args$query_string;  
}
```



## composer方式安装

**PHP 7.3+** and **MySQL 5.6+**, and install [Composer](https://getcomposer.org/).

```
composer create-project flarum/flarum . --stability=beta
```

请阅读 **[部署指南](https://docs.flarum.org/zh/install.html)** 获取更多信息. For support, refer to the [documentation](https://flarum.org/docs/), and ask questions on the [community forum](https://discuss.flarum.net.cn/) .



## License

Flarum is open-source software licensed under the [MIT License](https://gitee.com/wenhainande/flarum/blob/master/LICENSE).

