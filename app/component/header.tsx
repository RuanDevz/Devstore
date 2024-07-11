import Link from "next/link";
import Input from "./Input";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-between items-center py-8">
      <div className="flex gap-5 items-center ">
        <Link href="/">
          <h1 className="text-white font-extrabold text-2xl">Devstore</h1>
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-twodark px-5 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500 cursor-pointer" />

          <Input
            className="flex-1 bg-twodark test-sm outline-none text-zinc-500 p-3"
            placeholder="Buscar Produtos..."
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4 text-white" />
          <span className="text-sm text-white"> Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-twodark" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm text-white">Account</span>
          <Image
            src="https://github.com/RuanDevz.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
}
