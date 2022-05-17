"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \navailable connections: ${this.connections}`);
    }
}
const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
