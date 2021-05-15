hum = 0
p1 = 0
p2 = 0
p3 = 0

def on_button_pressed_a():
    global hum, p1, p2, p3
    hum = pins.analog_read_pin(AnalogPin.P0)
    p1 = pins.map(hum, 0, 1023, 0, 100)
    if p1 >= 80:
        basic.show_leds("""
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
    elif p1 <= 20:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            """)
    else:
        basic.show_leds("""
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
    hum = pins.analog_read_pin(AnalogPin.P1)
    p2 = pins.map(hum, 0, 1023, 0, 100)
    if p2 >= 80:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
    elif p2 <= 20:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            """)
    else:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            """)
    hum = pins.analog_read_pin(AnalogPin.P2)
    p3 = pins.map(hum, 0, 1023, 0, 100)
    if p3 >= 80:
        basic.show_leds("""
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            """)
    elif p3 <= 20:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """)
    else:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)
