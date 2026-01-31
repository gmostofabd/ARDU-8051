window.Motor = class {
  constructor(parent, cfg) {
    this.port = cfg.port;
    this.el = document.createElement("div");
    this.el.className = "motor";
    this.el.style.left = cfg.x + "px";
    this.el.style.top = cfg.y + "px";
    this.el.style.position = "absolute";
    this.el.style.width = "50px";
    this.el.style.height = "50px";
    this.el.style.borderRadius = "50%";
    this.el.style.background = "#666";
    this.el.style.display = "flex";
    this.el.style.alignItems = "center";
    this.el.style.justifyContent = "center";
    this.el.textContent = "Motor";
    parent.appendChild(this.el);
  }

  update() {
    const val = window.cpu?.ports[this.port] || 0;
    this.el.style.transform = `rotate(${val*15}deg)`;
  }
};
