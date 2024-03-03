import { TopMenu } from "@/components";

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu />
      <div className="p-4 md:p-12">{children}</div>
    </>
  );
}
