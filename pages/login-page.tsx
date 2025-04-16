"use client";
import { useSetAuthMutation } from "@/store/api";
import { authActions } from "@/store/auth";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [setAuth] = useSetAuthMutation();
  const dispatch = useDispatch();

  return (
    <section className="bg-black w-screen h-screen flex items-center justify-center">
      <form
        className="bg-[var(--theme-color-background)] p-4 flex flex-col gap-2 rounded"
        onSubmit={async (e: React.FormEvent) => {
          e.preventDefault();
          const formEl = e.target as HTMLFormElement;
          const formData = new FormData(formEl);
          const pswd = formData.get("pswd") as string;

          // Validate pswd
          // .....

          // Send pswd
          const { error } = await setAuth(pswd);

          if (!error) {
            dispatch(authActions.authenticate());
            redirect("/admin");
          }
        }}
      >
        <label htmlFor="pswd">Enter Password</label>
        <input
          id="pswd"
          name="pswd"
          type="password"
          className="border border-[var(--theme-color-text)] rounded px-0.5"
        />
      </form>
    </section>
  );
}
