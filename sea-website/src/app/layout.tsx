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
        <title>SEA Platform</title>
      </head>
      <body>
        <Navbar /> {/* Render the Navbar component */}

        {children} {/* Render the rest of the page content */}
      </body>
    </html>
  );
}