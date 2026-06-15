import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Hopes Technologies",
  description:
    "Secure administrative dashboard to coordinate jobs, industries, services, staff members, queries, and system properties.",
};

export default function AdminRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-1 flex min-h-screen overflow-hidden bg-background">{children}</div>;
}
