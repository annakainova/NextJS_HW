import { DeleteButton } from "@/components/DeleteButton";
import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog |Next App",
};

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return { title: post.title };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <DeleteButton id={id}></DeleteButton>
    </>
  );
}
