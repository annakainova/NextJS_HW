import { NextResponse } from "next/server";
import { posts } from "../posts";

export async function DELETE(
  req: Request,
  { params }: { params: { id: number } }
) {
  let currentPosts = posts.filter((post) => post.id !== params.id);
  return NextResponse.json(currentPosts);
}
