import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function Hero() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const socials = [
    {
      name: "Facebook",
      icon: <Icons.Facebook className="w-6 h-6 md:w-7 md:h-7" />,
      url: "https://www.facebook.com/share/1BBw6m36P6/?mibextid=wwXIfr",
      color: "#1877F2",
      bgGradient: "from-[#1877F2] to-[#1877F2]/80"
    },
    {
      name: "Instagram",
      icon: <Icons.Instagram className="w-6 h-6 md:w-7 md:h-7" />,
      url: "https://www.instagram.com/prevo_technology?igsh=eDh5c3kyaDl3bzgz&utm_source=qr",
      color: "#E4405F",
      bgGradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]"
    },
    {
      name: "TikTok",
      icon: <Icons.TikTok className="w-6 h-6 md:w-7 md:h-7" />,
      url: "https://www.tiktok.com/@prevo_technology?_r=1&_t=ZS-94irLBGSzht",
      color: "#25F4EE",
      bgGradient: "from-[#000000] to-[#25F4EE]"
    }
  ];

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
          className="relative mb-6 md:mb-8"
        >
          {/* Logo glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse" />
          <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
          
          <img
            src={`${basePath}/logo.jpg`}
            alt="PRÉVO - بريفو Logo"
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-background shadow-2xl relative z-10 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-3 md:mb-4 tracking-tight drop-shadow-lg">
            PRÉVO <span className="text-primary/90">-</span> بريفو
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-primary-foreground/90 font-medium leading-relaxed mb-6 md:mb-8 text-shadow-sm font-arabic">
            حيث الفخامه والاحتراف والتطور
          </p>
          
          {/* Social Media Section - Integrated with premium style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-sm md:text-base text-white/50 mb-4 md:mb-6 tracking-wider uppercase font-english">
              تابعنا على وسائل التواصل الاجتماعي
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.8 + (idx * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    group relative overflow-hidden
                    w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                    rounded-full flex items-center justify-center
                    bg-gradient-to-br from-white/10 to-white/5
                    backdrop-blur-sm border border-white/20
                    transition-all duration-300
                    hover:shadow-2xl hover:border-white/40
                  `}
                >
                  {/* Animated gradient background on hover */}
                  <div 
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 bg-gradient-to-r
                      ${social.bgGradient}
                    `} 
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-full blur-xl bg-current" style={{ color: social.color }} />
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                  
                  {/* Ripple effect on click */}
                  <div className="absolute inset-0 rounded-full group-active:scale-150 group-active:opacity-0 transition-all duration-500 bg-white/30" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <motion.a
              href="#about"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-sm md:text-base"
            >
              اكتشف المزيد
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full font-bold bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md transition-all duration-300 w-full sm:w-auto text-sm md:text-base hover:border-primary/50"
            >
              تواصل معنا
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce"
      >
        <a href="#about" className="text-white/50 hover:text-primary transition-colors flex flex-col items-center gap-1 md:gap-2">
          <span className="text-xs md:text-sm font-english tracking-widest uppercase">SCROLL</span>
          <Icons.ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </motion.div>
    </section>
  );
}