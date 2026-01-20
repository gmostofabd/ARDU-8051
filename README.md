<p align="justify">
  <h1>ARDU-8051: An Arduino-Compatible Open-Source ATmel 8051 Hardware Shield</h1>
</p>

<div align="center" style="border: 2px solid #ddd; padding: 10px; border-radius: 10px; background-color: #f9f9f9; width: 80%; margin: auto;">
<img src="https://github.com/gmostofabd/ARDU-8051/blob/abfb65496c42ffb5566fd5242e189f0a0ee783f1/3d/Ardu-51_Front_Angle_1.png" alt="ARDU-8051 Learning Platform" width="50%" style="border-radius: 8px;">
</div>


---

## 📌 Overview
<p align="justify">
ARDU-8051 is a low-cost, open-source, Arduino-compatible development board based on the ATmel 8051 microcontroller, featuring an integrated USBasp programmer. The platform is designed primarily for embedded systems education, enabling students and educators to explore classical 8051 architecture using a modern, simulation-first workflow, accessible hardware ecosystem.
  
This repository hosts all hardware designs, schematics, documentation, and lab materials required for academic and self-learning use.
</p>

---

## 🌟 Motivation
<p align="justify">
The **ARDU-8051** project was motivated by a simple but persistent reality in engineering education:

> **The 8051 microcontroller is still widely taught, but the tools and hardware used to teach it have not evolved accordingly.**

Across many universities, students continue to learn **8051 architecture, assembly language, timers, interrupts, and parallel I/O** using:
- Obsolete trainer boards  
- Proprietary or unavailable programmers  
- Fragmented workflows disconnected from simulation  
- Hardware that discourages experimentation  

At the same time, many modern development platforms **hide low-level details**, making them unsuitable for foundational learning.
**ARDU-8051 EDU-PRO was created to bridge this gap by:** 

- Reducing hardware and setup complexity  
- Integrating programming capability directly on the board  
- Adopting an Arduino-compatible form factor  
- Embracing open-source hardware principles  
</p>

<p align="center">
  <img src="docs/images/block-diagram.png" alt="ARDU-8051 Motivation Diagram" width="80%">
</p>
<div align="center" style="border: 2px solid #ddd; padding: 10px; border-radius: 10px; background-color: #f999f9; width: 80%; margin: auto;">
<img src="docs/images/block-diagram.png" alt="ARDU-8051 Motivation Diagram" width="90%" style="border-radius: 8px;">
</div>
---

## 🎯 Design Goals

- Preserve traditional 8051 pedagogy used in universities
- Provide simulation-to-hardware continuity
- Eliminate dependency on proprietary programmers
- Enable low-cost, reproducible laboratory setups
- Support both assembly-level learning and real hardware experimentation

> The platform focuses on **conceptual clarity and hands-on learning**, rather than high-performance or industrial applications.

---

## 🧩 Platform Highlights

<p align="center">
  <img src="docs/images/ardu-8051-board.png" alt="ARDU-8051 Board Highlights" width="600">
</p>

- **AT89S52 (8051 core)** with 11.0592 MHz crystal  — widely used in academia
- **On-board USBasp programmer** (ATmega8A, DIP)  — no external programmer required
- **AVRDUDE support** — industry-style workflow
- **ADC0804 integration** — hands-on analog learning
- **Arduino UNO–compatible headers** — easy expansion  
- **Proteus + hardware parity** — predictable results
- **USB Type-B / Type-C option** — long-term usability   
- **Buffered Port-0 bus** using 74HC245
- **External 6-pin ISP header**
- **Onboard Power Rails for +5V, +3.3V and Ground**
- **UART and I2C Ports** - can be wired with sensors or devices
- **Dual support for MCU core (DIP and SOT Packages)**

---

## ⭐ Who Is This For?

- 🎓 **Students** learning microcontrollers from the ground up  
- 🧑‍🏫 **Instructors** teaching 8051-based courses  
- 🔬 **Researchers** developing educational platforms  
- 🛠️ **Hobbyists** interested in classical embedded systems  

---

## 🔬 Designed for Academic Rigor

> This repository is not just a hardware dump. It includes:

- 📘 **User Manual**  
- 🧪 **Student Lab Manual**  
- 🧑‍🏫 **Instructor Manual (solutions, waveforms, rubrics)**  

➡️ **Documentation directories:**
- [`docs/user-manual/`](docs/user-manual/)
- [`docs/student-lab-manual/`](docs/student-lab-manual/)
- [`docs/instructor-manual/`](docs/instructor-manual/)

These materials support:
- Repeatable experiments  
- Outcome-Based Education (OBE)  
- External examination and accreditation  

---

