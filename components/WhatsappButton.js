import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end">
      <a
        href="https://wa.me/525531491808?text=Hola%20quiero%20una%20demo%20de%20Growthsuite"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-4 text-white bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-[30px]" />
      </a>
    </div>
  );
};

export default WhatsappButton;
