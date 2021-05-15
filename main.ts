let bcspn = 0
let hum = 0
let p1 = 0
let p2 = 0
let p3 = 0
input.onButtonPressed(Button.A, function () {
    bcspn = 1
    hum = pins.analogReadPin(AnalogPin.P0)
    p1 = pins.map(
    hum,
    0,
    1023,
    0,
    100
    )
    if (p1 >= 80) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (p1 <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    hum = pins.analogReadPin(AnalogPin.P1)
    p2 = pins.map(
    hum,
    0,
    1023,
    0,
    100
    )
    if (p2 >= 80) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (p2 <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    hum = pins.analogReadPin(AnalogPin.P2)
    p3 = pins.map(
    hum,
    0,
    1023,
    0,
    100
    )
    if (p3 >= 80) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (p3 <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            `)
    }
})
