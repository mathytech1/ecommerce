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
    imageUrl: "hat.jpg",
    description:
      "Cheer the team on in style with our unstructured, low crown hat.",
    price: 29,
  },
  {
    id: "234",
    name: "Mug",
    imageUrl: "mug.jpg",
    description: "Wake up to the smell of victory with our coffee mug.",
    price: 16,
  },
  {
    id: "345",
    name: "T-Shirt",
    imageUrl: "shirt.jpg",
    description: "Revel in the championship with our soft cotton t-shirt.",
    price: 22,
  },
  {
    id: "456",
    name: "Apron",
    imageUrl: "apron.jpg",
    description: "Cook like a pro with our championship apron.",
    price: 18,
  },
];
