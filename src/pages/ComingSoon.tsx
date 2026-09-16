import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  subtitle: string;
}

export function ComingSoon({ title, subtitle }: ComingSoonProps) {
  const whatsappLink = `https://wa.me/919667222879?text=Hello,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(title)}.`;

  return (
    <div className="min-h-[80vh] bg-[#fcfbf9] flex flex-col items-center justify-center relative px-6 text-center pt-24">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#c5a059]/5 rounded-b-[40%]"></div>
      
      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#c5a059] font-bold block mb-4">
          Coming Soon
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-[#333333] font-normal mb-6 leading-tight">
          {title}
        </h1>
        <p className="font-sans text-[14px] text-[#777] font-light leading-relaxed mb-10 max-w-md mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full bg-[#c5a059] text-white rounded-full px-8 py-3.5 font-sans text-[12px] tracking-widest uppercase font-bold hover:bg-[#a08246] transition-colors shadow-md flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </button>
          </a>
          
          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full border-[1.5px] border-[#c5a059] text-[#c5a059] rounded-full px-8 py-3.5 font-sans text-[12px] tracking-widest uppercase font-bold hover:bg-[#c5a059] hover:text-white transition-colors flex items-center justify-center gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
