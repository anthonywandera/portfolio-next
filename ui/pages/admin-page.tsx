"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function AdminPage() {
  const isAuth = useSelector<{ isAuth: boolean }>((state) => state.isAuth);

  // Redirect to a login page if user is not authenticated
  if (!isAuth) redirect("/admin/login");

  return <h1>Admins panel</h1>;
}
