"use strict";!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/gl",[],function(){return{inputTooLong:function(e){var n=e.input.length-e.maximum,r="Elimine ";return r+=1===n?"un carácter":n+" caracteres"},inputTooShort:function(e){var n=e.minimum-e.input.length,r="Engada ";return r+=1===n?"un carácter":n+" caracteres"},loadingMore:function(){return"Cargando máis resultados…"},maximumSelected:function(e){var n="Só pode ";return 1===e.maximum?n+="un elemento":n+=e.maximum+" elementos",n},noResults:function(){return"Non se atoparon resultados"},searching:function(){return"Buscando…"}}}),e.define,e.require}();