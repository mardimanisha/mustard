import Header from "@/components/Header";

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="">
      <Header />
      <main className="pt-16">{children}</main>
    </div>
  );
}