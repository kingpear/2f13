let value = 0
let yvalue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(value, 0)
        basic.pause(200)
        value += 1
    }
    if (value > 4) {
    	
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, yvalue)
        basic.pause(200)
        yvalue += 1
    }
    if (yvalue > 4) {
        yvalue = 0
    }
})
