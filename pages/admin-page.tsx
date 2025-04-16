"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import Section from "../components/section/section";

export default function AdminPage() {
  const isAuth = useSelector<{ admin: { isAuth: boolean } }>(
    (state) => state.admin.isAuth
  );

  // Redirect to a login page if user is not authenticated
  if (!isAuth) redirect("/admin/login");

  return (
    <Section id="about" center>
      <div>
        <h2>About Me</h2>
        <textarea
          name="description"
          className="resize-none p-1 bg-[var(--theme-color-background-tint)] rounded w-full"
          defaultValue={"hello, i miss you"}
        />
      </div>
    </Section>
  );
}
