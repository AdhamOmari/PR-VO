export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-2xl font-black text-white font-english tracking-widest">
            PRÉVO <span className="text-primary opacity-50">|</span> <span className="font-arabic font-bold text-xl">بريفو</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            حيث الفخامه والاحتراف والتطور
          </p>
        </div>
        
        <div className="text-muted-foreground/60 text-sm font-english" dir="ltr">
          &copy; {year} PRÉVO Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
