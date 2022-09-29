import { defineStore } from "pinia";

interface Selected {
  shopID: number | null;
  items: ItemsShop[];
}

interface State {
  selected: Selected[];
}

interface ItemsShop {
  id: number | null;
  categoryID: number | null;
}

export const CartState = defineStore("cart", {
  state: (): State => ({
    selected: [
      {
        shopID: 123,
        items: [
          {
            id: 123,
            categoryID: 12313,
          },
        ],
      },
    ],
  }),
  actions: {
    addItemToSelected(shopID: number, id: number, categoryID: number) {
      this.selected.push({ shopID, items: [{ id, categoryID }] });
    },
    removeItemFromSelected(id: number, shopID: number): void {
      if (!id) return;
      //   const item = this.findItemById(id, shopID);
      const shopIndex = this.selected.findIndex((a) => a.shopID === shopID);
      if (shopIndex === -1) return alert("Магазин не найден");
      console.log(this.selected[shopIndex].items);
      const itemIndex = this.selected[shopIndex].items.findIndex((z) => z.id === id);
      if (itemIndex === -1) return alert("Товар не найден");
      this.selected.splice(itemIndex, 1);
      //   this.selected[shopIndex].items.splice(itemIndex, 1);
    },
    findItemById(id: number, shopID: number): ItemsShop | void {
      const indexShop = this.selected.findIndex((x) => x.shopID === shopID);
      if (indexShop === -1) return alert("Магазин не найден");
      return this.selected[indexShop].items.filter((y) => y.id === id)[0];
    },
  },
});
