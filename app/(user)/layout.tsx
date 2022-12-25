import Header from "components/Header";
import SideBar from "components/SideBar";

import "../../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="mx-auto">
        <Header />
        <div className="w-full flex">
          <div className="w-full md:w-3/4 xl:w-3/4">{children}</div>
          <div className="hidden md:visible md:flex xl:visible xl:flex md:w-1/4 xl:3/4">
            <SideBar />
          </div>
        </div>
      </body>
    </html>
  );
}
