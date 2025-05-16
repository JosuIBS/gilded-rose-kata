export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Array<Item> = []) {}

  updateQuality() {
    this.items.forEach((item) => {
      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality--;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality++;
          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality++;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality++;
              }
            }
          }
        }
      }

      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }

      if (item.name === "Sulfuras, Hand of Ragnaros") {
        return;
      }

      if (item.sellIn < 0) {
        if (item.name === "Aged Brie") {
          item.quality++;
          return;
        }

        if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
          item.quality = 0;
          return;
        }

        if (item.quality > 0) {
          item.quality--;
        }
      }
    });

    return this.items;
  }
}
