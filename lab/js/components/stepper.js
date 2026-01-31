window.Stepper = class {
  constructor(parent, cfg) {
    this.port = cfg.port;
    this.el = document.createElement("div");
    this.el.className = "stepper";
    this.el.style.left = cfg.x + "px";
    this.el.style.top = cfg.y + "px";
    this.el.style.position = "absolute";
    this.el.style.width = "50px";
    this.el.style.height = "50px";
    this.el.style.border = "2px solid #000";
    this.el.style.background = "#ccc";
    this.el.style.display = "flex";
    this.el.style.alignItems = "center";
    this.el.style.justifyContent = "center";
    this.el.textContent = "Stepper";
    parent.appendChild(this.el);
  }

  update() {
    const val = window.cpu?.ports[this.port] || 0;
    this.el.style.transform = `rotate(${val*45}deg)`;
  }
};
