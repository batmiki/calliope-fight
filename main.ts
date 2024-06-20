let man = images.createImage(`
    . . # . .
    . # # # .
    . . # . .
    . # . # .
    . . . . .
    `)
let ritter = images.createImage(`
    # . # . .
    . # # # .
    . . # . .
    . # . # .
    . . . . .
    `)
let merged = images.createImage(`
    . . # # .
    . # # # #
    . . # . .
    . # . # .
    . . . . .
    `)
man.showImage(4)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        man.scrollImage(-1, 500)
        merged.showImage(0)
        basic.setLedColor(0xff0000)
        music.playMelody("D C D E E D C C ", 120)
        ritter.scrollImage(1, 100)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
    }
})
