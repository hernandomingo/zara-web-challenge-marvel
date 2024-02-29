import { TopMenu } from "@/components";

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu />
      <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded">{children}</div>
    </>
  );
}
