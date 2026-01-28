# 🚀 ARDU-8051  
### Open-Source Arduino-Compatible 8051 Hardware & Virtual Lab Platform

> **Learn 8051 microcontroller architecture, assembly language, and interfacing — with real hardware parity and an online virtual lab.**

---

## 🏷️ Project Badges

<p align="center">

<a href="https://opensource.org/osd">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-success?style=for-the-badge">
</a>

<a href="https://en.wikipedia.org/wiki/Embedded_system">
  <img src="https://img.shields.io/badge/Domain-Embedded%20Systems-blue?style=for-the-badge">
</a>

<a href="https://en.wikipedia.org/wiki/Intel_MCS-51">
  <img src="https://img.shields.io/badge/MCU-8051-orange?style=for-the-badge">
</a>

<a href="https://gmostofabd.github.io/ARDU-8051/">
  <img src="https://img.shields.io/badge/Virtual%20Lab-Online-purple?style=for-the-badge">
</a>

<a href="./LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-darkgreen?style=for-the-badge">
</a>

</p>

---

## 🌐 Live Links

- 🔬 **Virtual Lab (Online):**  
  https://gmostofabd.github.io/ARDU-8051/lab/

- 📘 **Documentation:**  
  https://github.com/gmostofabd/ARDU-8051/tree/main/docs

- 🧪 **Experiments:**  
  https://gmostofabd.github.io/ARDU-8051/experiments/

---

## 🧠 What is ARDU-8051?

**ARDU-8051** is a **complete open-source learning platform** designed to teach the **8051 microcontroller** in a modern, practical, and globally accessible way.

It combines:

- ✔ Open-source **hardware**
- ✔ **Assembly-level programming**
- ✔ **Browser-based virtual lab**
- ✔ **Real hardware ↔ simulator parity**
- ✔ **Arduino-compatible form factor**

Suitable for:
- Engineering universities & colleges  
- Remote and blended learning  
- Self-learners and hobbyists  
- Teachers and lab instructors  

---

## 🎯 Educational Motivation

> **The 8051 microcontroller is still widely taught, but teaching tools are outdated.**

Common problems:
- Obsolete trainer boards  
- No reliable simulators  
- Proprietary programmers  
- Weak connection between theory and practice  

**ARDU-8051 solves this by:**
- Integrating hardware and simulation
- Using industry-style workflows
- Remaining fully open-source
- Supporting learning anywhere, anytime

---

## 🖼️ Hardware Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/gmostofabd/ARDU-8051/main/docs/images/Ardu-51_Front_Angle_1.png" width="55%" alt="ARDU-8051 Hardware Board">
</p>

---

## 🧩 Hardware Platform Highlights

- **AT89S52 (8051 core)** @ 11.0592 MHz  
- **On-board USBasp programmer**  
- **No external programmer required**  
- **ADC0804** for analog experiments  
- **Arduino UNO–compatible headers**  
- **Buffered Port-0 (74HC245)**  
- **UART & I²C headers**  
- **External ISP header**  
- **+5V / +3.3V regulated rails**  
- **DIP & SMD MCU support**

---

## 🧪 Virtual Lab Features

- Runs fully in the **web browser**
- Hosted on **GitHub Pages**
- Step-by-step guided experiments
- Circuit + assembly code + output together
- Matches real hardware behavior
- Ideal for flipped classrooms & remote labs

---

## 🧪 Experiment Index

| No | Experiment | Core Concept |
|----|-----------|-------------|
| 01 | LED Blinking using Timer | Timers |
| 02 | 7-Segment Display Interface | Digital I/O |
| 03 | Multiplexed 4-Digit Display | Multiplexing |
| 04 | 4×4 Keypad with LCD | Interfacing |
| 05 | DC Motor Control | Control Systems |
| 06 | Stepper Motor Control | Sequencing |
| 07 | Servo Motor Control | PWM |
| 08 | 8×8 LED Matrix | Scanning |

👉 **Run Experiments Online:**  
https://gmostofabd.github.io/ARDU-8051/experiments/

---

## 📂 Repository Structure

```text
ARDU-8051/
│
├── docs/                 # Theory & documentation
│   └── images/
│
├── experiments/          # Virtual lab (HTML-based)
│   ├── index.html
│   ├── 01-led-blink.html
│   └── ...
│
├── firmware/             # 8051 assembly source codes
│
├── hardware/             # Schematics & PCB files
│
├── assets/               # Images & media
│
├── LICENSE               # MIT License
└── README.md
