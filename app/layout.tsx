import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
