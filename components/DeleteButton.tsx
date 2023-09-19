"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const deletePost = async (id: string) => {
    const response = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Unable to fetch");
    router.push("/blog");
  };

  return (
    <button type="button" onClick={() => deletePost(id)}>
      Delete
    </button>
  );
};

export { DeleteButton };
