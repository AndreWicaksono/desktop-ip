"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (rawFormData.email && rawFormData.password) {
    // Set cookie with example of JWT Token string
    cookies().set(
      "auth",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );

    redirect("/");
  }
}

export async function logout() {
  if (cookies().has("auth")) {
    cookies().delete("auth");

    redirect("/");
  }
}
