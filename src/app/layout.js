import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 font-sans">
        {/* اتركيه هكذا، المحتوى سيأتي من صفحة page.js */}
        <main>{children}</main>
      </body>
    </html>
  );
}