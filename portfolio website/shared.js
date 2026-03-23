const cursor=document.getElementById("cursor"),ring=document.getElementById("cursorRing");
let mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;cursor.style.transform=`translate(${mx-4}px,${my-4}px)`});
function animateRing(){rx+=(mx-rx-15)*.12;ry+=(my-ry-15)*.12;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(animateRing)}
animateRing();
document.querySelectorAll("a,button").forEach(el=>{
  el.addEventListener("mouseenter",()=>{ring.style.width="46px";ring.style.height="46px";ring.style.opacity=".22"});
  el.addEventListener("mouseleave",()=>{ring.style.width="30px";ring.style.height="30px";ring.style.opacity=".4"});
});
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}})},{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
