import{S as u,i as d}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=document.querySelector(".form"),c=document.querySelector(".gallery"),i=document.querySelector(".loader"),f=document.querySelector('input[name="search"]'),l=new URLSearchParams({key:"41901315-991c01eb87449dbd0d544d02b",q:"cat",image_type:"photo",orientation:"horizontal",safesearch:!0}),m=new u(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function y(s){return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error("Request is not OK");return t.json()}).then(({hits:t})=>{if(t.length>0){const a=t.reduce((o,e)=>o+`<li class="gallery-item">
                  <a href=${e.largeImageURL}> 
                    <img class="gallery-img" src =${e.webformatURL} alt=${e.tags}/>
                  </a>
                  <div class="gallery-text-box">
                    <p>Likes: <span class="text-value">${e.likes}</span></p>
                    <p>views: <span class="text-value">${e.views}</span></p>
                    <p>comments: <span class="text-value">${e.comments}</span></p>
                    <p>downloads: <span class="text-value">${e.downloads}</span></p>
                </div>
                </li>`,"");c.innerHTML=a,m.refresh()}else d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.log(t.message)}).finally(()=>{i.style.display="none"})}p.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",i.style.display="block",l.set("q",f.value.trim());const t=new URLSearchParams(l);y(t),s.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
