import './globals.css'; // Import global styles, including Tailwind

import Navbar from '../components/Navbar'; // Import the Navbar component
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
      <body>
        <Navbar /> {/* Render the Navbar component */}

        {children} {/* Render the rest of the page content */}
      </body>
    </html>
  );
}