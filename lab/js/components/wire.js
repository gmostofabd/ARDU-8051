const wires=[];
let wireStart=null;

function makeDraggable(el){
 let dx,dy;
 el.onmousedown=e=>{
  dx=e.offsetX;
  dy=e.offsetY;
  document.onmousemove=m=>{
   el.style.left=(m.pageX-board.offsetLeft-dx)+"px";
   el.style.top=(m.pageY-board.offsetTop-dy)+"px";
  };
  document.onmouseup=()=>document.onmousemove=null;
 };
}

function makeWireable(el,type){
 el.onclick=e=>{
  e.stopPropagation();
  if(!wireStart) return;

  wires.push({from:{...wireStart},to:{el,type}});
  drawWire(wireStart,el);
  wireStart=null;
 };
}

function drawWire(from,el){
 const w=document.createElement("div");
 w.className="wire";

 const p=[...document.querySelectorAll(".port")]
   .find(x=>x.textContent===from.port);

 const pr=p.getBoundingClientRect();
 const er=el.getBoundingClientRect();
 const br=board.getBoundingClientRect();

 const x1=pr.left+20-br.left;
 const y1=pr.top+10-br.top;
 const x2=er.left+el.offsetWidth/2-br.left;
 const y2=er.top+el.offsetHeight/2-br.top;

 const len=Math.hypot(x2-x1,y2-y1);
 const ang=Math.atan2(y2-y1,x2-x1)*180/Math.PI;

 w.style.left=x1+"px";
 w.style.top=y1+"px";
 w.style.width=len+"px";
 w.style.transform=`rotate(${ang}deg)`;

 board.appendChild(w);
}

document.querySelectorAll(".port").forEach(p=>{
 p.onclick=()=>{
  const bit=prompt(`Connect ${p.textContent}.bit (0-7)?`);
  if(bit===null) return;
  wireStart={port:p.textContent,bit:parseInt(bit)};
 };
});
