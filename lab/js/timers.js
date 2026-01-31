function updateTimers() {
    if(SFR.TR0) { SFR.TL0++; if(SFR.TL0>255){ SFR.TL0=0; SFR.TF0=1; } }
    if(SFR.TR1) { SFR.TL1++; if(SFR.TL1>255){ SFR.TL1=0; SFR.TF1=1; } }
}

setInterval(updateTimers, 100); // live counting
