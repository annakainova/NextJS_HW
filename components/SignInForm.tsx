"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const SignInForm = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Email
        <Input type="email" name="email" id="email" required />
      </label>

      <label>
        Password
        <Input type="password" name="password" id="password" required />
      </label>

      <Button type="submit">Sign in</Button>
    </form>
  );
};

export { SignInForm };
