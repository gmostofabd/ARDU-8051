window.DotMatrix = class {
  constructor(parent, cfg) {
    this.port = cfg.port;
    this.el = document.createElement("div");
    this.el.className = "dotmatrix";
    this.el.style.left = cfg.x + "px";
    this.el.style.top = cfg.y + "px";
    this.el.style.position = "absolute";
    this.el.style.width = "100px";
    this.el.style.height = "50px";
    this.el.style.background = "#000";
    this.el.style.display = "grid";
    this.el.style.gridTemplateColumns = "repeat(10, 1fr)";
    this.el.style.gridTemplateRows = "repeat(5, 1fr)";
    this.dots = [];
    for(let i=0;i<50;i++){
      const d = document.createElement("div");
      d.style.width="100%";
      d.style.height="100%";
      d.style.margin="1px";
      d.style.background="#111";
      this.el.appendChild(d);
      this.dots.push(d);
    }
    parent.appendChild(this.el);
  }

  update() {
    const val = window.cpu?.ports[this.port] || 0;
    this.dots.forEach((d,i)=>{
      d.style.background = (val & (1 << (i%8))) ? "#0f0" : "#111";
    });
  }
};
