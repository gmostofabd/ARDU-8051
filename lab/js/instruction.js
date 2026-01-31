window.executeInstruction = function(instr) {
    instr = instr.trim().toUpperCase();
    if(!instr) return;

    // SETB Pn.m
    if(instr.startsWith("SETB")) {
        const parts = instr.split(" ");
        const target = parts[1];
        if(target.startsWith("P0.")) cpu.ports[0] |= (1<<parseInt(target[3]));
        if(target.startsWith("P1.")) cpu.ports[1] |= (1<<parseInt(target[3]));
        if(target.startsWith("P2.")) cpu.ports[2] |= (1<<parseInt(target[3]));
        if(target.startsWith("P3.")) cpu.ports[3] |= (1<<parseInt(target[3]));
    }

    // CLR Pn.m
    else if(instr.startsWith("CLR")) {
        const parts = instr.split(" ");
        const target = parts[1];
        if(target.startsWith("P0.")) cpu.ports[0] &= ~(1<<parseInt(target[3]));
        if(target.startsWith("P1.")) cpu.ports[1] &= ~(1<<parseInt(target[3]));
        if(target.startsWith("P2.")) cpu.ports[2] &= ~(1<<parseInt(target[3]));
        if(target.startsWith("P3.")) cpu.ports[3] &= ~(1<<parseInt(target[3]));
    }

    // MOV A,#data
    else if(instr.startsWith("MOV A,#")) {
        const val = parseInt(instr.split("#")[1].replace("H",""),16);
        cpu.ACC = val & 0xFF;
    }

    // MOV Pn,A
    else if(instr.startsWith("MOV P0,A")) cpu.ports[0]=cpu.ACC;
    else if(instr.startsWith("MOV P1,A")) cpu.ports[1]=cpu.ACC;
    else if(instr.startsWith("MOV P2,A")) cpu.ports[2]=cpu.ACC;
    else if(instr.startsWith("MOV P3,A")) cpu.ports[3]=cpu.ACC;

    // INC A
    else if(instr==="INC A") cpu.ACC = (cpu.ACC+1)&0xFF;

    // ADD A,#data
    else if(instr.startsWith("ADD A,#")) {
        const val = parseInt(instr.split("#")[1].replace("H",""),16);
        const res = cpu.ACC + val;
        cpu.flags.CY = res>0xFF?1:0;
        cpu.ACC = res & 0xFF;
    }

    // Update visual and SFR
    board.update();
    if(window.updateSFRPanel) updateSFRPanel();
};
