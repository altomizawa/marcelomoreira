import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Nav from './components/Nav';
import { CategoryProvider } from './contexts/categoryContext';

export const metadata = {
  title: "Marcelo Moreira's Website",
  description: "This is the official website of Marcelo Moreira dos Santos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CategoryProvider>
          <Nav />
          {children}
        </CategoryProvider>
      </body>
    </html>
  );
}
