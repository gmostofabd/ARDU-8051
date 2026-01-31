; -------------------- Sample Demo Program --------------------
; LED Blinking, 7-Segment Counting, LCD Message, Motor

; Initialize ACC
MOV ACC, 0AH        ; ACC = 0x0A
MOV P0, ACC         ; Turn on LEDs corresponding to ACC

; Display value on 7-Segment
MOV R0, ACC
; Assume render7Seg(R0) updates automatically

; LCD Message
LCD HELLO           ; Display "HELLO" on LCD

; Toggle LEDs
SETB P0.0           ; Turn ON LED 0
CLR P0.1            ; Turn OFF LED 1
SETB P0.2           ; Turn ON LED 2
CLR P0.3            ; Turn OFF LED 3

; Run Motor
RUN MOTOR

; Loop LED blink
SETB P0.0
CLR P0.0
SETB P0.1
CLR P0.1

; End of sample
NOP
