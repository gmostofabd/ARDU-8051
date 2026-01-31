window.LCD = class {
  constructor(parent, cfg) {
    this.port = cfg.port;
    this.el = document.createElement("div");
    this.el.className = "lcd";
    this.el.style.left = cfg.x + "px";
    this.el.style.top = cfg.y + "px";
    this.el.style.position = "absolute";
    this.el.style.width = "120px";
    this.el.style.height = "40px";
    this.el.style.background = "#0a0";
    this.el.style.color = "#0f0";
    this.el.style.fontFamily = "monospace";
    this.el.style.fontSize = "16px";
    this.el.style.display = "flex";
    this.el.style.alignItems = "center";
    this.el.style.justifyContent = "center";
    this.el.textContent = "LCD";
    parent.appendChild(this.el);
  }

  update() {
    const val = window.cpu?.ports[this.port] || 0;
    this.el.textContent = "VAL: " + val.toString(16).padStart(2,'0').toUpperCase();
  }
};
