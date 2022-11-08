input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.showString("estuvo muy buena la siesta")
    basic.clearScreen()
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showString("te extraño")
    basic.pause(100)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
