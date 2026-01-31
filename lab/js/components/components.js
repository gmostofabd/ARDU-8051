// ---------------- LED ----------------
class LED {
  constructor(container, {x,y,port,pin}) {
    this.container = container;
    this.x = x; this.y = y;
    this.port = port; this.pin = pin;
    this.el = document.createElement("div");
    this.el.className = "led";
    this.el.style.position="absolute";
    this.el.style.left=x+"px";
    this.el.style.top=y+"px";
    this.el.style.width="20px";
    this.el.style.height="20px";
    this.el.style.borderRadius="50%";
    this.el.style.border="1px solid #333";
    this.el.style.background="#444";
    container.appendChild(this.el);
  }
  update() {
    const val = (cpu.ports[this.port] & (1<<this.pin))!==0;
    this.el.style.background = val?"#f00":"#444";
  }
}

// ---------------- 7-Segment ----------------
class Seg7 {
  constructor(container,{x,y,port}) {
    this.container=container; this.x=x; this.y=y; this.port=port;
    this.el=document.createElement("div");
    this.el.className="seg7";
    this.el.style.position="absolute";
    this.el.style.left=x+"px";
    this.el.style.top=y+"px";
    this.el.style.width="40px";
    this.el.style.height="60px";
    this.el.style.background="#222";
    this.el.style.color="#0f0";
    this.el.style.fontFamily="monospace";
    this.el.style.fontSize="40px";
    this.el.style.textAlign="center";
    this.el.style.lineHeight="60px";
    this.el.innerText="0";
    container.appendChild(this.el);
  }
  update() {
    const val = cpu.ports[this.port] & 0x0F;
    this.el.innerText = val.toString(16).toUpperCase();
  }
}

// ---------------- LCD ----------------
class LCD {
  constructor(container,{x,y,port}) {
    this.container=container; this.x=x; this.y=y; this.port=port;
    this.el=document.createElement("div");
    this.el.style.position="absolute";
    this.el.style.left=x+"px";
    this.el.style.top=y+"px";
    this.el.style.width="100px";
    this.el.style.height="40px";
    this.el.style.background="#333";
    this.el.style.color="#0f0";
    this.el.style.fontFamily="monospace";
    this.el.style.fontSize="14px";
    this.el.style.padding="2px";
    this.el.innerText="";
    container.appendChild(this.el);
  }
  update() {
    this.el.innerText = cpu.ports[this.port].toString(16).padStart(2,'0').toUpperCase();
  }
}

// ---------------- Motor ----------------
class Motor {
  constructor(container,{x,y}) {
    this.container=container; this.x=x; this.y=y;
    this.el=document.createElement("div");
    this.el.style.position="absolute";
    this.el.style.left=x+"px";
    this.el.style.top=y+"px";
    this.el.style.width="50px";
    this.el.style.height="20px";
    this.el.style.background="#666";
    container.appendChild(this.el);
  }
  update() {
    this.el.style.background = (cpu.B>0)?"#0a0":"#666";
  }
}

// ---------------- Other components ----------------
class Stepper { constructor(c,p){ this.container=c; this.el=document.createElement("div"); this.el.innerText="Stepper"; this.el.style.position="absolute"; this.el.style.left=p.x+"px"; this.el.style.top=p.y+"px"; this.el.style.background="#888"; c.appendChild(this.el);} update(){} }
class Servo { constructor(c,p){ this.container=c; this.el=document.createElement("div"); this.el.innerText="Servo"; this.el.style.position="absolute"; this.el.style.left=p.x+"px"; this.el.style.top=p.y+"px"; this.el.style.background="#888"; c.appendChild(this.el);} update(){} }
class ADC { constructor(c,p){ this.container=c; this.el=document.createElement("div"); this.el.innerText="ADC"; this.el.style.position="absolute"; this.el.style.left=p.x+"px"; this.el.style.top=p.y+"px"; this.el.style.background="#888"; c.appendChild(this.el);} update(){} }
class DotMatrix { constructor(c,p){ this.container=c; this.el=document.createElement("div"); this.el.innerText="DotMatrix"; this.el.style.position="absolute"; this.el.style.left=p.x+"px"; this.el.style.top=p.y+"px"; this.el.style.background="#888"; c.appendChild(this.el);} update(){} }

// ---------------- Component Factory ----------------
window.LED=LED;
window.Seg7=Seg7;
window.LCD=LCD;
window.Motor=Motor;
window.Stepper=Stepper;
window.Servo=Servo;
window.ADC=ADC;
window.DotMatrix=DotMatrix;

// ---------------- Component Tabs ----------------
window.showComponent = function(name,event){
    const buttons=document.querySelectorAll(".component-tabs button");
    buttons.forEach(btn=>btn.classList.remove("active"));
    event.target.classList.add("active");
    const display = document.getElementById("component-display");
    display.innerHTML = `<p>Component <strong>${name}</strong> active.</p>`;
    
    switch(name){
        case "led":
            for(let i=0;i<2;i++){
                const btn=document.createElement("button");
                btn.className="sim-btn"; btn.innerText=`Toggle LED ${i}`;
                btn.onclick=()=>window.toggleLED(i);
                display.appendChild(btn);
            } break;
        case "button":
            for(let i=0;i<2;i++){
                const btn=document.createElement("button");
                btn.className="sim-btn"; btn.innerText=`Press Button ${i}`;
                btn.onclick=()=>window.pressButton(i);
                display.appendChild(btn);
            } break;
        case "motor":
            const btn=document.createElement("button");
            btn.className="sim-btn"; btn.innerText="Run Motor";
            btn.onclick=()=>window.runMotor();
            display.appendChild(btn);
            break;
    }
}
