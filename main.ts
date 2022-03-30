input.onButtonPressed(Button.B, function () {
    teller = 0
})
input.onPinPressed(TouchPin.P1, function () {
    teller += 1
    basic.showIcon(IconNames.Sad)
    music.playTone(880, music.beat(BeatFraction.Whole))
})
let teller = 0
teller = 0
basic.forever(function () {
    basic.showNumber(teller)
})
