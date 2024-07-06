import Nav from "@/components/Nav";
import "@/styles/global.css";

export const metadata = {
  title: "MadjourAmir",
  description: "Madjour amir portfolio",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="relative flex flex-col justify-start items-center max-w-[1100px] mx-auto sm:px-[25px] px-6 ">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
