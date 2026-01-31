window.LED = class {
  constructor(parent, cfg) {
    this.port = cfg.port;
    this.bit = cfg.bit;

    this.el = document.createElement("div");
    this.el.className = "led";
    this.el.style.left = cfg.x + "px";
    this.el.style.top = cfg.y + "px";
    this.el.style.position = "absolute";

    parent.appendChild(this.el);
  }

  update() {
    const value = (window.cpu?.ports?.[this.port] || 0) & (1 << this.bit);
    this.el.classList.toggle("on", value !== 0);
  }
};
