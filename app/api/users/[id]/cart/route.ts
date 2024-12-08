import { NextRequest } from "next/server";
import { products } from "@/app/product-data";
import { connectToDb } from "@/app/api/db";
import { ReturnDocument } from "mongodb";

type ShoppingCart = Record<string, string[]>;

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDb();

  const userId = params.id;
  const userCart = await db.collection("carts").findOne({ userId });

  if (!userCart) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartIds = userCart.cartIds;
  const cartProducts = await db
    .collection("products")
    .find({ id: { $in: cartIds } })
    .toArray();

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

type CartBody = {
  productId: string;
};

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDb();

  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  const updatedCart = await db
    .collection("carts")
    .findOneAndUpdate(
      { userId },
      { $push: { cartIds: productId } },
      { upsert: true, ReturnDocument: "after" }
    );

  const cartProducts = await db
    .collection("products")
    .find({ id: { $in: updatedCart.cartIds } })
    .toArray();

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectToDb();

  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  const updatedCart = await db
    .collection("carts")
    .findOneAndUpdate(
      { userId },
      { $pull: { cartIds: productId } },
      { ReturnDocument: "after" }
    );

  if (!updatedCart) {
    return new Response(JSON.stringify([]), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartProducts = await db
    .collection("products")
    .find({ id: { $in: updatedCart.cartIds } })
    .toArray();

  return new Response(JSON.stringify(cartProducts), {
    status: 202,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
