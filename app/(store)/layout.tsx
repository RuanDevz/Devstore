import { ComponentPropsWithRef, ReactNode } from "react";
import { Header } from "../component/header";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid  w-full max-w-[1600px] grid-row-[min_content max_content] gap-5 px-8">
      <Header />
      {children}
    </div>
  );
}
