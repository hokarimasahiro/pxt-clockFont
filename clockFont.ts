/**
 * Font for 8*32 neopixel panel Display blocks
 */
//% weight=100 color=#0fbc11 icon="\u270f" block="font for clock"
namespace clockFont{
    let strip = neopixel.create(DigitalPin.P1, 256, NeoPixelMode.RGB);
    let color:number=NeoPixelColors.White;

    const font4: number[] =[
        0x7E81817E,  // 0
        0x0041FF01,  // 1
        0x47899161,  // 2
        0x4291916E,  // 3
        0x3C44FF04,  // 4
        0xF291918E,  // 5
        0x7E91914E,  // 6
        0x808F90E0,  // 7
        0x6E91916E,  // 8
        0x7289897E   // 9
    ];
    const font3: number[] = [
        0x7E817E,  // 0
        0x41FF01,  // 1
        0x478971,  // 2
        0x42916E,  // 3
        0x3C44FF,  // 4
        0xF2918E,  // 5
        0x7E914E,  // 6
        0x809FF0,  // 7
        0x6E916E,  // 8
        0x72897E   // 9
    ];
    /**
     * @param c RGB color
     */
    //% blockId="setColor" block="setColor RGB%c"
    export function setColor(c: number): void {
        color=c;
    }
    /**
     * @param p position
     * @param n number
     * @param f font
     */
    //% blockId="displayNumber" block="number pos%p num%n font%f"
    export function displayNumber(p:number,n:number,f:number): void {
        let font:number;
        if(f == 3) font = font3[n];
        else font = font4[n];
        let fp = f * 8 - 1;
        for(let c = p;c < (p + f);c++){
            for(let j = 0;j < 8; j++){
                if((c % 2) == 0){
                    if(((font >> (fp - j)) & 0x01) == 0x01){
                        strip.setPixelColor(c * 8 + j, color);
                    }else{
                        strip.setPixelColor(c * 8 + j, NeoPixelColors.Black);
                    }
                } else{
                    if (((font >> (fp - j)) & 0x01) == 0x01) {
                        strip.setPixelColor(c * 8 + (7 - j), color);
                    } else {
                        strip.setPixelColor(c * 8 + (7 - j), NeoPixelColors.Black);
                    }
                }
            }
            fp -= 8;
        }
    }
    /**
     * @param p position
     */
    //% blockId="displayColon" block="colon pos%p"
    export function displayColon(p: number): void {
        strip.setPixelColor(p * 8 + 2,color);
        strip.setPixelColor(p * 8 + 5, color);
    }
    /**
     * @param p position
     * @param c number
     */
    //% blockId="clearColumn" block="clear pos%p col%c"
    export function clearColumn(p: number, c: number): void {
        for(let i = 0;i < c;i++){
            for(let j = 0;j < 8;j++){
                strip.setPixelColor((i * 8) + j, NeoPixelColors.Black)
            }
        }
    }
    /**
     * @param h hour
     * @param m minute
     * @param s second
     */
    //% blockId="showClock" block="clock hour%h minute%m second%s"
    export function showClock(h: number, m: number,s:number): void {
        if (Math.trunc(h / 10)==0){
            clearColumn(0,3);
        }else{
            displayNumber(0,Math.trunc(h / 10),3);
        }
        displayNumber(4,h % 10,4);
        displayColon(9);
        displayNumber(11, Math.trunc(m / 10), 4);
        displayNumber(16, m % 10, 4);
        displayColon(21);
        displayNumber(23, Math.trunc(s / 10), 4);
        displayNumber(28, s % 10, 4);

        strip.show();
    }
}