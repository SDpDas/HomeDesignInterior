import { Sen } from "next/font/google";
import "./globals.css";

//Importing all the components
import Header from "@/components/Header";
import Footer from "@/components/footer";

//Importing themes for project
import { ThemeProvider } from "@/components/theme-provider";

const Josef = Sen({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  title: "Homes",
  description: "Your app/website to do decor shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/faviconlogo.ico" />
      </head>
      <body className={Josef.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
