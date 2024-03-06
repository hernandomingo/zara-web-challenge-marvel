import { TopMenu } from "@/components";
import { FavoritesCounter } from "@/features/characters/components/FavoritesCounter";

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu>
        <FavoritesCounter />
      </TopMenu>
      <div>{children}</div>
    </>
  );
}
