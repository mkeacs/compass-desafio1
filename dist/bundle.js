!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var n in a)("object"==typeof exports?exports:e)[n]=a[n]}}(self,(()=>(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=[{id:1,title:"The Future",imageUrl:"./public/images/post.png",body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:2,title:"The Future",imageUrl:"./public/images/post.png",body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{id:3,title:"The Future",imageUrl:"./public/images/post.png",body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}],a=[{id:1,postId:1,email:"user1@example.com",body:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},{id:2,postId:2,email:"user2@example.com",body:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},{id:3,postId:3,email:"user3@example.com",body:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}];function n(){const e=document.getElementById("posts-list");e&&t.forEach((o=>{const d=document.createElement("div");d.className="post-item";const i=document.createElement("img");i.src=o.imageUrl,d.appendChild(i);const s=document.createElement("h2");s.textContent=o.title,d.appendChild(s);const m=document.createElement("p");m.textContent=o.body,d.appendChild(m);const p=document.createElement("a");p.textContent="Expand...",p.href=`post-details.html?id=${o.id}`,d.appendChild(p),d.addEventListener("click",(()=>{!function(e){const o=document.getElementById("post-details"),d=t.find((t=>t.id===e));if(o&&d){o.innerHTML="";const t=document.createElement("h2");t.textContent=d.title,o.appendChild(t);const i=document.createElement("img");i.src=d.imageUrl,o.appendChild(i);const s=document.createElement("p");s.textContent=d.body,o.appendChild(s);const m=document.createElement("ul");m.className="comments-list",a.filter((t=>t.postId===e)).forEach((e=>{const t=document.createElement("li");t.textContent=`E-mail: ${e.email} | Comentário: ${e.body}`,m.appendChild(t)})),o.appendChild(m);const p=document.createElement("a");p.textContent="Voltar",p.href="#",p.addEventListener("click",(()=>{n(),o.innerHTML=""})),o.appendChild(p)}}(o.id)})),e.appendChild(d)}))}return document.addEventListener("DOMContentLoaded",(()=>{n()})),e})()));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFheEIsU0FBU0ssY0FBYyxLQUMxQ21CLEVBQVdiLFlBQWMsU0FDekJhLEVBQVdWLEtBQU8sSUFDbEJVLEVBQVdULGlCQUFpQixTQUFTLEtBQ25DakIsSUFDQWtCLEVBQVlHLFVBQVksRUFBRSxJQUU1QkgsRUFBWVAsWUFBWWUsRSxDQUU1QixDQW5EUUMsQ0FBZ0J0QixFQUFLWixHQUFHLElBRzFCUSxFQUFVVSxZQUFZTCxFQUFTLEdBR3JDLEMsT0FnREFKLFNBQVNlLGlCQUFpQixvQkFBb0IsS0FDNUNqQixHQUFhLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYXNzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb21wYXNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbXBhc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21wYXNzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vY29tcGFzcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuZXhwb3J0IGludGVyZmFjZSBQb3N0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW1hZ2VVcmw6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnQge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgcG9zdElkOiBudW1iZXI7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0czogUG9zdFtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IFwiVGhlIEZ1dHVyZVwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiLi9wdWJsaWMvaW1hZ2VzL3Bvc3QucG5nXCIsXHJcbiAgICBib2R5OiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiVGhlIEZ1dHVyZVwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiLi9wdWJsaWMvaW1hZ2VzL3Bvc3QucG5nXCIsXHJcbiAgICBib2R5OiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiVGhlIEZ1dHVyZVwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiLi9wdWJsaWMvaW1hZ2VzL3Bvc3QucG5nXCIsXHJcbiAgICBib2R5OiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suXCJcclxuICB9LFxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tZW50czogQ29tbWVudFtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgcG9zdElkOiAxLFxyXG4gICAgZW1haWw6IFwidXNlcjFAZXhhbXBsZS5jb21cIixcclxuICAgIGJvZHk6IFwiYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBwb3N0SWQ6IDIsXHJcbiAgICBlbWFpbDogXCJ1c2VyMkBleGFtcGxlLmNvbVwiLFxyXG4gICAgYm9keTogXCJhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHBvc3RJZDogMyxcclxuICAgIGVtYWlsOiBcInVzZXIzQGV4YW1wbGUuY29tXCIsXHJcbiAgICBib2R5OiBcImFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhXCJcclxuICB9LFxyXG5cclxuXTtcclxuIiwiLy8gaW5kZXgudHNcclxuXHJcbmltcG9ydCB7IHBvc3RzLCBjb21tZW50cyB9IGZyb20gJy4vZGF0YSc7XHJcblxyXG4vLyBGdW7Dp8OjbyBwYXJhIHJlbmRlcml6YXIgYSBsaXN0YSBkZSBwb3N0cyBuYSB0ZWxhIGluaWNpYWxcclxuZnVuY3Rpb24gcmVuZGVyUG9zdHMoKSB7XHJcbiAgY29uc3QgcG9zdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RzLWxpc3QnKTtcclxuXHJcbiAgaWYgKHBvc3RzTGlzdCkge1xyXG4gICAgcG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xyXG4gICAgICBjb25zdCBwb3N0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwb3N0SXRlbS5jbGFzc05hbWUgPSAncG9zdC1pdGVtJztcclxuXHJcbiAgICAgIGNvbnN0IHBvc3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBwb3N0SW1hZ2Uuc3JjID0gcG9zdC5pbWFnZVVybDtcclxuICAgICAgcG9zdEl0ZW0uYXBwZW5kQ2hpbGQocG9zdEltYWdlKTtcclxuXHJcbiAgICAgIGNvbnN0IHBvc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgIHBvc3RUaXRsZS50ZXh0Q29udGVudCA9IHBvc3QudGl0bGU7XHJcbiAgICAgIHBvc3RJdGVtLmFwcGVuZENoaWxkKHBvc3RUaXRsZSk7XHJcblxyXG4gICAgICBjb25zdCBwb3N0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgcG9zdEJvZHkudGV4dENvbnRlbnQgPSBwb3N0LmJvZHk7XHJcbiAgICAgIHBvc3RJdGVtLmFwcGVuZENoaWxkKHBvc3RCb2R5KTtcclxuXHJcbiAgICAgIGNvbnN0IGV4cGFuZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGV4cGFuZExpbmsudGV4dENvbnRlbnQgPSAnRXhwYW5kLi4uJztcclxuICAgICAgZXhwYW5kTGluay5ocmVmID0gYHBvc3QtZGV0YWlscy5odG1sP2lkPSR7cG9zdC5pZH1gO1xyXG4gICAgICBwb3N0SXRlbS5hcHBlbmRDaGlsZChleHBhbmRMaW5rKTtcclxuICAgICAgXHJcblxyXG4gICAgICAvLyBBZGljaW9uZSB1bSBldmVudG8gZGUgY2xpcXVlIHBhcmEgcmVkaXJlY2lvbmFyIHBhcmEgYSBww6FnaW5hIGRlIGRldGFsaGVzIGRvIHBvc3RcclxuICAgICAgcG9zdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2hvd1Bvc3REZXRhaWxzKHBvc3QuaWQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHBvc3RzTGlzdC5hcHBlbmRDaGlsZChwb3N0SXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZ1bsOnw6NvIHBhcmEgcmVuZGVyaXphciBvcyBkZXRhbGhlcyBkZSB1bSBwb3N0IGUgc2V1cyBjb21lbnTDoXJpb3NcclxuZnVuY3Rpb24gc2hvd1Bvc3REZXRhaWxzKHBvc3RJZDogbnVtYmVyKSB7XHJcbiAgY29uc3QgcG9zdERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdC1kZXRhaWxzJyk7XHJcbiAgY29uc3QgcG9zdCA9IHBvc3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHBvc3RJZCk7XHJcblxyXG4gIGlmIChwb3N0RGV0YWlscyAmJiBwb3N0KSB7XHJcbiAgICBwb3N0RGV0YWlscy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBwb3N0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcG9zdFRpdGxlLnRleHRDb250ZW50ID0gcG9zdC50aXRsZTtcclxuICAgIHBvc3REZXRhaWxzLmFwcGVuZENoaWxkKHBvc3RUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgcG9zdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBwb3N0SW1hZ2Uuc3JjID0gcG9zdC5pbWFnZVVybDtcclxuICAgIHBvc3REZXRhaWxzLmFwcGVuZENoaWxkKHBvc3RJbWFnZSk7XHJcblxyXG4gICAgY29uc3QgcG9zdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwb3N0Qm9keS50ZXh0Q29udGVudCA9IHBvc3QuYm9keTtcclxuICAgIHBvc3REZXRhaWxzLmFwcGVuZENoaWxkKHBvc3RCb2R5KTtcclxuXHJcbiAgICBjb25zdCBjb21tZW50c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29tbWVudHNMaXN0LmNsYXNzTmFtZSA9ICdjb21tZW50cy1saXN0JztcclxuXHJcbiAgICAvLyBGaWx0cmFyIG9zIGNvbWVudMOhcmlvcyBjb20gYmFzZSBubyBwb3N0SWRcclxuICAgIGNvbnN0IHBvc3RDb21tZW50cyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbWVudCkgPT4gY29tbWVudC5wb3N0SWQgPT09IHBvc3RJZCk7XHJcbiAgICBwb3N0Q29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGNvbW1lbnRJdGVtLnRleHRDb250ZW50ID0gYEUtbWFpbDogJHtjb21tZW50LmVtYWlsfSB8IENvbWVudMOhcmlvOiAke2NvbW1lbnQuYm9keX1gO1xyXG4gICAgICBjb21tZW50c0xpc3QuYXBwZW5kQ2hpbGQoY29tbWVudEl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcG9zdERldGFpbHMuYXBwZW5kQ2hpbGQoY29tbWVudHNMaXN0KTtcclxuXHJcbiAgICAvLyBBZGljaW9uZSB1bSBsaW5rIHBhcmEgcmV0b3JuYXIgw6AgdGVsYSBhbnRlcmlvciAobGlzdGEgZGUgcG9zdHMpXHJcbiAgICBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYmFja0J1dHRvbi50ZXh0Q29udGVudCA9ICdWb2x0YXInO1xyXG4gICAgYmFja0J1dHRvbi5ocmVmID0gJyMnO1xyXG4gICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcmVuZGVyUG9zdHMoKTtcclxuICAgICAgcG9zdERldGFpbHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9KTtcclxuICAgIHBvc3REZXRhaWxzLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pY2lhbGl6YcOnw6NvIGRhIHDDoWdpbmFcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICByZW5kZXJQb3N0cygpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImEiLCJpIiwic2VsZiIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInBvc3RzIiwiaWQiLCJ0aXRsZSIsImltYWdlVXJsIiwiYm9keSIsImNvbW1lbnRzIiwicG9zdElkIiwiZW1haWwiLCJyZW5kZXJQb3N0cyIsInBvc3RzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JFYWNoIiwicG9zdCIsInBvc3RJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBvc3RJbWFnZSIsInNyYyIsImFwcGVuZENoaWxkIiwicG9zdFRpdGxlIiwidGV4dENvbnRlbnQiLCJwb3N0Qm9keSIsImV4cGFuZExpbmsiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc3REZXRhaWxzIiwiZmluZCIsInAiLCJpbm5lckhUTUwiLCJjb21tZW50c0xpc3QiLCJmaWx0ZXIiLCJjb21tZW50IiwiY29tbWVudEl0ZW0iLCJiYWNrQnV0dG9uIiwic2hvd1Bvc3REZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==