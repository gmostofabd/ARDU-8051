; =========================
; ARDU-8051 Animated Demo
; Full dashboard showcase
; =========================

START:
    ; Reset outputs
    OUT LED1, #0
    OUT LED2, #0
    OUT SEG7_1, #0
    OUT LCD1, "ARDU8051"
    OUT MOTOR1, #0
    OUT STEPPER1, #0
    OUT SERVO1, #0
    OUT DOT1, #0000000000000000000000000000000000000000000000000000000000000000

LOOP:
    ; -----------------------
    ; LED Blink
    ; -----------------------
    OUT LED1, BLINK1
    OUT LED2, BLINK2

    ; -----------------------
    ; 7-Segment Count (0-9)
    ; -----------------------
    INC SEG7_1
    MOV ACC, SEG7_1
    OUT SEG7_1, ACC

    ; -----------------------
    ; LCD Scroll text
    ; -----------------------
    MOV ACC, #0
    OUT LCD1, "HELLO8051"
    NOP

    ; -----------------------
    ; Motor and Stepper toggle
    ; -----------------------
    SETB MOTOR1
    CLR STEPPER1
    NOP
    CLR MOTOR1
    SETB STEPPER1
    NOP

    ; -----------------------
    ; Servo sweep 0-180
    ; -----------------------
    MOV ACC, #0
    OUT SERVO1, ACC
    MOV ACC, #45
    OUT SERVO1, ACC
    MOV ACC, #90
    OUT SERVO1, ACC
    MOV ACC, #135
    OUT SERVO1, ACC
    MOV ACC, #180
    OUT SERVO1, ACC

    ; -----------------------
    ; Dot Matrix moving pattern
    ; -----------------------
    OUT DOT1, #1010101010101010101010101010101010101010101010101010101010101010
    NOP
    OUT DOT1, #0101010101010101010101010101010101010101010101010101010101010101
    NOP

    SJMP LOOP
