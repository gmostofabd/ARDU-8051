/* =========================================================
   ARDU-8051 Virtual Lab - MAIN.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ----------------- CPU PORTS & SFR -----------------
  window.cpu = {
    ports: [0x00, 0x00, 0x00, 0x00],  // P0, P1, P2, P3
    ACC: 0x00,
    B: 0x00,
    PSW: 0x00,
    SP: 0x07,
    DPTR: 0x0000,
    flags: { CY:0, AC:0, OV:0, F0:0 }
  };

  function updateSFRPanel() {
    document.getElementById('ACC').innerText = cpu.ACC.toString(16).padStart(2,'0').toUpperCase();
    document.getElementById('B').innerText = cpu.B.toString(16).padStart(2,'0').toUpperCase();
    document.getElementById('PSW').innerText = cpu.PSW.toString(16).padStart(2,'0').toUpperCase();
    document.getElementById('SP').innerText = cpu.SP.toString(16).padStart(2,'0').toUpperCase();
    document.getElementById('DPTR').innerText = cpu.DPTR.toString(16).padStart(4,'0').toUpperCase();

    document.getElementById('CY').innerText = cpu.flags.CY;
    document.getElementById('ACflag').innerText = cpu.flags.AC;
    document.getElementById('OV').innerText = cpu.flags.OV;
    document.getElementById('F0').innerText = cpu.flags.F0;
  }

  // ----------------- INITIALIZE BOARD -----------------
  if(window.board) board.init();
  board.update();
  updateSFRPanel();

  // ----------------- COMPONENT INTERACTIONS -----------------
  window.toggleLED = function(pin) {
    cpu.ports[0] ^= (1 << pin); // toggle bit in P0
    board.update();
    updateSFRPanel();
  };

  window.pressButton = function(pin) {
    cpu.ports[1] |= (1 << pin); // press P1 bit
    board.update();
    updateSFRPanel();
    setTimeout(()=>{ cpu.ports[1] &= ~(1 << pin); board.update(); updateSFRPanel(); }, 200);
  };

  window.runMotor = function() {
    cpu.B = (cpu.B + 1) & 0xFF;
    cpu.flags.OV = cpu.B > 0xFF ? 1 : 0;
    board.update();
    updateSFRPanel();
  };

  // ----------------- PROGRAM UPLOAD -----------------
  const asmInput = document.getElementById("asmFile");
  const hexInput = document.getElementById("hexFile");
  const codeWindow = document.getElementById("code-window");

  asmInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { 
      codeWindow.innerText = ev.target.result; 
      currentLine = 0; // reset stepping
    };
    reader.readAsText(file);
  });

  hexInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { 
      codeWindow.innerText = ev.target.result; 
      currentLine = 0; // reset stepping
    };
    reader.readAsText(file);
  });

  // ----------------- SIMULATION CONTROLS -----------------
  let currentLine = 0;

  document.getElementById("runBtn")?.addEventListener("click", () => {
    if (!codeWindow.innerText) return;
    console.log("Simulation started");
    const lines = codeWindow.innerText.split('\n');
    lines.forEach(line => executeInstruction(line.trim()));
  });

  document.getElementById("stepBtn")?.addEventListener("click", () => {
    const lines = codeWindow.innerText.split('\n');
    if(currentLine >= lines.length) return;
    const instr = lines[currentLine].trim();
    executeInstruction(instr);
    currentLine++;
  });

  document.getElementById("stopBtn")?.addEventListener("click", () => {
    console.log("Simulation stopped");
  });

  document.getElementById("resetBtn")?.addEventListener("click", () => {
    cpu.ports = [0,0,0,0];
    cpu.ACC = cpu.B = cpu.PSW = 0;
    cpu.SP = 0x07;
    cpu.DPTR = 0x0000;
    cpu.flags = {CY:0,AC:0,OV:0,F0:0};
    currentLine = 0;
    board.update();
    updateSFRPanel();
    console.log("CPU Reset");
  });

  // ----------------- AUTO TEST LED -----------------
  setInterval(() => {
    cpu.ports[0] ^= 0x01; // toggle LED0 every 1 sec
    board.update();
    updateSFRPanel();
  }, 1000);

});
