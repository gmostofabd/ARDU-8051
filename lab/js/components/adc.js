window.ADC = class {
  constructor(parent, cfg) {
    this.port = cfg.port;
    this.el = document.createElement("div");
    this.el.className = "adc";
    this.el.style.left = cfg.x + "px";
    this.el.style.top = cfg.y + "px";
    this.el.style.position = "absolute";
    this.el.style.width = "60px";
    this.el.style.height = "30px";
    this.el.style.background = "#222";
    this.el.style.color = "#0f0";
    this.el.style.fontFamily = "monospace";
    this.el.style.fontSize = "14px";
    this.el.style.display = "flex";
    this.el.style.alignItems = "center";
    this.el.style.justifyContent = "center";
    this.el.textContent = "ADC";
    parent.appendChild(this.el);
  }

  update() {
    const val = window.cpu?.ports[this.port] || 0;
    this.el.textContent = "ADC:" + val;
  }
};
