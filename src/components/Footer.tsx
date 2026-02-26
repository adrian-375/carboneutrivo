import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <span className="font-display text-lg text-foreground block mb-3">
            Pavsho Enviro Services
          </span>
          <p className="text-muted-foreground text-xs font-body leading-relaxed">
            We provide end to end technical, advisory, and project support services for the design, development, and long term management of high integrity carbon projects across agriculture, forestry, and land use sectors.
          </p>
        </div>
        <div>
          <p className="text-sm text-foreground font-body mb-2">Get social with us</p>
          <p className="text-muted-foreground text-xs font-body">
            Investor discussions and data room access available upon request.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
            <Phone size={14} className="text-primary" />
            +91 8310624214
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Pavsho Enviro Services. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
