input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        Set_timer = 0
        basic.pause(5000)
        Timer += 1
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        for (let index = 0; index < 10; index++) {
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # . # #
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
let Timer = 0
let Set_timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
