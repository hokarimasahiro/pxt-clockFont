/**
 * Font for 8*32 neopixel panel Display blocks
 */
//% weight=100 color=#0fbc11 icon="\u270f" block="font for clock"
namespace clockFont{
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
    const dispalyPoint:number[]=[
        0,4,11,16,23,28
    ];
    const colonPoint:number[]=[9,21];
    /**
     * @param color RGB color
     */
    //% blockId="setColor" block="setColor RGB=%color"
    export function setColor(color: number): void {
    }
    /**
     * @param p position
     * @param n number
     */
    //% blockId="display" block="display pos=%p num=%n"
    export function display(p:number,n:number): void {
    }
}