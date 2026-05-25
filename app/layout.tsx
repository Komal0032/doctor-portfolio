import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import WhatsAppButton from './components/WhatsAppButton';


export const metadata: Metadata = {
  title: "Dr. Krushna's Homeopathy Clinic",
  description: 'True Healing Begins by Addressing the Root Cause',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Wrap children in a main tag with flex-grow to keep footer at the bottom */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Moved inside the body tag */}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}