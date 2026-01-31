const board = document.getElementById("board");

const SFR = {
 P0:0x00,
 P1:0x00,
 P2:0x00,
 P3:0x00
};

function updateSFR(){
 const box=document.getElementById("sfrBox");
 box.innerHTML="";
 for(const k in SFR){
  box.innerHTML+=`${k}: ${SFR[k].toString(2).padStart(8,"0")}<br>`;
 }
}

updateSFR();
