import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';
import { CartProvider } from '@/context/CartContext';


const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: '3D E-Commerce Store',
  description: 'Modern 3D shopping experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <CartProvider>
          <ThemeProvider>
              <Navbar />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
