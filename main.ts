control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    music.playMelody("C D E F G A B C5 ", 500)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    basic.setLedColor(0x00ff00)
    man.scrollImage(-1, 500)
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
let merged: Image = null
let ritter: Image = null
let man: Image = null
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
man.showImage(4)
basic.forever(function () {
	
})
control.inBackground(function () {
    while (true) {
        let bkg_musik = 0
        control.waitMicros(100000)
        if (bkg_musik != 0) {
        	
        }
    }
})
