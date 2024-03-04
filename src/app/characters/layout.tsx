import { TopMenu } from "@/components";

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu />
      <div>{children}</div>
    </>
  );
}
