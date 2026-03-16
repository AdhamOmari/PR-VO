import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card relative border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            موقعنا وتواصلنا
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background/50 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">معلومات الاتصال</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icons.MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">العنوان</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    اربد - شارع راتب البطاينة<br/>مجمع الرشدان التجاري
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icons.Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">أرقام الهواتف</h4>
                  <div className="flex flex-col gap-2">
                    <a href="tel:0777999903" className="text-xl text-muted-foreground hover:text-primary transition-colors font-english font-medium tracking-wider" dir="ltr">
                      077 799 9903
                    </a>
                    <a href="tel:0770711113" className="text-xl text-muted-foreground hover:text-primary transition-colors font-english font-medium tracking-wider" dir="ltr">
                      077 071 1113
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 h-[400px] lg:h-auto min-h-[400px]"
          >
            <iframe
              title="PRÉVO Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=35.8548%2C32.5427%2C35.8648%2C32.5527&layer=mapnik&marker=32.5476819%2C35.8598135"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps?q=32.5476819,35.8598135"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              <Icons.MapPin className="w-4 h-4" />
              <span>فتح في خرائط Google</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
