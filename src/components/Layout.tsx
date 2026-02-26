import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
    <Navbar />
    <main className="flex-1">{children}</main>
  </div>
);

export default Layout;
