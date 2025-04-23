"use client";

import StoreProvider from "@/store";

export default function Layout(props: { children: React.ReactNode }) {
  return <StoreProvider>{props.children}</StoreProvider>;
}
