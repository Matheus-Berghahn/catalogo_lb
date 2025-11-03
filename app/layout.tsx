import "./globals.css";

export const metadata = {
  title: "Catálogo",
  description: "Catálogo de Produtos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
