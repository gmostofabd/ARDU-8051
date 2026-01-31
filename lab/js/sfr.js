// SFR helper functions
// Allows reading/writing registers with simple functions

window.SFR = {
    read: function(reg) {
        reg = reg.toUpperCase();
        if(reg==="ACC") return cpu.ACC;
        if(reg==="B") return cpu.B;
        if(reg==="PSW") return cpu.PSW;
        if(reg==="SP") return cpu.SP;
        if(reg==="DPTR") return cpu.DPTR;
        return 0;
    },
    write: function(reg,val) {
        reg = reg.toUpperCase();
        val = val & 0xFF;
        if(reg==="ACC") cpu.ACC=val;
        if(reg==="B") cpu.B=val;
        if(reg==="PSW") cpu.PSW=val;
        if(reg==="SP") cpu.SP=val;
        if(reg==="DPTR") cpu.DPTR=val;
    },
    setFlag: function(flag,val) {
        flag = flag.toUpperCase();
        val = val?1:0;
        if(flag==="CY") cpu.flags.CY=val;
        if(flag==="AC") cpu.flags.AC=val;
        if(flag==="OV") cpu.flags.OV=val;
        if(flag==="F0") cpu.flags.F0=val;
    },
    getFlag: function(flag) {
        flag = flag.toUpperCase();
        return cpu.flags[flag] || 0;
    }
};
