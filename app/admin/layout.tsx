"use client";

import StoreProvider from "@/store/store";

export default function Layout(props: { children: React.ReactNode }) {
  return <StoreProvider>{props.children}</StoreProvider>;
}
