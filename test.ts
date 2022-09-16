basic.forever(function() {
    clockFont.setColor(NeoPixelColors.Red);
    clockFont.showClock(12, 34, 56);
    basic.pause(5000);
    clockFont.setColor(NeoPixelColors.Green);
    clockFont.showClock(23, 18, 49);
    basic.pause(5000);
    clockFont.setColor(NeoPixelColors.Orange);
    clockFont.showClock(1, 1, 1);
    basic.pause(5000);
})