# 🔌 Pinout Mapping (ARDU-8051 ↔ Arduino Headers)

<div align="center" style="border: 2px solid #ddd; padding: 10px; border-radius: 10px; background-color: #f9f9f9; width: 80%; margin: auto;">
<img src="https://github.com/gmostofabd/ARDU-8051/blob/2d3f2df3c32d196e49d3f183151466b18d6188e6/hardware/schematic/ARDU-8051-Pin-Map-Diagram.png" alt="ARDU-8051 Pin Mapping Diagram" width="90%" style="border-radius: 8px;">
</div>

The ARDU-8051 board maps the **AT89S52 (8051 core)** I/O ports to the **Arduino UNO–compatible headers** to ensure familiarity and ease of laboratory use.

### 📍 Digital I/O Mapping

<div style="overflow-x:auto;" align="center">

| Arduino Pin | 8051 Pin | 8051 Port | Function / Notes |
|-----------|---------|----------|------------------|
| D0 | P3.0 | Port 3 | RXD (Serial Input) |
| D1 | P3.1 | Port 3 | TXD (Serial Output) |
| D2 | P3.2 | Port 3 | INT0 |
| D3 | P3.3 | Port 3 | INT1 |
| D4 | P3.4 | Port 3 | T0 |
| D5 | P3.5 | Port 3 | T1 |
| D6 | P3.6 | Port 3 | WR |
| D7 | P3.7 | Port 3 | RD |
| D8 | P1.0 | Port 1 | General I/O (LED example) |
| D9 | P1.1 | Port 1 | General I/O |
| D10 | P1.2 | Port 1 | General I/O |
| D11 | P1.3 | Port 1 | General I/O |
| D12 | P1.4 | Port 1 | General I/O |
| D13 | P1.5 | Port 1 | General I/O / On-board LED (if populated) |

</div>

<div align="center">
  <b>Table 1. ARDU-8051 ↔ Arduino UNO Digital Pin Mapping</b>
</div>

---

### 📍 Analog / ADC Mapping (via ADC0804)

ARDU-8051 provides analog input capability using an **ADC0804 (8-bit parallel ADC)**.

<div align="center">
  
| Arduino Analog Pin | ADC0804 Pin | 8051 Connection | Description |
|------------------|-----------|----------------|------------|
| A0 | Vin | External Analog Input | 0–5V analog signal |
| A1 | D0 | P0.0 | ADC Data Bit 0 |
| A2 | D1 | P0.1 | ADC Data Bit 1 |
| A3 | D2 | P0.2 | ADC Data Bit 2 |
| A4 | D3 | P0.3 | ADC Data Bit 3 |
| A5 | D4 | P0.4 | ADC Data Bit 4 |
| — | D5–D7 | P0.5–P0.7 | ADC Data Bits 5–7 |

</div>

> **Note:** Port-0 is buffered using **74HC245** due to its open-drain nature.

---

### 📍 Power & Control Pins

<div align="center">

| Arduino Pin | Signal | Description |
|-----------|--------|------------|
| 5V | VCC | +5V regulated supply |
| GND | GND | Ground |
| RESET | RST | Active-high reset for AT89S52 |
| AREF | — | Not used (ADC0804 uses Vref/2) |

</div>
---

### 📍 ISP / Programming Interface

<div align="center">

| ISP Pin | Connected To | Description |
|------|-------------|------------|
| MOSI | USBasp | Programming data |
| MISO | USBasp | Programming data |
| SCK | USBasp | Programming clock |
| RESET | AT89S52 RST | Target reset |
| VCC | +5V | Power |
| GND | GND | Ground |

</div>

---

### 📝 Design Note

- Pin mapping prioritizes **pedagogical clarity** over Arduino firmware compatibility  
- No Arduino bootloader is required  
- All mappings are **fully documented for assembly-level programming**

---

## 🖼️ Hardware Architecture
<div align="center" style="border: 2px solid #ddd; padding: 10px; border-radius: 10px; background-color: #f9f9f9; width: 80%; margin: auto;">
<img src="https://github.com/gmostofabd/ARDU-8051/blob/a0209aad601f61815d725e26044691174297ee64/hardware/schematic/ATmel8051-Schematic.png" alt="ARDU-8051 Core Circuit" width="90%" style="border-radius: 8px;">
</div>

## 🔌 USBasp Programmer (On-board)

<div align="center" style="border: 2px solid #ddd; padding: 10px; border-radius: 10px; background-color: #f9f9f9; width: 80%; margin: auto;">
<img src="https://github.com/gmostofabd/ARDU-8051/blob/f0cbe4fa73e1365c64df6c0d663c4b425a755871/hardware/schematic/USBasp-Schematic.png" alt="USBasp Programmer Circuit" width="90%" style="border-radius: 8px;">
</div>

