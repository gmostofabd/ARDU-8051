window.Button = class {
  constructor(parent, cfg) {
    this.port = cfg.port;
    this.bit = cfg.bit;

    this.el = document.createElement("button");
    this.el.className = "hw-button";
    this.el.textContent = "BTN";
    this.el.style.left = cfg.x + "px";
    this.el.style.top = cfg.y + "px";
    this.el.style.position = "absolute";

    this.el.onmousedown = () => {
      if (!window.cpu) window.cpu = { ports: [0, 0, 0, 0] };
      window.cpu.ports[this.port] |= (1 << this.bit);
      board.update();
    };

    this.el.onmouseup = () => {
      if (!window.cpu) window.cpu = { ports: [0, 0, 0, 0] };
      window.cpu.ports[this.port] &= ~(1 << this.bit);
      board.update();
    };

    parent.appendChild(this.el);
  }

  update() {}
};
