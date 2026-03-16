import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function Social() {
  const socials = [
    {
      name: "Facebook",
      icon: <Icons.Facebook className="w-10 h-10" />,
      url: "https://www.facebook.com/share/1BBw6m36P6/?mibextid=wwXIfr",
      color: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_25px_rgba(24,119,242,0.5)]"
    },
    {
      name: "Instagram",
      icon: <Icons.Instagram className="w-10 h-10" />,
      url: "https://www.instagram.com/prevo_technology?igsh=eDh5c3kyaDl3bzgz&utm_source=qr",
      color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:shadow-[0_0_25px_rgba(225,48,108,0.5)]"
    },
    {
      name: "TikTok",
      icon: <Icons.TikTok className="w-10 h-10" />,
      url: "https://www.tiktok.com/@prevo_technology?_r=1&_t=ZS-94irLBGSzht",
      color: "hover:bg-[#000000] hover:border-[#25F4EE] hover:text-white hover:shadow-[0_0_25px_rgba(37,244,238,0.5)] dark:hover:bg-[#111] dark:hover:border-white"
    }
  ];

  return (
    <section className="py-20 bg-background relative border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10">تابعنا على شبكات التواصل</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`
                  w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center
                  bg-card border border-white/10 text-white/70
                  transition-all duration-300 transform hover:-translate-y-2
                  ${social.color}
                `}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
