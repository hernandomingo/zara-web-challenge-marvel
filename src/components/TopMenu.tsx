import Image from "next/image";
import Link from "next/link";

interface TopMenuProps {
  children?: React.ReactNode;
}

export const TopMenu = ({ children }: TopMenuProps) => {
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
        {children}
      </div>
    </header>
  );
};
