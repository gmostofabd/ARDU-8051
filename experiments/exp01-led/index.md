---
title: Experiment 01 – LED Blinking using 8051
description: Basic digital output experiment using 8051 GPIO
---

# 🔬 Experiment 01: LED Blinking

## 🎯 Objective
To understand digital output control using the 8051 GPIO port.

---

## 🧠 Theory
<p align="justify">
Port-1 of the 8051 is a quasi-bidirectional I/O port.
Writing logic <b>1</b> releases the pin, and writing <b>0</b> drives it low.
</p>

---

## 🔌 Pin Mapping

| Device | Arduino Pin | 8051 Pin |
|------|------------|----------|
| LED | D8 | P1.0 |

---

## 🧪 Simulation
- Open Proteus schematic
- Load HEX file
- Observe LED blinking

---

## 🔧 Hardware Steps
1. Connect USB cable
2. Program using USBasp
3. Power ON board

---

## ✅ Expected Result
LED connected to <b>P1.0</b> blinks at a fixed interval.

---

## 📌 Learning Outcome
- GPIO control
- Delay generation
- Assembly program flow
