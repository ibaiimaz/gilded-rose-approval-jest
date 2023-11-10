export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    public toString(): string {
        return this.name + ", " + this.sellIn + ", " + this.quality;
    }
}
