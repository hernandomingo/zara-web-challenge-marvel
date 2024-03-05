import Image from "next/image";
import Link from "next/link";
import { HeartIconFilled } from ".";
import { FavoritesCounter } from "./FavoritesCounter";

export const TopMenu = () => {
  return (
    <header className="bg-black py-4">
      <div className="mx-4 md:mx-12 flex items-center justify-between">
        <Link href="/characters">
          <Image
            src="/marvel.svg"
            alt="Marvel Logo"
            width={130}
            height={52}
            priority
          />
        </Link>
        <div className="flex cursor-pointer">
          <div className="mr-2">
            <HeartIconFilled size={24} />
          </div>
          <FavoritesCounter />
        </div>
      </div>
    </header>
  );
};
