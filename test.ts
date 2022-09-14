basic.forever(function() {
    clockFont.setColor(NeoPixelColors.Red);
    clockFont.showClock(12, 6, 57);
    basic.pause(2000);
    clockFont.setColor(NeoPixelColors.Green);
    clockFont.showClock(23, 18, 49);
    basic.pause(2000);
    clockFont.setColor(NeoPixelColors.Orange);
    clockFont.showClock(1, 1, 1);
    basic.pause(2000);
})
