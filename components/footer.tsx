import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* SECTION 1 — BRAND */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-block hover:opacity-80 transition-opacity">
              <Logo className="w-8 h-8 text-foreground" />
              <span className="text-3xl font-bold tracking-tight">
                TILCAYO
              </span>
            </Link>
            <p className="text-lg font-medium mb-3">
              Creating digital solutions for what's next.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Creating websites, web apps & software solutions for businesses.
            </p>
          </div>

          {/* SECTION 2 — NAVIGATION */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold tracking-wider text-muted-foreground uppercase mb-6">Navigation</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>Home</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>Services</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>Projects</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>About</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>Contact</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold tracking-wider text-muted-foreground uppercase mb-6">Services</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>Business Websites</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>Web Applications</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors inline-block relative group">
                  <span>Custom Software</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* SECTION 3 — CONNECT */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold tracking-wider text-muted-foreground uppercase mb-6">Connect</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <a 
                  href="https://www.linkedin.com/in/jai-nithil-7a003a39/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1"
                >
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground/70 mb-0.5">LinkedIn</span>
                    <span className="relative">
                      Jai Nithil
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1 mt-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/manikandan-prabhu-c-66b559371/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1"
                >
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground/70 mb-0.5">LinkedIn</span>
                    <span className="relative">
                      Manikandan Prabhu
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1 mt-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/egoist.v4_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1"
                >
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground/70 mb-0.5">Instagram</span>
                    <span className="relative">
                      @egoist.v4_
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1 mt-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/ft.manz_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1"
                >
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground/70 mb-0.5">Instagram</span>
                    <span className="relative">
                      @ft.manz_
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1 mt-3" />
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="mailto:tilcayoweb@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1"
                >
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground/70 mb-0.5">Email</span>
                    <span className="relative">
                      tilcayoweb@gmail.com
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 4 — LOCATION */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold tracking-wider text-muted-foreground uppercase mb-6">Location</h4>
            <address className="not-italic text-muted-foreground font-medium flex flex-col space-y-1">
              <span>Karur</span>
              <span>Tamil Nadu, India</span>
            </address>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
          <p>© {currentYear} TILCAYO. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with curiosity <span className="text-foreground">+</span> code.
          </p>
        </div>
      </div>
    </footer>
  );
}
