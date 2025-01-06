import Header from "@/app/_components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="my-10 container mx-auto">
      {children}
    </div>
  );
}