- Implemented using **ATmega8A (DIP package)**  
- Fully compatible with **AVRDUDE**  
- Supports **on-board programming** and **external ISP**  
- USB **Type-B / Type-C selectable footprint**

---

## 🧪 Simulation-First Workflow

1. Design and test circuits in **Proteus ISIS**  
2. Write 8051 assembly code using **MIDE-51**  
3. Generate the **HEX file**  
4. Verify behavior in simulation  
5. Program real hardware using **AVRDUDE + USBasp**

---

## 🛠️ Software Toolchain

| Purpose | Tool |
|------|------|
| Circuit Simulation | Proteus ISIS |
| Assembly Programming | MIDE-51 Assembler |
| Hardware Programming | AVRDUDE |
| Programmer | USBasp |

</div>

---

## 🚀 Quick Start: Blink LED

### Requirements

- ARDU-8051 EDU-PRO board  
- USB cable (Type-B or Type-C)  
- Proteus, MIDE-51, and AVRDUDE installed  

### Steps

1. Open the provided **Proteus schematic**  
2. Assemble the **Blink LED** program using MIDE-51  
3. Load the HEX file into Proteus and verify blinking  
4. Connect the board via USB  
5. Program using AVRDUDE:


---



# 🧪 Example Laboratory Experiments (ARDU-8051)

<p align="justify">
This section provides **example laboratory experiments** based on the ARDU-8051 pinout mapping.  </p>
Each experiment is designed for **undergraduate embedded systems laboratories** and follows a
**simulation-first → hardware implementation** methodology.
</p>

---

<details>
<summary><b>List of Experiments(Tap to Expand)</b></summary>

| SN | Experiment Name|
|--------|------------|
| 01 | LED |
| 02 | Push Button |
| 03 | ADC0804 |
| 04 | LCD |
| 05 | Keypad |
</details> 

---

> ## 🔬 Experiment 1: Digital Output Control (LED Blinking)

**Objective**  
To understand basic digital output operation using the 8051 GPIO port.

**Hardware Used**
- ARDU-8051 board  
- On-board LED (connected to **P1.0 / Arduino D8**)

**Pin Mapping**

| Signal | Arduino Pin | 8051 Pin |
|------|------------|----------|
| LED  | D8 | P1.0 |



**Theory**  
Port-1 of the 8051 is a quasi-bidirectional I/O port. Writing `0` drives the pin LOW and writing `1` drives it HIGH.

**Procedure**
1. Write an assembly program to toggle `P1.0`.
2. Assemble the program using **MIDE-51**.
3. Verify operation in **Proteus ISIS**.
4. Program the hardware using **USBasp + AVRDUDE**.

**Expected Result**  
The LED connected to **P1.0** blinks at a fixed interval.

---

> ## 🔬 Experiment 2: Digital Input Reading (Push Button)

**Objective**  
To read a digital input and control an output conditionally.

**Hardware Used**
- Push button on **P3.2 (INT0 / Arduino D2)**  
- LED on **P1.0**

**Pin Mapping**

| Device | Arduino Pin | 8051 Pin |
|------|------------|----------|
| Push Button | D2 | P3.2 (INT0) |
| LED | D8 | P1.0 |

**Theory**  
Port-3 pins have alternate functions. `P3.2` supports external interrupt **INT0** and can also be used as a digital input.

**Procedure**
1. Configure `P3.2` as input.
2. Read the pin status in a polling loop.
3. Turn ON the LED when the button is pressed.

**Expected Result**  
The LED turns ON only while the push button is pressed.

---

> ## 🔬 Experiment 3: External Interrupt (INT0)

**Objective**  
To demonstrate interrupt-driven programming using the **INT0** external interrupt.

**Hardware Used**
- Push button on **P3.2 / Arduino D2**
- LED on **P1.0**

**Pin Mapping**

| Function | Arduino Pin | 8051 Pin |
|-------|------------|----------|
| INT0 | D2 | P3.2 |
| LED | D8 | P1.0 |

**Theory**  
External interrupts allow the 8051 to respond immediately to asynchronous external events.

**Procedure**
1. Enable external interrupt **INT0**.
2. Configure falling-edge triggering.
3. Toggle LED state inside the interrupt service routine (ISR).

**Expected Result**  
The LED toggles state every time the button is pressed.

---

> ## 🔬 Experiment 4: Timer-0 Delay Generation

**Objective**  
To generate precise time delays using **Timer-0**.

**Hardware Used**
- LED on **P1.0**

**Pin Mapping**

