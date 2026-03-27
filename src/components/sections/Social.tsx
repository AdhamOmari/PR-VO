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

  );
}
