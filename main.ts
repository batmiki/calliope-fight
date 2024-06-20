function init () {
	
}
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
	
})
init()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        images.createImage(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            . . . . .
            `).scrollImage(-1, 500)
        images.createImage(`
            # . # . .
            . # # # .
            . . # . .
            . # . # .
            . . . . .
            `).scrollImage(1, 50)
    }
})
