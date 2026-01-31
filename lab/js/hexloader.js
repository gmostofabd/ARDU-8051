let hexMemory=null;

function loadHEX(text){
 hexMemory={};

 const lines=text.trim().split(/\r?\n/);

 lines.forEach(line=>{
  if(line[0]!==":") return;

  const len=parseInt(line.substr(1,2),16);
  const addr=parseInt(line.substr(3,4),16);
  const type=parseInt(line.substr(7,2),16);

  if(type!==0) return;

  for(let i=0;i<len;i++){
   hexMemory[addr+i]=parseInt(line.substr(9+i*2,2),16);
  }
 });

 console.log("HEX loaded:",hexMemory);
}

function stepHEX(){
 return hexMemory;
}
