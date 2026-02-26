import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageWrapper = ({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) => (
  <div className="pt-24 pb-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-display text-foreground mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground font-body leading-relaxed">{subtitle}</p>}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  </div>
);

export default PageWrapper;
