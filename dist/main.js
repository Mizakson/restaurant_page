(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var c=t.getElementsByTagName("script");if(c.length)for(var o=c.length-1;o>-1&&!n;)n=c[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})();const n=e.p+"6562ae20c168594eac7d.jpg",t=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("active"),t.id="homepage-body";const c=new Image;c.src=n;const o=document.createElement("h1");o.innerHTML="Central Cafe";const a=document.createElement("p");a.innerHTML="A warm cafe located at the heart of Central City",t.appendChild(o),t.appendChild(c),t.appendChild(a),e.appendChild(t)};!function(){function e(){document.getElementById("content").innerHTML=""}document.addEventListener("click",(function(n){n.target.closest("#home")&&(e(),t())})),document.addEventListener("click",(function(n){n.target.closest("#menu")&&(e(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("active"),n.id="menu-body";const t=document.createElement("h2");t.innerHTML="Menu",n.appendChild(t);const c=document.createElement("h3");c.innerHTML="Drinks",n.appendChild(c);const o=document.createElement("ul");o.innerHTML="",o.innerHTML+="\n    <li>Espresso: $5.00</li>\n    <li>Latte: $5.00</li>\n    <li>Cappuccino: $10.00</li>\n    <li>Hot Chocolate: $5.00</li>\n    <li>Lemon Tea: $5.00</li>\n    <li>Green Tea: $10.00</li>\n    ",n.appendChild(o);const a=document.createElement("h3");a.innerHTML="Desserts",n.appendChild(a);const i=document.createElement("ul");i.innerHTML="",i.innerHTML+="\n    <li>Brownies: $5.00</li>\n    <li>Cinnamon Roll: $5.00</li>\n    <li>Croissant: $5.00</li>\n    <li>Lemon Pie: $5.00</li>\n    <li>Blueberry Muffin: $10.00</li>\n    <li>Chocolate Muffin: $10.00</li>\n    ",n.appendChild(i),e.appendChild(n)}())})),document.addEventListener("click",(function(n){n.target.closest("#about")&&(e(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("active"),n.id="about-body";const t=document.createElement("h2");t.innerHTML="About",n.appendChild(t);const c=document.createElement("p");c.innerHTML="Central Cafe is a quaint cafe located at the heart of Central City. <br>\n    Known as a great place to read, meet a friend, or enjoy the city atmosphere, <br>\n    Central Cafe is located at 999 Central Square. <br>\n    <br>\n    To Contact us please call (123)-456-7890 <br>\n    or send us an email at centralcafe@notreal.com\n    <br>\n    Thanks again for stopping by Central Cafe! \n    ",n.appendChild(c),e.appendChild(n)}())}))}(),function(){const e=document.querySelector("body"),n=document.createElement("header");document.createElement("h1").innerHTML="Restaurant Page Project";const t=document.createElement("div"),c=document.createElement("h3");c.innerHTML="Odin Project JavaScript Course Project #3";const o=document.createElement("p");o.innerHTML="A program by Mizakson",t.appendChild(c),t.appendChild(o),n.appendChild(t);const a=document.createElement("nav"),i=document.createElement("button");i.id="home",i.innerHTML="Home";const r=document.createElement("button");r.id="menu",r.innerHTML="Menu";const l=document.createElement("button");l.id="about",l.innerHTML="About",a.appendChild(i),a.appendChild(r),a.appendChild(l),n.appendChild(a),e.appendChild(n);const d=document.createElement("div");d.id="content",e.appendChild(d)}(),t()})();