| Signal | Arduino Pin | 8051 Pin |
|------|------------|----------|
| LED | D8 | P1.0 |

**Theory**  
Timer-0 in **Mode-1 (16-bit)** can generate accurate delays based on the system clock.

**Procedure**
1. Load Timer-0 registers for the desired delay.
2. Start Timer-0.
3. Poll the overflow flag.
4. Toggle LED on timer overflow.

**Expected Result**  
The LED blinks with a consistent and repeatable time period.

---

> ## 🔬 Experiment 5: Serial Communication (UART)

**Objective**  
To transmit serial data using the 8051 UART.

**Hardware Used**
- USB-to-UART interface (via on-board or external converter)

**Pin Mapping**

| Signal | Arduino Pin | 8051 Pin |
|------|------------|----------|
| RXD | D0 | P3.0 |
| TXD | D1 | P3.1 |

**Theory**  
The 8051 UART uses **Timer-1** to generate the baud rate in mode-1 operation.

**Procedure**
1. Configure UART in mode-1.
2. Set baud rate using Timer-1.
3. Transmit ASCII characters to a serial terminal.

**Expected Result**  
Correct characters appear on the serial terminal.

---

> ## 🔬 Experiment 6: Analog-to-Digital Conversion (ADC0804)

**Objective**  
To read analog voltage using the on-board **ADC0804**.

**Hardware Used**
- Potentiometer (0–5 V)
- ADC0804 (on-board)

**Pin Mapping**

| ADC Signal | Arduino Pin | 8051 Pin |
|---------|------------|----------|
| Vin | A0 | Analog Input |
| D0–D7 | A1–A5 | P0.0–P0.7 |

**Theory**  
ADC0804 converts analog voltage into an 8-bit digital value, which is read via Port-0.

**Procedure**
1. Start ADC conversion.
2. Poll the `INTR` pin for conversion completion.
3. Read digital data from Port-0.
4. Display data using LEDs or serial output.

**Expected Result**  
Digital output varies proportionally with the input voltage.

---

> ## 🔬 Experiment 7: Port-0 Bus Interfacing

**Objective**  
To understand **buffered Port-0 operation** using the 74HC245 bus buffer.

**Hardware Used**
- External LED array
- ADC0804 data bus

**Pin Mapping**

| Bus | Arduino Pin | 8051 Pin |
|----|------------|----------|
| Data Bus | A1–A5 | P0.0–P0.7 |

**Theory**  
Port-0 is open-drain and requires buffering for stable digital communication.

**Procedure**
1. Configure Port-0 as input.
2. Read ADC digital data.
3. Drive external LED array through the buffer.

**Expected Result**  
Stable and noise-free data transfer.

---

## 🎓 Learning Outcomes

After completing these experiments, students will be able to:

- Program 8051 GPIO ports  
- Use timers and external interrupts  
- Implement UART communication  
- Interface ADC devices  
- Understand buffered bus operation  
- Transition from simulation to real hardware  

---

# 🔧 Hardware Design

## 📐 Schematic Design


---

## 🖥️ PCB Design
![PCB Top View](docs/images/ARDU-8051-PCB-Top.png)
![PCB Bottom View](docs/images/ARDU-8051-PCB-Bottom.png)

---

## Hardware Views

---

## 🧱 3D Board Views
<p align="center">
  <img src="https://raw.githubusercontent.com/gmostofabd/ARDU-8051/main/docs/images/ARDU-8051-3D-2.png" width="30%">
  <img src="https://raw.githubusercontent.com/gmostofabd/ARDU-8051/main/docs/images/ARDU-8051-3D-1.png" width="30%">
  <img src="https://raw.githubusercontent.com/gmostofabd/ARDU-8051/main/assets/images/schematic.png" width="30%">
</p>

<p align="center"><b>Figure 2.</b> Top View, Bottom View and Schematic</p>

---

> ## ⚠️ Limitations

ARDU-8051 is an **educational platform** and is not intended for:
- High-performance computing
- Industrial or safety-critical applications  

Design priorities are **simplicity, affordability, and teaching effectiveness**.

---

## 🚀 Future Work

Planned enhancements include:
- Example firmware (Assembly & C)
- Lab exercises and tutorials
- Minor hardware revisions based on feedback
- Community-contributed extensions

---

## 📜 License

This project is released under an **open-source hardware-compatible license**.  
See the `LICENSE` file for details.

---

## 🤝 Contribution Guidelines

Contributions are welcome: hardware improvements, documentation corrections, additional lab experiments, simulation enhancements. Submit issues and pull requests via GitHub workflows.

---

### Maintainer
**Md. Golam Mostofa**  
GitHub: https://github.com/gmostofabd

---
