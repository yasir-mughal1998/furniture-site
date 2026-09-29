import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/Icons";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-3 rounded-full bg-[#1f7a4d] py-3.5 pr-3.5 pl-3.5 text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-luxe hover:bg-[#186540] hover:pl-5 sm:right-8 sm:bottom-8"
    >
      <span className="max-w-0 overflow-hidden text-[11px] font-medium whitespace-nowrap uppercase tracking-[0.18em] transition-all duration-500 ease-luxe group-hover:max-w-40">
        Chat with us
      </span>
      <WhatsAppIcon className="size-6" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#1f7a4d]/30 [animation-duration:3s]" />
    </a>
  );
}
