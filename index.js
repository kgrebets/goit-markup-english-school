(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y(o,n,i=3,r=200){let e=performance.now();function t(s){e===void 0&&(e=s);const h=(s-e)/r,g=Math.pow(h,i),d=Math.abs(Math.min(g,1e3)).toFixed();o.innerHTML=d,d<n&&requestAnimationFrame(t)}requestAnimationFrame(t)}const v=o=>{o.forEach(n=>{n.isIntersecting&&y(document.querySelector(".side-image-content-title"),1e3,3)})},b={root:document,rootMargin:"0px",threshold:.8},w=new IntersectionObserver(v,b);w.observe(document.querySelector(".leave-an-application"));const u=document.body,c=document.querySelector(".overlay-menu"),L=document.querySelector(".burger-menu"),q=document.querySelector(".close-menu"),E=document.querySelectorAll(".overlay-menu a"),f=()=>{c.classList.add("closing"),c.addEventListener("transitionend",()=>{c.classList.remove("active","closing"),u.classList.remove("no-scroll")},{once:!0})};L.addEventListener("click",()=>{c.classList.add("active"),u.classList.add("no-scroll")});q.addEventListener("click",f);E.forEach(o=>{o.addEventListener("click",f)});const P=document.querySelector(".header"),S=P.offsetHeight;document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(n){n.preventDefault();const i=this.getAttribute("href").slice(1),r=document.getElementById(i);if(r){const e=r.getBoundingClientRect().top+window.scrollY-S;window.scrollTo({top:e,behavior:"smooth"})}})});const m=document.querySelector(".english-package-card"),M=-8,O=11;let a=0,l=0,p=!1;const A=new IntersectionObserver(o=>{p=o[0].isIntersecting},{root:null,threshold:.1});A.observe(m);window.addEventListener("scroll",()=>{if(!p){a=0,l=0;return}const o=m.getBoundingClientRect(),n=o.top,i=o.height,r=window.innerHeight;let e=Math.min(Math.max((r-n)/(r+i),0),1);e=e*2.5,e=Math.min(e,1),a=e*M,l=e*O;const t=document.querySelector(":root");t.style.setProperty("--first-card-initial-degree",`${a}deg`),t.style.setProperty("--second-card-initial-degree",`${l}deg`)});const B="1280";new Swiper(".swiper",{direction:"horizontal",autoplay:!0,slidesPerView:1,spaceBetween:32,loop:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1280:{slidesPerView:3,spaceBetween:32,loop:!1}},on:{breakpoint(o,n){o.currentBreakpoint===B&&o.slideToLoop(0)}}});AOS.init({once:!0,disable:"mobile"});
//# sourceMappingURL=index.js.map