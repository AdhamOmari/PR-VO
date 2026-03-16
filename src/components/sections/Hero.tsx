import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function Hero() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background with Dark Navy + Circuit overlay from banner */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-color-burn z-10" />
        <img
          src={`${basePath}/banner.png`}
          alt="PRÉVO Technology Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
      </div>

      <div className="container relative z-30 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Logo glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse" />
          <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
          
          <img
            src={`${basePath}/logo.jpg`}
            alt="PRÉVO - بريفو Logo"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-background shadow-2xl relative z-10 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
            PRÉVO <span className="text-primary/90">-</span> بريفو
          </h1>
          
          <p className="text-xl md:text-3xl text-primary-foreground/90 font-medium leading-relaxed mb-8 text-shadow-sm font-arabic">
            حيث الفخامه والاحتراف والتطور
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="#about"
              className="px-8 py-4 rounded-full font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              اكتشف المزيد
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md transition-all duration-300 w-full sm:w-auto hover:border-primary/50"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce"
      >
        <a href="#about" className="text-white/50 hover:text-primary transition-colors flex flex-col items-center gap-2">
          <span className="text-sm font-english tracking-widest uppercase">SCROLL</span>
          <Icons.ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
