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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
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
