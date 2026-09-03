import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Sobre — Invitaciones digitales a medida',
  description:
    'Diseñamos la invitación digital de tu evento: bodas, XV, cumpleaños y baby showers, con cuenta regresiva, mapa y confirmación de invitados en un solo link.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
