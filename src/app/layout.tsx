import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// در آینده فونت مخصوص برند اضافه می‌کنیم
export const metadata: Metadata = {
  title: "Branch | یادگیری تعاملی برنامه‌نویسی",
  description:
    "پلتفرم آموزشی Branch، جایی برای رشد برنامه‌نویس‌ها با به‌اشتراک‌گذاری دانش روزانه.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        {/* Header (بعدا با جزئیات می‌سازیم) */}
        <header className="border-b bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-600">Branch 🌿</h1>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:text-green-600 transition">
                خانه
              </Link>
              <a href="/posts" className="hover:text-green-600 transition">
                مطالب
              </a>
              <a href="/community" className="hover:text-green-600 transition">
                کامیونیتی
              </a>
              <a href="/about" className="hover:text-green-600 transition">
                درباره ما
              </a>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-white text-sm text-center py-4 text-gray-500">
          <p>© {new Date().getFullYear()} Branch. همه حقوق محفوظ است.</p>
        </footer>
        <div>asdasdas</div>
      </body>
    </html>
  );
}
