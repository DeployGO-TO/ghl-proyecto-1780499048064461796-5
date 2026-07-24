import "./globals.css";

export const metadata = {
  title: "Go To Marketing — Agencia 360° de Marketing Digital",
  description: "Go To Marketing es una agencia 360° especializada en pauta digital, marketing digital, diseño, desarrollo web e inteligencia artificial. +$5M en ventas escaladas, 300+ empresas.",
  openGraph: {
    title: "Go To Marketing — Agencia 360° de Marketing Digital",
    description: "Go To Marketing es una agencia 360° especializada en pauta digital, marketing digital, diseño, desarrollo web e inteligencia artificial. +$5M en ventas escaladas, 300+ empresas.",
    images: [{"url":"https://vibe.filesafe.space/1780499048064461796/assets/aee2260e-2360-46b7-8421-d500bdce33a1.png"}],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="stylesheet" href="/ghl-styles.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://go-to-market-website.vibepreview.com/assets/index-CExHw_fe.css" />
        {children}
      </body>
    </html>
  );
}
