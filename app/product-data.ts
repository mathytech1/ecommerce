export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: "123",
    name: "Hat",
    imageUrl: "hat.png",
    description:
      "Cheer the team on in style with our unstructured, low crown, six-panel ball cap made of 100% organic cotton twill. Featuring our original Big star Collectibles artwork, this hat is perfect for the game, the beach, or anywhere you want to show your team spirit.",
    price: 29,
  },
  {
    id: "234",
    name: "Mug",
    imageUrl: "mug.png",
    description:
      "Wake up to the smell of victory with our coffee mug. Holds 12 oz of your favorite beverage. Dishwasher safe.",
    price: 16,
  },
  {
    id: "345",
    name: "T-Shirt",
    imageUrl: "shirt.png",
    description: "Revel in the championship with our soft cotton t-shirt.",
    price: 22,
  },
  {
    id: "456",
    name: "Apron",
    imageUrl: "apron.png",
    description: "Cook like a pro with our championship apron.",
    price: 18,
  },
];
