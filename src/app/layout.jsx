import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}