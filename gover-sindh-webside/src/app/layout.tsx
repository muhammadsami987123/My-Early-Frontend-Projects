import "./globals.css";
import Navbar from "./Navbar";

// import Footer from "./footer";
function RootLayout({children,}:any) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
export default RootLayout