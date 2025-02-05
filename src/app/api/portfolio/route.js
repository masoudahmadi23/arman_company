import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.YOUR_DOMAIN}/wp-json/wc/v3/products?per_page=100`,
      {
        auth: {
          username: process.env.YOUR_CONSUMER_KEY,
          password: process.env.YOUR_CONSUMER_SECRET,
        },
      }
    );

    if (response.data && response.data.length > 0) {
      return NextResponse.json(response.data);
    } else {
      return NextResponse.json(
        { error: "No products found." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
