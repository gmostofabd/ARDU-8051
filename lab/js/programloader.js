let asmProgram=[];
let asmPC=0;

function loadASM(text){
 asmProgram=[];
 asmPC=0;

 const lines=text.split(/\r?\n/);
 lines.forEach(line=>{
  line=line.replace(/;.*/,"").trim();
  if(line) asmProgram.push(line.toUpperCase());
 });

 console.log("ASM loaded:",asmProgram);
}

function stepASM(){
 if(asmPC>=asmProgram.length) asmPC=0;
 return asmProgram[asmPC++];
}
