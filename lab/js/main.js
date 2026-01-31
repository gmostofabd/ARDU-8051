let executionMode="asm";

// FILE UPLOAD
document.getElementById("fileInput").addEventListener("change",e=>{
 const file=e.target.files[0];
 if(!file) return;

 const reader=new FileReader();
 reader.onload=()=>{
  if(file.name.endsWith(".asm")){
   executionMode="asm";
   loadASM(reader.result);
   alert("ASM program loaded");
  }
  else if(file.name.endsWith(".hex")){
   executionMode="hex";
   loadHEX(reader.result);
   alert("HEX program loaded");
  }
 };
 reader.readAsText(file);
});

// RUN BUTTON
document.getElementById("runBtn").onclick=runProgram;

function runProgram(){
 if(executionMode==="asm") executeASM();
 else executeHEX();
}

// ASM EXECUTION
function executeASM(){
 const instr=stepASM();
 if(!instr) return;

 if(instr.startsWith("SETB P1.")){
  const b=parseInt(instr.split(".")[1]);
  SFR.P1|=(1<<b);
 }

 if(instr.startsWith("CLR P1.")){
  const b=parseInt(instr.split(".")[1]);
  SFR.P1&=~(1<<b);
 }

 if(instr.startsWith("MOV P1,#")){
  const v=parseInt(instr.split("#")[1],16);
  SFR.P1=v;
 }

 updateUI();
}

// HEX EXECUTION (BASIC, EXTENDABLE)
function executeHEX(){
 if(!hexMemory) return;

 Object.keys(hexMemory).forEach(a=>{
  const op=hexMemory[a];

  // example: MOV P1,#data
  if(op===0x75){
   const data=hexMemory[parseInt(a)+2];
   SFR.P1=data;
  }
 });

 updateUI();
}

// HARDWARE UPDATE
function updateUI(){
 updateSFR();

 wires.forEach(w=>{
  if(w.from.port==="P1"){
   const bit=(SFR.P1>>w.from.bit)&1;
   if(w.to.type==="led"){
    w.to.el.classList.toggle("on",bit);
   }
  }
 });
}
