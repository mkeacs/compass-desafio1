!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(self,(()=>(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=[{id:1,title:"Slasher",imageUrl:"./public/images/slasher-horror.jpg",body:"Slasher is a subgenre of horror films that focuses on a killer or a group of killers who gruesomely murder their victims, often using bladed weapons or sharp objects. The genre is known for its intense suspense, graphic violence, and iconic villains. Scream, also known as Scary Movie, is a classic slasher film directed by Wes Craven. Released in 1996, the film follows a masked killer, Ghostface, who terrorizes a small town, targeting a group of high school students. Scream became a huge success and spawned multiple sequels, leaving a significant impact on the slasher genre."},{id:2,title:"Psychological",imageUrl:"./public/images/psychological-horror.jpg",body:"Psychological horror is a genre that delves into the deep and unsettling aspects of the human mind, often exploring fears, anxieties, and the thin line between reality and illusion. It aims to create an intense emotional experience, relying on psychological tension rather than gore or jump scares. Black Swan is a psychological horror film directed by Darren Aronofsky. The movie follows Nina Sayers, a talented ballet dancer who lands the lead role in Swan Lake. As she prepares for the demanding dual role of the innocent White Swan and the seductive Black Swan, Nina's psyche begins to unravel."},{id:3,title:"Cosmic",imageUrl:"./public/images/cosmic-horror.png",body:"Cosmic horror is a subgenre of horror that delves into the fear of the unknown, cosmic entities, and the insignificance of humanity in the vastness of the universe. In the film 'The Lighthouse,' directed by Robert Eggers, this genre takes center stage, immersing viewers in a nightmarish tale of isolation and madness. Set in the late 19th century, the movie follows two lighthouse keepers, played brilliantly by Willem Dafoe and Robert Pattinson, as they descend into paranoia and supernatural encounters on a desolate and eerie island."}],n=[{id:1,postId:1,email:"horrorfan@gmail.com",body:"Just finished watching 'Scream,' and I can't get over how intense and thrilling it was! The classic slasher elements combined with the self-awareness and clever humor made it an unforgettable horror experience. The iconic Ghostface killer kept me on the edge of my seat, and the suspenseful plot twists had me guessing until the very end."},{id:2,postId:1,email:" slasherguru@yahoo.com",body:"As a die-hard fan of slasher films, 'Scream' exceeded all my expectations! It pays homage to the genre while brilliantly subverting its tropes. The characters were relatable, and Neve Campbell's performance as Sidney was phenomenal. The blend of horror and humor was perfectly balanced, and the identity of the Ghostface killer kept me guessing."},{id:3,postId:1,email:"  screamlover@gmail.com",body:"Having watched numerous slasher films, 'Scream' stands out as one of the most iconic and game-changing entries in the genre. The self-referential and meta aspects brought a fresh twist, making it both terrifying and entertaining. The kills were gruesome, and the mystery surrounding the killer's identity kept me engaged throughout."},{id:1,postId:2,email:"bswanfan@gmail.com",body:"Just watched 'Black Swan,' and wow, what a mind-bending psychological horror! The portrayal of Nina's descent into madness was chilling, and I couldn't help but feel a mix of fascination and terror throughout the film. Darren Aronofsky's direction is masterful, and Natalie Portman's performance was hauntingly brilliant."},{id:2,postId:2,email:" horrorfanatic@gmail.com",body:"As a fan of psychological horror, 'Black Swan' had me hooked from start to finish! The movie's intense atmosphere and mind games kept me on the edge of my seat. Natalie Portman's portrayal of Nina's internal struggle was both captivating and unsettling. The seamless blend of ballet and horror elements made it a unique and unforgettable experience."},{id:3,postId:2,email:"scaredycat@icloud.com",body:"Okay, I finally mustered up the courage to watch 'Black Swan,' and let me tell you, it was one wild psychological rollercoaster! The psychological torment Nina goes through made me question what's real and what's not. I was so immersed in the story that I couldn't look away, despite my heart pounding with fear."},{id:1,postId:3,email:"cosmicfear@icloud.com",body:"Just witnessed the cosmic horror masterpiece, 'The Lighthouse,' and I'm still trying to wrap my head around it! The eerie atmosphere and Lovecraftian elements had me at the edge of my seat. Willem Dafoe and Robert Pattinson's performances were phenomenal, adding to the overwhelming sense of dread. A chilling and thought-provoking experience!"},{id:2,postId:3,email:"feartheunknown@live.com",body:"Wow, 'The Lighthouse' truly embodies the essence of cosmic horror. The isolated setting, the cryptic symbolism, and the relentless descent into madness left me in awe and terror. Willem Dafoe's character was enigmatic and haunting, and Robert Pattinson's portrayal of a man losing his grip on reality was superb."},{id:3,postId:3,email:"scaredwitless@example.com",body:"I never thought I'd be so terrified by a film until I watched 'The Lighthouse.' The cosmic horror elements were unlike anything I've ever seen, and I found myself on the edge of my seat, anticipating what mind-bending horrors awaited the characters next. The eerie black-and-white cinematography added to the unsettling atmosphere."}];function a(e){const a=document.getElementById("post-details"),o=t.find((t=>t.id===e));if(a&&o){a.innerHTML="";const t=document.createElement("div");t.className="post-details";const i=document.createElement("a");i.href="./index.html",i.className="backButton";const s=document.createElement("img");s.src="./public/images/back-button.png",i.appendChild(s),a.appendChild(i);const r=document.createElement("img");r.src=o.imageUrl,t.appendChild(r);const l=document.createElement("h2");l.textContent=o.title,t.appendChild(l);const d=document.createElement("p");d.textContent=o.body,t.appendChild(d),a.appendChild(t);const c=document.createElement("div");c.className="comments-details";const h=document.createElement("ul");h.className="comments-list",n.filter((t=>t.postId===e)).forEach((e=>{const t=document.createElement("li");t.className="comment-item";const n=e.email.split("@")[0],a=document.createElement("span");a.className="custom-font",a.textContent=`${n}: ${e.email}: `,t.appendChild(a);const o=document.createElement("span");o.className="comment-body",o.textContent=e.body,o.style.fontWeight="200",t.appendChild(o),h.appendChild(t)})),c.appendChild(h),a.appendChild(c)}}return document.addEventListener("DOMContentLoaded",(()=>{const e=new URLSearchParams(window.location.search).get("id");e?a(parseInt(e,10)):function(){const e=document.getElementById("posts-list");e&&t.forEach((t=>{const n=document.createElement("div");n.className="post-item";const o=document.createElement("img");o.src=t.imageUrl,n.appendChild(o);const i=document.createElement("h2");i.textContent=t.title,n.appendChild(i);const s=document.createElement("p");s.textContent=t.body,n.appendChild(s);const r=document.createElement("a");r.textContent="Expand...",r.href=`post-details.html?id=${t.id}`,n.appendChild(r),n.addEventListener("click",(()=>{window.location.href=`post-details.html?id=${t.id}`,a(t.id)})),e.appendChild(n)}))}()})),e})()));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJDQUFBLFNBQTJDQSxFQUFNQyxHQUNoRCxHQUFzQixpQkFBWkMsU0FBMEMsaUJBQVhDLE9BQ3hDQSxPQUFPRCxRQUFVRCxTQUNiLEdBQXFCLG1CQUFYRyxRQUF5QkEsT0FBT0MsSUFDOUNELE9BQU8sR0FBSUgsT0FDUCxDQUNKLElBQUlLLEVBQUlMLElBQ1IsSUFBSSxJQUFJTSxLQUFLRCxHQUF1QixpQkFBWkosUUFBdUJBLFFBQVVGLEdBQU1PLEdBQUtELEVBQUVDLEVBQ3ZFLENBQ0EsQ0FURCxDQVNHQyxNQUFNLEksbUJDUlQsSSxLQ0F3QixDQUFDTixJQUNILG9CQUFYTyxRQUEwQkEsT0FBT0MsYUFDMUNDLE9BQU9DLGVBQWVWLEVBQVNPLE9BQU9DLFlBQWEsQ0FBRUcsTUFBTyxXQUU3REYsT0FBT0MsZUFBZVYsRUFBUyxhQUFjLENBQUVXLE9BQU8sR0FBTyxFLElDV3ZELE1BQU1DLEVBQWdCLENBQzNCLENBQ0VDLEdBQUksRUFDSkMsTUFBTyxVQUNQQyxTQUFVLHFDQUNWQyxLQUFNLHdrQkFFUixDQUNFSCxHQUFJLEVBQ0pDLE1BQU8sZ0JBQ1BDLFNBQVUsMkNBQ1ZDLEtBQU0sMGxCQUVSLENBQ0VILEdBQUksRUFDSkMsTUFBTyxTQUNQQyxTQUFVLG9DQUNWQyxLQUFNLDhoQkFLR0MsRUFBc0IsQ0FDakMsQ0FDRUosR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8sc0JBQ1BILEtBQU0sc1ZBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8seUJBQ1BILEtBQU0sNlZBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8sMEJBQ1BILEtBQU0sZ1ZBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8scUJBQ1BILEtBQU0scVVBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8sMkJBQ1BILEtBQU0saVdBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8sd0JBQ1BILEtBQU0sNFRBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8sd0JBQ1BILEtBQU0sMlZBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8sMEJBQ1BILEtBQU0sNFRBRVIsQ0FDRUgsR0FBSSxFQUNKSyxPQUFRLEVBQ1JDLE1BQU8sNEJBQ1BILEtBQU0sZ1ZDcERWLFNBQVNJLEVBQWdCRixHQUN2QixNQUFNRyxFQUFjQyxTQUFTQyxlQUFlLGdCQUN0Q0MsRUFBT1osRUFBTWEsTUFBTUMsR0FBTUEsRUFBRWIsS0FBT0ssSUFFeEMsR0FBSUcsR0FBZUcsRUFBTSxDQUN2QkgsRUFBWU0sVUFBWSxHQUV4QixNQUFNQyxFQUFVTixTQUFTTyxjQUFjLE9BQ3ZDRCxFQUFRRSxVQUFZLGVBRXBCLE1BQU1DLEVBQWFULFNBQVNPLGNBQWMsS0FDMUNFLEVBQVdDLEtBQU8sZUFDbEJELEVBQVdELFVBQVksYUFFdkIsTUFBTUcsRUFBZ0JYLFNBQVNPLGNBQWMsT0FDN0NJLEVBQWNDLElBQU0sa0NBQ3BCSCxFQUFXSSxZQUFZRixHQUV2QlosRUFBWWMsWUFBWUosR0FFeEIsTUFBTUssRUFBWWQsU0FBU08sY0FBYyxPQUN6Q08sRUFBVUYsSUFBTVYsRUFBS1QsU0FDckJhLEVBQVFPLFlBQVlDLEdBRXBCLE1BQU1DLEVBQVlmLFNBQVNPLGNBQWMsTUFDekNRLEVBQVVDLFlBQWNkLEVBQUtWLE1BQzdCYyxFQUFRTyxZQUFZRSxHQUVwQixNQUFNRSxFQUFXakIsU0FBU08sY0FBYyxLQUN4Q1UsRUFBU0QsWUFBY2QsRUFBS1IsS0FDNUJZLEVBQVFPLFlBQVlJLEdBRXBCbEIsRUFBWWMsWUFBWVAsR0FFeEIsTUFBTVksRUFBY2xCLFNBQVNPLGNBQWMsT0FDM0NXLEVBQVlWLFVBQVksbUJBRXhCLE1BQU1XLEVBQWVuQixTQUFTTyxjQUFjLE1BQzVDWSxFQUFhWCxVQUFZLGdCQUVKYixFQUFTeUIsUUFDM0JDLEdBQVlBLEVBQVF6QixTQUFXQSxJQUVyQjBCLFNBQVNELElBQ3BCLE1BQU1FLEVBQWN2QixTQUFTTyxjQUFjLE1BQzNDZ0IsRUFBWWYsVUFBWSxlQUV4QixNQUFNZ0IsRUFBV0gsRUFBUXhCLE1BQU00QixNQUFNLEtBQUssR0FDcENDLEVBQWUxQixTQUFTTyxjQUFjLFFBQzVDbUIsRUFBYWxCLFVBQVksY0FDekJrQixFQUFhVixZQUFjLEdBQUdRLE1BQWFILEVBQVF4QixVQUNuRDBCLEVBQVlWLFlBQVlhLEdBRXhCLE1BQU1DLEVBQWMzQixTQUFTTyxjQUFjLFFBQzNDb0IsRUFBWW5CLFVBQVksZUFDeEJtQixFQUFZWCxZQUFjSyxFQUFRM0IsS0FDbENpQyxFQUFZQyxNQUFNQyxXQUFhLE1BQy9CTixFQUFZVixZQUFZYyxHQUV4QlIsRUFBYU4sWUFBWVUsRUFBWSxJQUd2Q0wsRUFBWUwsWUFBWU0sR0FFeEJwQixFQUFZYyxZQUFZSyxFLENBRTVCLEMsT0FFQWxCLFNBQVM4QixpQkFBaUIsb0JBQW9CLEtBQzVDLE1BQ01sQyxFQURZLElBQUltQyxnQkFBZ0JDLE9BQU9DLFNBQVNDLFFBQzdCQyxJQUFJLE1BRXpCdkMsRUFDRkUsRUFBZ0JzQyxTQUFTeEMsRUFBUSxLQTVHckMsV0FDRSxNQUFNeUMsRUFBWXJDLFNBQVNDLGVBQWUsY0FFdENvQyxHQUNGL0MsRUFBTWdDLFNBQVNwQixJQUNiLE1BQU1vQyxFQUFXdEMsU0FBU08sY0FBYyxPQUN4QytCLEVBQVM5QixVQUFZLFlBRXJCLE1BQU1NLEVBQVlkLFNBQVNPLGNBQWMsT0FDekNPLEVBQVVGLElBQU1WLEVBQUtULFNBQ3JCNkMsRUFBU3pCLFlBQVlDLEdBRXJCLE1BQU1DLEVBQVlmLFNBQVNPLGNBQWMsTUFDekNRLEVBQVVDLFlBQWNkLEVBQUtWLE1BQzdCOEMsRUFBU3pCLFlBQVlFLEdBRXJCLE1BQU1FLEVBQVdqQixTQUFTTyxjQUFjLEtBQ3hDVSxFQUFTRCxZQUFjZCxFQUFLUixLQUM1QjRDLEVBQVN6QixZQUFZSSxHQUVyQixNQUFNc0IsRUFBV3ZDLFNBQVNPLGNBQWMsS0FDeENnQyxFQUFTdkIsWUFBYyxZQUN2QnVCLEVBQVM3QixLQUFPLHdCQUF3QlIsRUFBS1gsS0FDN0MrQyxFQUFTekIsWUFBWTBCLEdBRXJCRCxFQUFTUixpQkFBaUIsU0FBUyxLQUNqQ0UsT0FBT0MsU0FBU3ZCLEtBQU8sd0JBQXdCUixFQUFLWCxLQUNwRE8sRUFBZ0JJLEVBQUtYLEdBQUcsSUFHMUI4QyxFQUFVeEIsWUFBWXlCLEVBQVMsR0FHckMsQ0E2RUlFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYXNzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb21wYXNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbXBhc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21wYXNzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vY29tcGFzcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuZXhwb3J0IGludGVyZmFjZSBQb3N0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW1hZ2VVcmw6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnQge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgcG9zdElkOiBudW1iZXI7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0czogUG9zdFtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IFwiU2xhc2hlclwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiLi9wdWJsaWMvaW1hZ2VzL3NsYXNoZXItaG9ycm9yLmpwZ1wiLFxyXG4gICAgYm9keTogXCJTbGFzaGVyIGlzIGEgc3ViZ2VucmUgb2YgaG9ycm9yIGZpbG1zIHRoYXQgZm9jdXNlcyBvbiBhIGtpbGxlciBvciBhIGdyb3VwIG9mIGtpbGxlcnMgd2hvIGdydWVzb21lbHkgbXVyZGVyIHRoZWlyIHZpY3RpbXMsIG9mdGVuIHVzaW5nIGJsYWRlZCB3ZWFwb25zIG9yIHNoYXJwIG9iamVjdHMuIFRoZSBnZW5yZSBpcyBrbm93biBmb3IgaXRzIGludGVuc2Ugc3VzcGVuc2UsIGdyYXBoaWMgdmlvbGVuY2UsIGFuZCBpY29uaWMgdmlsbGFpbnMuIFNjcmVhbSwgYWxzbyBrbm93biBhcyBTY2FyeSBNb3ZpZSwgaXMgYSBjbGFzc2ljIHNsYXNoZXIgZmlsbSBkaXJlY3RlZCBieSBXZXMgQ3JhdmVuLiBSZWxlYXNlZCBpbiAxOTk2LCB0aGUgZmlsbSBmb2xsb3dzIGEgbWFza2VkIGtpbGxlciwgR2hvc3RmYWNlLCB3aG8gdGVycm9yaXplcyBhIHNtYWxsIHRvd24sIHRhcmdldGluZyBhIGdyb3VwIG9mIGhpZ2ggc2Nob29sIHN0dWRlbnRzLiBTY3JlYW0gYmVjYW1lIGEgaHVnZSBzdWNjZXNzIGFuZCBzcGF3bmVkIG11bHRpcGxlIHNlcXVlbHMsIGxlYXZpbmcgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gdGhlIHNsYXNoZXIgZ2VucmUuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiUHN5Y2hvbG9naWNhbFwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiLi9wdWJsaWMvaW1hZ2VzL3BzeWNob2xvZ2ljYWwtaG9ycm9yLmpwZ1wiLFxyXG4gICAgYm9keTogXCJQc3ljaG9sb2dpY2FsIGhvcnJvciBpcyBhIGdlbnJlIHRoYXQgZGVsdmVzIGludG8gdGhlIGRlZXAgYW5kIHVuc2V0dGxpbmcgYXNwZWN0cyBvZiB0aGUgaHVtYW4gbWluZCwgb2Z0ZW4gZXhwbG9yaW5nIGZlYXJzLCBhbnhpZXRpZXMsIGFuZCB0aGUgdGhpbiBsaW5lIGJldHdlZW4gcmVhbGl0eSBhbmQgaWxsdXNpb24uIEl0IGFpbXMgdG8gY3JlYXRlIGFuIGludGVuc2UgZW1vdGlvbmFsIGV4cGVyaWVuY2UsIHJlbHlpbmcgb24gcHN5Y2hvbG9naWNhbCB0ZW5zaW9uIHJhdGhlciB0aGFuIGdvcmUgb3IganVtcCBzY2FyZXMuIEJsYWNrIFN3YW4gaXMgYSBwc3ljaG9sb2dpY2FsIGhvcnJvciBmaWxtIGRpcmVjdGVkIGJ5IERhcnJlbiBBcm9ub2Zza3kuIFRoZSBtb3ZpZSBmb2xsb3dzIE5pbmEgU2F5ZXJzLCBhIHRhbGVudGVkIGJhbGxldCBkYW5jZXIgd2hvIGxhbmRzIHRoZSBsZWFkIHJvbGUgaW4gU3dhbiBMYWtlLiBBcyBzaGUgcHJlcGFyZXMgZm9yIHRoZSBkZW1hbmRpbmcgZHVhbCByb2xlIG9mIHRoZSBpbm5vY2VudCBXaGl0ZSBTd2FuIGFuZCB0aGUgc2VkdWN0aXZlIEJsYWNrIFN3YW4sIE5pbmEncyBwc3ljaGUgYmVnaW5zIHRvIHVucmF2ZWwuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiQ29zbWljXCIsXHJcbiAgICBpbWFnZVVybDogXCIuL3B1YmxpYy9pbWFnZXMvY29zbWljLWhvcnJvci5wbmdcIixcclxuICAgIGJvZHk6IFwiQ29zbWljIGhvcnJvciBpcyBhIHN1YmdlbnJlIG9mIGhvcnJvciB0aGF0IGRlbHZlcyBpbnRvIHRoZSBmZWFyIG9mIHRoZSB1bmtub3duLCBjb3NtaWMgZW50aXRpZXMsIGFuZCB0aGUgaW5zaWduaWZpY2FuY2Ugb2YgaHVtYW5pdHkgaW4gdGhlIHZhc3RuZXNzIG9mIHRoZSB1bml2ZXJzZS4gSW4gdGhlIGZpbG0gJ1RoZSBMaWdodGhvdXNlLCcgZGlyZWN0ZWQgYnkgUm9iZXJ0IEVnZ2VycywgdGhpcyBnZW5yZSB0YWtlcyBjZW50ZXIgc3RhZ2UsIGltbWVyc2luZyB2aWV3ZXJzIGluIGEgbmlnaHRtYXJpc2ggdGFsZSBvZiBpc29sYXRpb24gYW5kIG1hZG5lc3MuIFNldCBpbiB0aGUgbGF0ZSAxOXRoIGNlbnR1cnksIHRoZSBtb3ZpZSBmb2xsb3dzIHR3byBsaWdodGhvdXNlIGtlZXBlcnMsIHBsYXllZCBicmlsbGlhbnRseSBieSBXaWxsZW0gRGFmb2UgYW5kIFJvYmVydCBQYXR0aW5zb24sIGFzIHRoZXkgZGVzY2VuZCBpbnRvIHBhcmFub2lhIGFuZCBzdXBlcm5hdHVyYWwgZW5jb3VudGVycyBvbiBhIGRlc29sYXRlIGFuZCBlZXJpZSBpc2xhbmQuXCJcclxuICB9LFxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tZW50czogQ29tbWVudFtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgcG9zdElkOiAxLFxyXG4gICAgZW1haWw6IFwiaG9ycm9yZmFuQGdtYWlsLmNvbVwiLFxyXG4gICAgYm9keTogXCJKdXN0IGZpbmlzaGVkIHdhdGNoaW5nICdTY3JlYW0sJyBhbmQgSSBjYW4ndCBnZXQgb3ZlciBob3cgaW50ZW5zZSBhbmQgdGhyaWxsaW5nIGl0IHdhcyEgVGhlIGNsYXNzaWMgc2xhc2hlciBlbGVtZW50cyBjb21iaW5lZCB3aXRoIHRoZSBzZWxmLWF3YXJlbmVzcyBhbmQgY2xldmVyIGh1bW9yIG1hZGUgaXQgYW4gdW5mb3JnZXR0YWJsZSBob3Jyb3IgZXhwZXJpZW5jZS4gVGhlIGljb25pYyBHaG9zdGZhY2Uga2lsbGVyIGtlcHQgbWUgb24gdGhlIGVkZ2Ugb2YgbXkgc2VhdCwgYW5kIHRoZSBzdXNwZW5zZWZ1bCBwbG90IHR3aXN0cyBoYWQgbWUgZ3Vlc3NpbmcgdW50aWwgdGhlIHZlcnkgZW5kLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHBvc3RJZDogMSxcclxuICAgIGVtYWlsOiBcIiBzbGFzaGVyZ3VydUB5YWhvby5jb21cIixcclxuICAgIGJvZHk6IFwiQXMgYSBkaWUtaGFyZCBmYW4gb2Ygc2xhc2hlciBmaWxtcywgJ1NjcmVhbScgZXhjZWVkZWQgYWxsIG15IGV4cGVjdGF0aW9ucyEgSXQgcGF5cyBob21hZ2UgdG8gdGhlIGdlbnJlIHdoaWxlIGJyaWxsaWFudGx5IHN1YnZlcnRpbmcgaXRzIHRyb3Blcy4gVGhlIGNoYXJhY3RlcnMgd2VyZSByZWxhdGFibGUsIGFuZCBOZXZlIENhbXBiZWxsJ3MgcGVyZm9ybWFuY2UgYXMgU2lkbmV5IHdhcyBwaGVub21lbmFsLiBUaGUgYmxlbmQgb2YgaG9ycm9yIGFuZCBodW1vciB3YXMgcGVyZmVjdGx5IGJhbGFuY2VkLCBhbmQgdGhlIGlkZW50aXR5IG9mIHRoZSBHaG9zdGZhY2Uga2lsbGVyIGtlcHQgbWUgZ3Vlc3NpbmcuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgcG9zdElkOiAxLFxyXG4gICAgZW1haWw6IFwiICBzY3JlYW1sb3ZlckBnbWFpbC5jb21cIixcclxuICAgIGJvZHk6IFwiSGF2aW5nIHdhdGNoZWQgbnVtZXJvdXMgc2xhc2hlciBmaWxtcywgJ1NjcmVhbScgc3RhbmRzIG91dCBhcyBvbmUgb2YgdGhlIG1vc3QgaWNvbmljIGFuZCBnYW1lLWNoYW5naW5nIGVudHJpZXMgaW4gdGhlIGdlbnJlLiBUaGUgc2VsZi1yZWZlcmVudGlhbCBhbmQgbWV0YSBhc3BlY3RzIGJyb3VnaHQgYSBmcmVzaCB0d2lzdCwgbWFraW5nIGl0IGJvdGggdGVycmlmeWluZyBhbmQgZW50ZXJ0YWluaW5nLiBUaGUga2lsbHMgd2VyZSBncnVlc29tZSwgYW5kIHRoZSBteXN0ZXJ5IHN1cnJvdW5kaW5nIHRoZSBraWxsZXIncyBpZGVudGl0eSBrZXB0IG1lIGVuZ2FnZWQgdGhyb3VnaG91dC5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBwb3N0SWQ6IDIsXHJcbiAgICBlbWFpbDogXCJic3dhbmZhbkBnbWFpbC5jb21cIixcclxuICAgIGJvZHk6IFwiSnVzdCB3YXRjaGVkICdCbGFjayBTd2FuLCcgYW5kIHdvdywgd2hhdCBhIG1pbmQtYmVuZGluZyBwc3ljaG9sb2dpY2FsIGhvcnJvciEgVGhlIHBvcnRyYXlhbCBvZiBOaW5hJ3MgZGVzY2VudCBpbnRvIG1hZG5lc3Mgd2FzIGNoaWxsaW5nLCBhbmQgSSBjb3VsZG4ndCBoZWxwIGJ1dCBmZWVsIGEgbWl4IG9mIGZhc2NpbmF0aW9uIGFuZCB0ZXJyb3IgdGhyb3VnaG91dCB0aGUgZmlsbS4gRGFycmVuIEFyb25vZnNreSdzIGRpcmVjdGlvbiBpcyBtYXN0ZXJmdWwsIGFuZCBOYXRhbGllIFBvcnRtYW4ncyBwZXJmb3JtYW5jZSB3YXMgaGF1bnRpbmdseSBicmlsbGlhbnQuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgcG9zdElkOiAyLFxyXG4gICAgZW1haWw6IFwiIGhvcnJvcmZhbmF0aWNAZ21haWwuY29tXCIsXHJcbiAgICBib2R5OiBcIkFzIGEgZmFuIG9mIHBzeWNob2xvZ2ljYWwgaG9ycm9yLCAnQmxhY2sgU3dhbicgaGFkIG1lIGhvb2tlZCBmcm9tIHN0YXJ0IHRvIGZpbmlzaCEgVGhlIG1vdmllJ3MgaW50ZW5zZSBhdG1vc3BoZXJlIGFuZCBtaW5kIGdhbWVzIGtlcHQgbWUgb24gdGhlIGVkZ2Ugb2YgbXkgc2VhdC4gTmF0YWxpZSBQb3J0bWFuJ3MgcG9ydHJheWFsIG9mIE5pbmEncyBpbnRlcm5hbCBzdHJ1Z2dsZSB3YXMgYm90aCBjYXB0aXZhdGluZyBhbmQgdW5zZXR0bGluZy4gVGhlIHNlYW1sZXNzIGJsZW5kIG9mIGJhbGxldCBhbmQgaG9ycm9yIGVsZW1lbnRzIG1hZGUgaXQgYSB1bmlxdWUgYW5kIHVuZm9yZ2V0dGFibGUgZXhwZXJpZW5jZS5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBwb3N0SWQ6IDIsXHJcbiAgICBlbWFpbDogXCJzY2FyZWR5Y2F0QGljbG91ZC5jb21cIixcclxuICAgIGJvZHk6IFwiT2theSwgSSBmaW5hbGx5IG11c3RlcmVkIHVwIHRoZSBjb3VyYWdlIHRvIHdhdGNoICdCbGFjayBTd2FuLCcgYW5kIGxldCBtZSB0ZWxsIHlvdSwgaXQgd2FzIG9uZSB3aWxkIHBzeWNob2xvZ2ljYWwgcm9sbGVyY29hc3RlciEgVGhlIHBzeWNob2xvZ2ljYWwgdG9ybWVudCBOaW5hIGdvZXMgdGhyb3VnaCBtYWRlIG1lIHF1ZXN0aW9uIHdoYXQncyByZWFsIGFuZCB3aGF0J3Mgbm90LiBJIHdhcyBzbyBpbW1lcnNlZCBpbiB0aGUgc3RvcnkgdGhhdCBJIGNvdWxkbid0IGxvb2sgYXdheSwgZGVzcGl0ZSBteSBoZWFydCBwb3VuZGluZyB3aXRoIGZlYXIuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgcG9zdElkOiAzLFxyXG4gICAgZW1haWw6IFwiY29zbWljZmVhckBpY2xvdWQuY29tXCIsXHJcbiAgICBib2R5OiBcIkp1c3Qgd2l0bmVzc2VkIHRoZSBjb3NtaWMgaG9ycm9yIG1hc3RlcnBpZWNlLCAnVGhlIExpZ2h0aG91c2UsJyBhbmQgSSdtIHN0aWxsIHRyeWluZyB0byB3cmFwIG15IGhlYWQgYXJvdW5kIGl0ISBUaGUgZWVyaWUgYXRtb3NwaGVyZSBhbmQgTG92ZWNyYWZ0aWFuIGVsZW1lbnRzIGhhZCBtZSBhdCB0aGUgZWRnZSBvZiBteSBzZWF0LiBXaWxsZW0gRGFmb2UgYW5kIFJvYmVydCBQYXR0aW5zb24ncyBwZXJmb3JtYW5jZXMgd2VyZSBwaGVub21lbmFsLCBhZGRpbmcgdG8gdGhlIG92ZXJ3aGVsbWluZyBzZW5zZSBvZiBkcmVhZC4gQSBjaGlsbGluZyBhbmQgdGhvdWdodC1wcm92b2tpbmcgZXhwZXJpZW5jZSFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBwb3N0SWQ6IDMsXHJcbiAgICBlbWFpbDogXCJmZWFydGhldW5rbm93bkBsaXZlLmNvbVwiLFxyXG4gICAgYm9keTogXCJXb3csICdUaGUgTGlnaHRob3VzZScgdHJ1bHkgZW1ib2RpZXMgdGhlIGVzc2VuY2Ugb2YgY29zbWljIGhvcnJvci4gVGhlIGlzb2xhdGVkIHNldHRpbmcsIHRoZSBjcnlwdGljIHN5bWJvbGlzbSwgYW5kIHRoZSByZWxlbnRsZXNzIGRlc2NlbnQgaW50byBtYWRuZXNzIGxlZnQgbWUgaW4gYXdlIGFuZCB0ZXJyb3IuIFdpbGxlbSBEYWZvZSdzIGNoYXJhY3RlciB3YXMgZW5pZ21hdGljIGFuZCBoYXVudGluZywgYW5kIFJvYmVydCBQYXR0aW5zb24ncyBwb3J0cmF5YWwgb2YgYSBtYW4gbG9zaW5nIGhpcyBncmlwIG9uIHJlYWxpdHkgd2FzIHN1cGVyYi5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBwb3N0SWQ6IDMsXHJcbiAgICBlbWFpbDogXCJzY2FyZWR3aXRsZXNzQGV4YW1wbGUuY29tXCIsXHJcbiAgICBib2R5OiBcIkkgbmV2ZXIgdGhvdWdodCBJJ2QgYmUgc28gdGVycmlmaWVkIGJ5IGEgZmlsbSB1bnRpbCBJIHdhdGNoZWQgJ1RoZSBMaWdodGhvdXNlLicgVGhlIGNvc21pYyBob3Jyb3IgZWxlbWVudHMgd2VyZSB1bmxpa2UgYW55dGhpbmcgSSd2ZSBldmVyIHNlZW4sIGFuZCBJIGZvdW5kIG15c2VsZiBvbiB0aGUgZWRnZSBvZiBteSBzZWF0LCBhbnRpY2lwYXRpbmcgd2hhdCBtaW5kLWJlbmRpbmcgaG9ycm9ycyBhd2FpdGVkIHRoZSBjaGFyYWN0ZXJzIG5leHQuIFRoZSBlZXJpZSBibGFjay1hbmQtd2hpdGUgY2luZW1hdG9ncmFwaHkgYWRkZWQgdG8gdGhlIHVuc2V0dGxpbmcgYXRtb3NwaGVyZS5cIlxyXG4gIH0sXHJcbl07XHJcbiIsIi8vIGluZGV4LnRzXHJcblxyXG5pbXBvcnQgeyBwb3N0cywgY29tbWVudHMgfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQb3N0cygpIHtcclxuICBjb25zdCBwb3N0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3RzLWxpc3RcIik7XHJcblxyXG4gIGlmIChwb3N0c0xpc3QpIHtcclxuICAgIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgY29uc3QgcG9zdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwb3N0SXRlbS5jbGFzc05hbWUgPSBcInBvc3QtaXRlbVwiO1xyXG5cclxuICAgICAgY29uc3QgcG9zdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgcG9zdEltYWdlLnNyYyA9IHBvc3QuaW1hZ2VVcmw7XHJcbiAgICAgIHBvc3RJdGVtLmFwcGVuZENoaWxkKHBvc3RJbWFnZSk7XHJcblxyXG4gICAgICBjb25zdCBwb3N0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgIHBvc3RUaXRsZS50ZXh0Q29udGVudCA9IHBvc3QudGl0bGU7XHJcbiAgICAgIHBvc3RJdGVtLmFwcGVuZENoaWxkKHBvc3RUaXRsZSk7XHJcblxyXG4gICAgICBjb25zdCBwb3N0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBwb3N0Qm9keS50ZXh0Q29udGVudCA9IHBvc3QuYm9keTtcclxuICAgICAgcG9zdEl0ZW0uYXBwZW5kQ2hpbGQocG9zdEJvZHkpO1xyXG5cclxuICAgICAgY29uc3QgcG9zdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgcG9zdExpbmsudGV4dENvbnRlbnQgPSBcIkV4cGFuZC4uLlwiO1xyXG4gICAgICBwb3N0TGluay5ocmVmID0gYHBvc3QtZGV0YWlscy5odG1sP2lkPSR7cG9zdC5pZH1gO1xyXG4gICAgICBwb3N0SXRlbS5hcHBlbmRDaGlsZChwb3N0TGluayk7XHJcblxyXG4gICAgICBwb3N0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYHBvc3QtZGV0YWlscy5odG1sP2lkPSR7cG9zdC5pZH1gO1xyXG4gICAgICAgIHNob3dQb3N0RGV0YWlscyhwb3N0LmlkKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwb3N0c0xpc3QuYXBwZW5kQ2hpbGQocG9zdEl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UG9zdERldGFpbHMocG9zdElkOiBudW1iZXIpIHtcclxuICBjb25zdCBwb3N0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1kZXRhaWxzXCIpO1xyXG4gIGNvbnN0IHBvc3QgPSBwb3N0cy5maW5kKChwKSA9PiBwLmlkID09PSBwb3N0SWQpO1xyXG5cclxuICBpZiAocG9zdERldGFpbHMgJiYgcG9zdCkge1xyXG4gICAgcG9zdERldGFpbHMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBwb3N0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBvc3REaXYuY2xhc3NOYW1lID0gXCJwb3N0LWRldGFpbHNcIjtcclxuXHJcbiAgICBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBiYWNrQnV0dG9uLmhyZWYgPSBcIi4vaW5kZXguaHRtbFwiO1xyXG4gICAgYmFja0J1dHRvbi5jbGFzc05hbWUgPSBcImJhY2tCdXR0b25cIjtcclxuXHJcbiAgICBjb25zdCBiYWNrQnV0dG9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGJhY2tCdXR0b25JbWcuc3JjID0gXCIuL3B1YmxpYy9pbWFnZXMvYmFjay1idXR0b24ucG5nXCI7XHJcbiAgICBiYWNrQnV0dG9uLmFwcGVuZENoaWxkKGJhY2tCdXR0b25JbWcpO1xyXG5cclxuICAgIHBvc3REZXRhaWxzLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IHBvc3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBwb3N0SW1hZ2Uuc3JjID0gcG9zdC5pbWFnZVVybDtcclxuICAgIHBvc3REaXYuYXBwZW5kQ2hpbGQocG9zdEltYWdlKTtcclxuXHJcbiAgICBjb25zdCBwb3N0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBwb3N0VGl0bGUudGV4dENvbnRlbnQgPSBwb3N0LnRpdGxlO1xyXG4gICAgcG9zdERpdi5hcHBlbmRDaGlsZChwb3N0VGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHBvc3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwb3N0Qm9keS50ZXh0Q29udGVudCA9IHBvc3QuYm9keTtcclxuICAgIHBvc3REaXYuYXBwZW5kQ2hpbGQocG9zdEJvZHkpO1xyXG5cclxuICAgIHBvc3REZXRhaWxzLmFwcGVuZENoaWxkKHBvc3REaXYpO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbW1lbnRzRGl2LmNsYXNzTmFtZSA9IFwiY29tbWVudHMtZGV0YWlsc1wiO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbW1lbnRzTGlzdC5jbGFzc05hbWUgPSBcImNvbW1lbnRzLWxpc3RcIjtcclxuXHJcbiAgICBjb25zdCBwb3N0Q29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoXHJcbiAgICAgIChjb21tZW50KSA9PiBjb21tZW50LnBvc3RJZCA9PT0gcG9zdElkXHJcbiAgICApO1xyXG4gICAgcG9zdENvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGNvbW1lbnRJdGVtLmNsYXNzTmFtZSA9IFwiY29tbWVudC1pdGVtXCI7XHJcblxyXG4gICAgICBjb25zdCB1c2VybmFtZSA9IGNvbW1lbnQuZW1haWwuc3BsaXQoXCJAXCIpWzBdO1xyXG4gICAgICBjb25zdCB1c2VybmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgdXNlcm5hbWVTcGFuLmNsYXNzTmFtZSA9IFwiY3VzdG9tLWZvbnRcIjtcclxuICAgICAgdXNlcm5hbWVTcGFuLnRleHRDb250ZW50ID0gYCR7dXNlcm5hbWV9OiAke2NvbW1lbnQuZW1haWx9OiBgO1xyXG4gICAgICBjb21tZW50SXRlbS5hcHBlbmRDaGlsZCh1c2VybmFtZVNwYW4pO1xyXG5cclxuICAgICAgY29uc3QgY29tbWVudEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgY29tbWVudEJvZHkuY2xhc3NOYW1lID0gXCJjb21tZW50LWJvZHlcIjtcclxuICAgICAgY29tbWVudEJvZHkudGV4dENvbnRlbnQgPSBjb21tZW50LmJvZHk7XHJcbiAgICAgIGNvbW1lbnRCb2R5LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjIwMFwiO1xyXG4gICAgICBjb21tZW50SXRlbS5hcHBlbmRDaGlsZChjb21tZW50Qm9keSk7XHJcblxyXG4gICAgICBjb21tZW50c0xpc3QuYXBwZW5kQ2hpbGQoY29tbWVudEl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29tbWVudHNEaXYuYXBwZW5kQ2hpbGQoY29tbWVudHNMaXN0KTtcclxuXHJcbiAgICBwb3N0RGV0YWlscy5hcHBlbmRDaGlsZChjb21tZW50c0Rpdik7XHJcbiAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBjb25zdCBwb3N0SWQgPSB1cmxQYXJhbXMuZ2V0KFwiaWRcIik7XHJcblxyXG4gIGlmIChwb3N0SWQpIHtcclxuICAgIHNob3dQb3N0RGV0YWlscyhwYXJzZUludChwb3N0SWQsIDEwKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlbmRlclBvc3RzKCk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImEiLCJpIiwic2VsZiIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInBvc3RzIiwiaWQiLCJ0aXRsZSIsImltYWdlVXJsIiwiYm9keSIsImNvbW1lbnRzIiwicG9zdElkIiwiZW1haWwiLCJzaG93UG9zdERldGFpbHMiLCJwb3N0RGV0YWlscyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwb3N0IiwiZmluZCIsInAiLCJpbm5lckhUTUwiLCJwb3N0RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJhY2tCdXR0b24iLCJocmVmIiwiYmFja0J1dHRvbkltZyIsInNyYyIsImFwcGVuZENoaWxkIiwicG9zdEltYWdlIiwicG9zdFRpdGxlIiwidGV4dENvbnRlbnQiLCJwb3N0Qm9keSIsImNvbW1lbnRzRGl2IiwiY29tbWVudHNMaXN0IiwiZmlsdGVyIiwiY29tbWVudCIsImZvckVhY2giLCJjb21tZW50SXRlbSIsInVzZXJuYW1lIiwic3BsaXQiLCJ1c2VybmFtZVNwYW4iLCJjb21tZW50Qm9keSIsInN0eWxlIiwiZm9udFdlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInBhcnNlSW50IiwicG9zdHNMaXN0IiwicG9zdEl0ZW0iLCJwb3N0TGluayIsInJlbmRlclBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==