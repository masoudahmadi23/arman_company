import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.YOUR_DOMAIN}/wp-json/wp/v2/posts?per_page=100`
    );

    if (response.data && response.data.length > 0) {
      return NextResponse.json(response.data);
    } else {
      return NextResponse.json({ error: "No blogs found." }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);

    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }
}
