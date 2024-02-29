import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from ".";

export const TopMenu = () => {
  return (
    <header className="bg-black py-4">
      <div className="mx-4 lg:mx-12 flex items-center justify-between">
        <Link href="/characters">
          <Image
            src="/marvel.svg"
            alt="Marvel Logo"
            width={130}
            height={52}
            priority
          />
        </Link>
        <div className="flex">
          <Link className="mr-2" href="/characters/favorites">
            <HeartIcon size={24} />
          </Link>
          <span className="text-white">3</span>
        </div>
      </div>
    </header>
  );
};
