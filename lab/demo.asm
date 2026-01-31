; =========================
; ARDU-8051 Demo Program
; Animate all components
; =========================

START:
    OUT LED1, #0
    OUT LED2, #0
    OUT SEG7_1, #0
    OUT LCD1, "ARDU8051"
    OUT MOTOR1, #0
    OUT STEPPER1, #0
    OUT SERVO1, #0
    OUT DOT1, #0000000000000000000000000000000000000000000000000000000000000000

LOOP:
    ; LED blink
    OUT LED1, #1
    OUT LED2, #1
    NOP
    OUT LED1, #0
    OUT LED2, #0
    NOP

    ; 7-segment counter
    INC SEG7_1
    MOV ACC, SEG7_1
    OUT SEG7_1, ACC

    ; LCD scroll
    OUT LCD1, "ARDU8051"

    ; Motor toggle
    SETB MOTOR1
    CLR STEPPER1
    NOP
    CLR MOTOR1
    SETB STEPPER1
    NOP

    ; Servo sweep
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

    ; Dot matrix pattern
    OUT DOT1, #1010101010101010101010101010101010101010101010101010101010101010
    NOP
    OUT DOT1, #0101010101010101010101010101010101010101010101010101010101010101

    SJMP LOOP
