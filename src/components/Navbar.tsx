import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Approach", path: "/approach" },
  {
    label: "Our Expertise",
    path: "/expertise",
    children: [
      { label: "Wetland Restoration & Conservation", path: "/expertise#wetland-restoration" },
      { label: "Sustainable Agriculture", path: "/expertise#sustainable-agriculture" },
      { label: "Sustainable Forestry", path: "/expertise#sustainable-forestry" },
      { label: "Climate, Community & Biodiversity", path: "/expertise#climate-community-biodiversity" },
      { label: "GIS & Remote Sensing", path: "/expertise#gis-remote-sensing" },
      { label: "IT Solutions", path: "/expertise#it-solutions" },
    ],
  },
  { label: "Governance & Integrity", path: "/governance" },
  { label: "Project Delivery", path: "/delivery" },
  { label: "Ongoing Projects", path: "/projects" },
  { label: "Our Team", path: "/team" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileExpertise, setMobileExpertise] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHome ? "bg-gradient-to-b from-background/60 to-transparent" : "bg-background/95 backdrop-blur-md border-b border-border/50"}`}>
      <div className="container mx-auto flex flex-col items-center py-4 px-4">
        {/* Logo row */}
        <div className="w-full flex items-center justify-between xl:justify-center">
          <Link to="/" className="font-display text-2xl tracking-wide text-foreground/90">
            Carbo<span className="text-primary">Neutrivo</span>
          </Link>
          {/* Mobile toggle */}
          <button className="xl:hidden text-foreground/70" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop tabs row */}
        <div className="hidden xl:flex items-center justify-center gap-6 mt-3 flex-wrap">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className={`text-[13px] uppercase tracking-[0.1em] font-body font-medium text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap ${location.pathname.startsWith("/expertise") ? "text-primary" : ""}`}
                >
                  {item.label} ▾
                </Link>
                <div className="absolute top-full left-0 mt-3 py-2 bg-background/90 backdrop-blur-xl border border-primary/10 rounded-lg shadow-2xl shadow-primary/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[280px] z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`text-[13px] uppercase tracking-[0.1em] font-body font-medium text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap ${location.pathname === item.path ? "text-primary" : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-background/90 backdrop-blur-xl border-b border-primary/10 overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpertise(!mobileExpertise)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 w-full text-left"
                    >
                      {item.label} {mobileExpertise ? "▴" : "▾"}
                    </button>
                    {mobileExpertise && (
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        <Link to={item.path} onClick={() => setOpen(false)} className="text-xs text-muted-foreground hover:text-primary py-1">
                          Overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpen(false)}
                            className="text-xs text-muted-foreground hover:text-primary py-1"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
