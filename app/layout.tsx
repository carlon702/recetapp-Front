import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
