import BootstrapClient from "@/components/BootstrapClient";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TawkChat from "@/components/TawkChat";

export const metadata = {
  title: "Design Agency for Startups | Branding, UI/UX & Web Solutions",
  description: "We help startups grow through bold branding, UI/UX design, and smart web solutions that turn big ideas into real results. Let’s bring your vision to life today.",
  icons: {
    icon: [{ url: "/logo.svg" }, { url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
        <TawkChat />
      </body>
    </html>
  );
}
