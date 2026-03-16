import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function About() {
  const features = [
    {
      icon: <Icons.MonitorSmartphone className="w-8 h-8 text-primary" />,
      title: "أحدث التقنيات",
      desc: "نواكب التطور لنقدم لك أحدث الأجهزة والإصدارات الذكية."
    },
    {
      icon: <Icons.Wrench className="w-8 h-8 text-primary" />,
      title: "دقة الأداء",
      desc: "صيانة احترافية ومضمونة تعيد لجهازك كفاءته الأصلية."
    },
    {
      icon: <Icons.ShieldCheck className="w-8 h-8 text-primary" />,
      title: "رقيّ التعامل",
      desc: "خدمة عملاء تليق بمستواك وتضمن لك تجربة تسوق استثنائية."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative gradient elements */}
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-arabic">
            الوجهة الأولى في اربد لبيع وصيانة الأجهزة الخلوية بأحدث التقنيات. 
            نجمع بين <span className="text-primary font-bold">دقة الأداء</span> و
            <span className="text-primary font-bold">رقيّ التعامل</span>، 
            لنقدم لك حلولاً تقنية تليق بمستواك.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 hover:from-primary/50 hover:to-primary/10 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-card/90 backdrop-blur-xl p-8 rounded-[15px] flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
