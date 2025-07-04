import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // importa o footer aqui

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>SEA Platform</title>
      </head>
      <body className="bg-[#F8F9FA] text-[#212529] font-poppins">
        <Navbar />
        <main className="container mx-auto px-4 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
