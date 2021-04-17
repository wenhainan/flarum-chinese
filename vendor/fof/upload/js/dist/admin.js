module.exports=function(t){var e={};function a(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=26)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["common/utils/withAttr"]},function(t,e,a){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},,,function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},,function(t,e){t.exports=flarum.core.compat["common/components/Alert"]},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},,,,,,,,,,,function(t,e){t.exports=flarum.core.compat["admin/utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat["admin/components/UploadImageButton"]},function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},,function(t,e,a){"use strict";a.r(e),a.d(e,"components",(function(){return O}));var o=a(0),n=a.n(o),s=a(2),i=a(3),l=a.n(i),r=a(21),u=a.n(r),p=a(9),d=a.n(p),f=a(7),c=a.n(f),h=a(10),b=a.n(h),v=a(22),g=a.n(v),y=a(1),w=a.n(y),x=a(6),T=a.n(x),_=a(23),M=a.n(_),S=a(24),k=a.n(S),P=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var a=e.prototype;return a.oninit=function(e){var a=this;t.prototype.oninit.call(this,e),this.loading=!1,this.fields=["resizeMaxWidth","cdnUrl","maxFileSize","whitelistedClientExtensions","composerButtonVisiblity","watermark","watermarkPosition","imgurClientId","awsS3Key","awsS3Secret","awsS3Bucket","awsS3Region","awsS3Endpoint","awsS3ACL","qiniuKey","qiniuSecret","qiniuBucket"],this.checkboxes=["mustResize","addsWatermarks","disableHotlinkProtection","disableDownloadLogging","awsS3UsePathStyleEndpoint"],this.objects=["mimeTypes"],this.watermarkPositions={"top-left":"top-left","top-right":"top-right","bottom-left":"bottom-left","bottom-right":"bottom-right",center:"center",left:"left",top:"top",right:"right",bottom:"bottom"},this.composerButtonVisiblityOptions={both:n.a.translator.trans("fof-upload.admin.labels.composer_buttons.options.both"),"upload-btn":n.a.translator.trans("fof-upload.admin.labels.composer_buttons.options.upload-btn"),"media-btn":n.a.translator.trans("fof-upload.admin.labels.composer_buttons.options.media-btn")};var o=n.a.data.settings;this.settingsPrefix="fof-upload",this.uploadMethodOptions=o[this.addPrefix("availableUploadMethods")]||{},this.templateOptions=o[this.addPrefix("availableTemplates")]||{},this.values={},this.fields.forEach((function(t){return a.values[t]=T()(o[a.addPrefix(t)])})),this.checkboxes.forEach((function(t){return a.values[t]=T()("1"===o[a.addPrefix(t)])})),this.objects.forEach((function(t){return a.values[t]=o[a.addPrefix(t)]?T()(JSON.parse(o[a.addPrefix(t)])):T()()})),this.defaultAdap=Object.keys(this.uploadMethodOptions)[Object.keys(this.uploadMethodOptions).length-1],this.values.mimeTypes()||(this.values.mimeTypes=T()({"^image\\/.*":{adapter:this.defaultAdap,template:"image-preview"}})),this.newMimeType={regex:T()(""),adapter:T()(this.defaultAdap),template:T()("file")}},a.content=function(){var t=this;return[m(".UploadPage",[m(".container",[m("form",{onsubmit:this.onsubmit.bind(this)},[m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.preferences.title")),m("label",n.a.translator.trans("fof-upload.admin.labels.preferences.max_file_size")),m("input.FormControl",{value:this.values.maxFileSize()||2048,oninput:w()("value",this.values.maxFileSize),type:"number",min:"0"}),m("label",n.a.translator.trans("fof-upload.admin.labels.preferences.mime_types")),m(".MimeTypes--Container",Object.keys(this.values.mimeTypes()).map((function(e){var a=t.values.mimeTypes()[e];return"object"!=typeof a&&(a={adapter:a,template:"file"}),m("div",[m("input.FormControl.MimeTypes",{value:e,oninput:w()("value",t.updateMimeTypeKey.bind(t,e))}),c.a.component({options:t.uploadMethodOptions,onchange:t.updateMimeTypeAdapter.bind(t,e,a),value:a.adapter||"local"}),c.a.component({options:t.getTemplateOptionsForInput(),onchange:t.updateMimeTypeTemplate.bind(t,e,a),value:a.template||"local"}),l.a.component({type:"button",className:"Button Button--warning",onclick:t.deleteMimeType.bind(t,e)},"x")])})),m("br"),m("div",[m("input.FormControl.MimeTypes.add-MimeType-key",{value:this.newMimeType.regex(),oninput:w()("value",this.newMimeType.regex)}),c.a.component({options:this.uploadMethodOptions,className:"add-MimeType-value",oninput:w()("value",this.newMimeType.adapter),value:this.newMimeType.adapter()}),c.a.component({options:this.getTemplateOptionsForInput(),className:"add-MimeType-value",oninput:w()("value",this.newMimeType.template),value:this.newMimeType.template()}),l.a.component({type:"button",className:"Button Button--warning",onclick:this.addMimeType.bind(this)},"+")])),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.mime_types")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.download_templates")),this.templateOptionsDescriptions()]),m("fieldset.composerButtons",[m("legend",n.a.translator.trans("fof-upload.admin.labels.composer_buttons.title")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.composer_buttons")),m("div",[c.a.component({options:this.composerButtonVisiblityOptions,onchange:this.values.composerButtonVisiblity,value:this.values.composerButtonVisiblity()||"both"})])]),m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.resize.title")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.resize")),b.a.component({state:this.values.mustResize()||!1,onchange:this.values.mustResize},n.a.translator.trans("fof-upload.admin.labels.resize.toggle")),m("label",n.a.translator.trans("fof-upload.admin.labels.resize.max_width")),m("input",{className:"FormControl",value:this.values.resizeMaxWidth()||100,oninput:w()("value",this.values.resizeMaxWidth),disabled:!this.values.mustResize(),type:"number",min:"0"})]),m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.client_extension.title")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.client_extension")),m("input",{className:"FormControl",value:this.values.whitelistedClientExtensions()||"",oninput:w()("value",this.values.whitelistedClientExtensions)})]),m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.watermark.title")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.watermark")),b.a.component({state:this.values.addsWatermarks()||!1,onchange:this.values.addsWatermarks},n.a.translator.trans("fof-upload.admin.labels.watermark.toggle")),m("label",n.a.translator.trans("fof-upload.admin.labels.watermark.position")),m("div",[c.a.component({options:this.watermarkPositions,onchange:this.values.watermarkPosition,value:this.values.watermarkPosition()||"bottom-right"})]),m("label",{},n.a.translator.trans("fof-upload.admin.labels.watermark.file")),g.a.component({name:"fof/watermark"})]),m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.disable-hotlink-protection.title")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.disable-hotlink-protection")),b.a.component({state:this.values.disableHotlinkProtection()||!1,onchange:this.values.disableHotlinkProtection},n.a.translator.trans("fof-upload.admin.labels.disable-hotlink-protection.toggle")),m("legend",n.a.translator.trans("fof-upload.admin.labels.disable-download-logging.title")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.disable-download-logging")),b.a.component({state:this.values.disableDownloadLogging()||!1,onchange:this.values.disableDownloadLogging},n.a.translator.trans("fof-upload.admin.labels.disable-download-logging.toggle"))]),m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.local.title")),m("label",n.a.translator.trans("fof-upload.admin.labels.local.cdn_url")),m("input.FormControl",{value:this.values.cdnUrl()||"",oninput:w()("value",this.values.cdnUrl)})]),this.adaptorItems().toArray(),l.a.component({type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.changed()},n.a.translator.trans("fof-upload.admin.buttons.save"))])])])]},a.adaptorItems=function(){var t=new k.a;return void 0!==this.uploadMethodOptions.imgur&&t.add("imgur",m(".imgur",[m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.imgur.title")),m("label",n.a.translator.trans("fof-upload.admin.labels.imgur.client_id")),m("input.FormControl",{value:this.values.imgurClientId()||"",oninput:w()("value",this.values.imgurClientId)})])])),void 0!==this.uploadMethodOptions.qiniu&&t.add("qiniu",m(".qiniu",[m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.qiniu.title")),m("label",n.a.translator.trans("fof-upload.admin.labels.qiniu.key")),m("input.FormControl",{value:this.values.qiniuKey()||"",oninput:w()("value",this.values.qiniuKey)}),m("label",{},n.a.translator.trans("fof-upload.admin.labels.qiniu.secret")),m("input.FormControl",{value:this.values.qiniuSecret()||"",oninput:w()("value",this.values.qiniuSecret)}),m("label",{},n.a.translator.trans("fof-upload.admin.labels.qiniu.bucket")),m("input.FormControl",{value:this.values.qiniuBucket()||"",oninput:w()("value",this.values.qiniuBucket)})])])),void 0!==this.uploadMethodOptions["aws-s3"]&&t.add("aws-s3",m(".aws",[m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.aws-s3.title")),m("label",n.a.translator.trans("fof-upload.admin.labels.aws-s3.key")),m("input.FormControl",{value:this.values.awsS3Key()||"",oninput:w()("value",this.values.awsS3Key)}),m("label",n.a.translator.trans("fof-upload.admin.labels.aws-s3.secret")),m("input.FormControl",{value:this.values.awsS3Secret()||"",oninput:w()("value",this.values.awsS3Secret)}),m("label",n.a.translator.trans("fof-upload.admin.labels.aws-s3.bucket")),m("input.FormControl",{value:this.values.awsS3Bucket()||"",oninput:w()("value",this.values.awsS3Bucket)}),m("label",n.a.translator.trans("fof-upload.admin.labels.aws-s3.region")),m("input.FormControl",{value:this.values.awsS3Region()||"",oninput:w()("value",this.values.awsS3Region)})]),m("fieldset",[m("legend",n.a.translator.trans("fof-upload.admin.labels.aws-s3.advanced_title")),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.s3_compatible_storage")),m("label",n.a.translator.trans("fof-upload.admin.labels.aws-s3.endpoint")),m("input.FormControl",{value:this.values.awsS3Endpoint()||"",oninput:w()("value",this.values.awsS3Endpoint)}),b.a.component({state:this.values.awsS3UsePathStyleEndpoint()||!1,onchange:this.values.awsS3UsePathStyleEndpoint},n.a.translator.trans("fof-upload.admin.labels.aws-s3.use_path_style_endpoint")),m("label",n.a.translator.trans("fof-upload.admin.labels.aws-s3.acl")),m("input.FormControl",{value:this.values.awsS3ACL()||"",oninput:w()("value",this.values.awsS3ACL)}),m(".helpText",n.a.translator.trans("fof-upload.admin.help_texts.s3_acl"))])])),t},a.getTemplateOptionsForInput=function(){var t={};for(var e in this.templateOptions)this.templateOptions.hasOwnProperty(e)&&(t[e]=this.templateOptions[e].name);return t},a.updateMimeTypeKey=function(t,e){this.values.mimeTypes()[e]=this.values.mimeTypes()[t],this.deleteMimeType(t)},a.updateMimeTypeAdapter=function(t,e,a){e.adapter=a,this.values.mimeTypes()[t]=e},a.updateMimeTypeTemplate=function(t,e,a){e.template=a,this.values.mimeTypes()[t]=e},a.deleteMimeType=function(t){delete this.values.mimeTypes()[t]},a.templateOptionsDescriptions=function(){var t=[];for(var e in this.templateOptions)this.templateOptions.hasOwnProperty(e)&&t.push(m("li",this.templateOptions[e].name+": "+this.templateOptions[e].description));return m("ul",t)},a.addMimeType=function(){this.values.mimeTypes()[this.newMimeType.regex()]={adapter:this.newMimeType.adapter(),template:this.newMimeType.template()},this.newMimeType.regex(""),this.newMimeType.adapter("local"),this.newMimeType.template("file")},a.changed=function(){var t=this,e=this.fields.some((function(e){return t.values[e]()!==n.a.data.settings[t.addPrefix(e)]})),a=this.checkboxes.some((function(e){return t.values[e]()!==("1"===n.a.data.settings[t.addPrefix(e)])})),o=this.objects.some((function(e){return JSON.stringify(t.values[e]())!==n.a.data.settings[t.addPrefix(e)]}));return e||a||o},a.onsubmit=function(t){var e=this;if(t.preventDefault(),!this.loading){this.loading=!0,n.a.alerts.dismiss(this.successAlert);var a={};this.fields.forEach((function(t){return a[e.addPrefix(t)]=e.values[t]()})),this.checkboxes.forEach((function(t){return a[e.addPrefix(t)]=e.values[t]()})),this.objects.forEach((function(t){return a[e.addPrefix(t)]=JSON.stringify(e.values[t]())})),u()(a).then((function(){e.successAlert=n.a.alerts.show(d.a,{type:"success"},n.a.translator.trans("core.admin.basics.saved_message"))})).catch((function(){})).then((function(){e.loading=!1,m.redraw()}))}},a.addPrefix=function(t){return this.settingsPrefix+"."+t},e}(M.a),O={UploadPage:P};n.a.initializers.add("fof-upload",(function(t){t.extensionData.for("fof-upload").registerPage(P).registerPermission({icon:"far fa-file",label:t.translator.trans("fof-upload.admin.permissions.upload_label"),permission:"fof-upload.upload"},"start",50).registerPermission({icon:"fas fa-download",label:t.translator.trans("fof-upload.admin.permissions.download_label"),permission:"fof-upload.download",allowGuest:!0},"view",50).registerPermission({icon:"fas fa-eye",label:t.translator.trans("fof-upload.admin.permissions.view_user_uploads_label"),permission:"fof-upload.viewUserUploads"},"moderate",50).registerPermission({icon:"fas fa-trash",label:t.translator.trans("fof-upload.admin.permissions.delete_uploads_of_others_label"),permission:"fof-upload.deleteUserUploads"},"moderate",50)}))}]);
//# sourceMappingURL=admin.js.map