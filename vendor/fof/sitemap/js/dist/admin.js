module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=flarum.core.compat["admin/app"]},function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a);var s=n(1),i=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=a.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.content=function(){return[m("div",{className:"container"},m("div",{className:"FoFSitemapSettingsPage"},m("div",{className:"Form-group"},this.buildSettingComponent({type:"select",setting:"fof-sitemap.mode",options:{run:app.translator.trans("fof-sitemap.admin.settings.modes.runtime"),cache:app.translator.trans("fof-sitemap.admin.settings.modes.cache"),"cache-disk":app.translator.trans("fof-sitemap.admin.settings.modes.cache_disk"),"multi-file":app.translator.trans("fof-sitemap.admin.settings.modes.multi_file")},label:app.translator.trans("fof-sitemap.admin.settings.mode_label")})),m("p",null,app.translator.trans("fof-sitemap.admin.settings.mode_help")),m("div",null,m("h3",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_runtime_label")),m("p",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_runtime"))),m("h4",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_schedule")),m("p",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_schedule_setup",{a:m("a",{href:"https://discuss.flarum.org/d/24118",target:"_blank"})})),m("div",null,m("h3",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_cache_disk_label")),m("p",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_cache_disk"))),m("h4",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_large")),m("div",null,m("h3",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_multi_label")),m("p",null,app.translator.trans("fof-sitemap.admin.settings.mode_help_multi"))),m("hr",null),m("h3",null,app.translator.trans("fof-sitemap.admin.settings.advanced_options_label")),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-sitemap.admin.settings.frequency_label")),this.buildSettingComponent({type:"select",setting:"fof-sitemap.frequency",options:{hourly:app.translator.trans("fof-sitemap.admin.settings.frequency.hourly"),"twice-daily":app.translator.trans("fof-sitemap.admin.settings.frequency.twice_daily"),daily:app.translator.trans("fof-sitemap.admin.settings.frequency.daily")},label:app.translator.trans("fof-sitemap.admin.settings.frequency_label")})),this.submitButton()))]},a}(n.n(s).a);r.a.initializers.add("fof/sitemap",(function(t){t.extensionData.for("fof-sitemap").registerPage(i)}))}]);
//# sourceMappingURL=admin.js.map