import React from "react";
import { MagnifyingGlass } from "phosphor-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-4 mb-14 bg-[#41436A]">
      <Link href={""}>
        <h1>MyNotes</h1>
      </Link>
      <div className="relative flex items-center min-w-[30%]">
        <MagnifyingGlass
          size={20}
          color="#ffffff"
          weight="bold"
          className="absolute ml-3"
        />
        <input
          type="text"
          className="bg-[#202024]  
          rounded-md  text-white py-2 pl-10  w-full"
        />
      </div>
      <button>Add Note</button>
    </div>
  );
}
