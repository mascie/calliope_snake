let x = 2
let y = 2
loops.everyInterval(500, function () {
    led.unplot(x, y)
    if (input.isGesture(Gesture.TiltLeft)) {
        if (x > 0) {
            x += -1
        }
    }
    if (input.isGesture(Gesture.TiltRight)) {
        if (x < 4) {
            x += 1
        }
    }
    if (input.isGesture(Gesture.LogoDown)) {
        if (y > 0) {
            y += -1
        }
    }
    if (input.isGesture(Gesture.LogoUp)) {
        if (y < 4) {
            y += 1
        }
    }
    led.plot(x, y)
})
