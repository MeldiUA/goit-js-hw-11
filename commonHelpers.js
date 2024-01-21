import{S as c,i as u}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const d=document.querySelector(".form"),l=document.querySelector(".gallery"),i=document.querySelector(".loader"),p=new c(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function f(o="cat"){const s=new URLSearchParams({key:"41901315-991c01eb87449dbd0d544d02b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error("Request is not OK");return r.json()}).then(({hits:r})=>{if(r.length>0){const a=r.reduce((t,e)=>t+`<li class="gallery-item">
                  <a href=${e.largeImageURL}> 
                    <img class="gallery-img" src =${e.webformatURL} alt=${e.tags}/>
                  </a>
                  <div class="gallery-text-box">
                    <p>Likes: <span class="text-value">${e.likes}</span></p>
                    <p>views: <span class="text-value">${e.views}</span></p>
                    <p>comments: <span class="text-value">${e.comments}</span></p>
                    <p>downloads: <span class="text-value">${e.downloads}</span></p>
                </div>
                </li>`,"");l.innerHTML=a,p.refresh()}else u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{console.log(r.message)}).finally(()=>{i.style.display="none"})}d.addEventListener("submit",o=>{o.preventDefault(),l.innerHTML="",i.style.display="block",f(o.target.elements.search.value.trim()),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
