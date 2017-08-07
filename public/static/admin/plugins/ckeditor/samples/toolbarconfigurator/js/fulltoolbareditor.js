"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};window.ToolbarConfigurator={},function(){function t(){this.instanceid="fte"+CKEDITOR.tools.getNextId(),this.textarea=new CKEDITOR.dom.element("textarea"),this.textarea.setAttributes({id:this.instanceid,name:this.instanceid,contentEditable:!0}),this.editorInstance=this.buttons=null}ToolbarConfigurator.FullToolbarEditor=t,t.prototype.init=function(o){var e=this;document.body.appendChild(this.textarea.$),CKEDITOR.replace(this.instanceid),this.editorInstance=CKEDITOR.instances[this.instanceid],this.editorInstance.once("configLoaded",function(n){var r=n.editor.config;delete r.removeButtons,delete r.toolbarGroups,delete r.toolbar,ToolbarConfigurator.AbstractToolbarModifier.extendPluginsConfig(r),n.editor.once("loaded",function(){e.buttons=t.toolbarToButtons(e.editorInstance.toolbar),e.buttonsByGroup=t.groupButtons(e.buttons),e.buttonNamesByGroup=e.groupButtonNamesByGroup(e.buttons),n.editor.container.hide(),"function"==typeof o&&o(e.buttons)})})},t.prototype.groupButtonNamesByGroup=function(o){var e=this;o=t.groupButtons(o);for(var n in o)o[n]=t.map(o[n],function(t){return e.getCamelCasedButtonName(t.name)});return o},t.prototype.getGroupByName=function(t){for(var o=this.editorInstance.config.toolbarGroups||this.getFullToolbarGroupsConfig(),e=o.length,n=0;n<e;n+=1)if(o[n].name===t)return o[n];return null},t.prototype.getCamelCasedButtonName=function(t){var o,e=this.editorInstance.ui.items;for(o in e)if(e[o].name==t)return o;return null},t.prototype.getFullToolbarGroupsConfig=function(t){t=!0===t;for(var o=[],e=this.editorInstance.toolbar,n=e.length,r=0;r<n;r+=1){var a=e[r],i={};"string"!=typeof a.name?t&&o.push("/"):(i.name=a.name,a.groups&&(i.groups=Array.prototype.slice.call(a.groups)),o.push(i))}return o},t.filter=function(t,o){for(var e=t&&t.length?t.length:0,n=[],r=0;r<e;r+=1)o(t[r])&&n.push(t[r]);return n},t.map=function(t,o){var e;if(CKEDITOR.tools.isArray(t)){e=[];for(var n=t.length,r=0;r<n;r+=1)e.push(o(t[r]))}else for(n in e={},t)e[n]=o(t[n]);return e},t.groupButtons=function(t){for(var o={},e=t.length,n=0;n<e;n+=1){var r=t[n],a=r.toolbar.split(",")[0];o[a]=o[a]||[],o[a].push(r)}return o},t.toolbarToButtons=function(o){for(var e=[],n=o.length,r=0;r<n;r+=1)"object"==_typeof(o[r])&&(e=e.concat(t.groupToButtons(o[r])));return e},t.createToolbarButton=function(o){var e=new CKEDITOR.dom.element("a"),n=t.createIcon(o.name,o.icon,o.command);if(e.setStyle("float","none"),e.addClass("cke_"+("rtl"==CKEDITOR.lang.dir?"rtl":"ltr")),o instanceof CKEDITOR.ui.button)e.addClass("cke_button"),e.addClass("cke_toolgroup"),e.append(n);else if(CKEDITOR.ui.richCombo&&o instanceof CKEDITOR.ui.richCombo){var n=new CKEDITOR.dom.element("span"),r=new CKEDITOR.dom.element("span"),a=new CKEDITOR.dom.element("span");e.addClass("cke_combo_button"),n.addClass("cke_combo_text"),n.addClass("cke_combo_inlinelabel"),n.setText(o.label),r.addClass("cke_combo_open"),a.addClass("cke_combo_arrow"),r.append(a),e.append(n),e.append(r)}return e},t.createIcon=function(t,o,e){var n=CKEDITOR.skin.getIconStyle(t,"rtl"==CKEDITOR.lang.dir),n=(n=n||CKEDITOR.skin.getIconStyle(o,"rtl"==CKEDITOR.lang.dir))||CKEDITOR.skin.getIconStyle(e,"rtl"==CKEDITOR.lang.dir);return o=new CKEDITOR.dom.element("span"),o.addClass("cke_button_icon"),o.addClass("cke_button__"+t+"_icon"),o.setAttribute("style",n),o.setStyle("float","none"),o},t.createButton=function(t,o){var e=new CKEDITOR.dom.element("button");if(e.addClass("button-a"),e.setAttribute("type","button"),"string"==typeof o){o=o.split(" ");for(var n=o.length;n--;)e.addClass(o[n])}return e.setHtml(t),e},t.groupToButtons=function(o){for(var e=[],n=(o=o.items)?o.length:0,r=0;r<n;r+=1){var a=o[r];(a instanceof CKEDITOR.ui.button||CKEDITOR.ui.richCombo&&a instanceof CKEDITOR.ui.richCombo)&&(a.$=t.createToolbarButton(a),e.push(a))}return e}}();