import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <footer className="border-t border-border/40 py-12 mt-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-muted-foreground text-sm font-body">
            © 2025 — With the help of Lovable (AI) 
          </p>
        </div>
      </footer>
    </div>
  );
};
