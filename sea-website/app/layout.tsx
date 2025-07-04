import './globals.css'; // Import global styles, including Tailwind

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
        {children}
      </body>
    </html>
  );
}