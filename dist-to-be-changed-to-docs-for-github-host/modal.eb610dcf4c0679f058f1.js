(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(t,e,s){"use strict";function n(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}s.r(e);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var e,s,i;return e=t,(s=[{key:"events",value:function(){var t=this;this.closeIcon.addEventListener("click",(function(){return t.closeTheModal()})),document.addEventListener("keyup",(function(e){return t.keyPressHandler(e)}))}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n\n\t\t\t <div class="modal">\n\t\t\t    <div class="modal__inner">\n\t\t\t      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n\t\t\t      <div class="wrapper wrapper--narrow">\n\t\t\t        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n\t\t\t      </div>\n\n\t\t\t      <div class="social-icons">\n\t\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n\t\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n\t\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n\t\t\t        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t    <div class="modal__close">X</div>\n\t\t\t  </div>\n\n\t\t\t')}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"keyPressHandler",value:function(t){27==t.keyCode&&this.closeTheModal()}}])&&n(e.prototype,s),i&&n(e,i),t}();e.default=i}}]);