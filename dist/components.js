window.Dropmenu=function(){var n={parent:null,options:null,input:null};$.fn.show=function(t){var i=$(this);n.parent=i.closest(".gb-selector"),n.options=n.parent.find(".options"),n.input=n.parent.find(".input>input");var o=n.options.find("li"),s=o.eq(0).height()*o.length;n.options.css("height",s),t&&t.call(this)},$.fn.hide=function(t){var i=$(this),o=i.is(".gb-selector");o?function(){i.find(".options").css("height",0)}():function(){n.parent=i.closest(".gb-selector"),n.options=n.parent.find(".options"),n.input=n.parent.find(".input>input"),n.options.css("height",0)}(),t&&(o?t.call(this):t())},$(document).on("click",function(){$(".gb-selector").hide()}),$(document.body).on("click",".gb-selector",function(n){n.stopPropagation()}).on("click",".gb-selector>.input",function(){$(this).show()}).on("click",".gb-selector>.options>li",function(){var t=$(this).text(),i=$(this).hasClass("title");i||$(this).hide(function(){n.input.val(t)})})};