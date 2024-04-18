"use client";

import { AppProviders } from "../contexts";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function Layout({ children }: any) {
  return (
    <AppProviders>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}