control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    music.playMelody("C D E F G A B C5 ", 600)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    basic.setLedColor(0x00ff00)
    scrollRight(500000)
    merged.showImage(0)
    basic.setLedColor(0xff0000)
    music.playMelody("D C D E E D C C ", 120)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_PIN_EVT_RISE
    )
    ritter.scrollImage(1, 100)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
function Init () {
    man = images.createImage(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    ritter = images.createImage(`
        # . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    merged = images.createImage(`
        . . # # .
        . # # # #
        . . # . .
        . # . # .
        . . . . .
        `)
    shield = images.createImage(`
        . # # # .
        . # . . #
        . # # # .
        . # . # .
        . # . . #
        `)
    shield.showImage(0)
}
function scrollRight (num: number) {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    control.waitMicros(num)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        . # . . .
        . . . . .
        `)
    control.waitMicros(num)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        . . . . .
        `)
    control.waitMicros(num)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
}
let shield: Image = null
let man: Image = null
let ritter: Image = null
let merged: Image = null
Init()
basic.forever(function () {
	
})
