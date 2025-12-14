import React, { useState } from "react";
import WhatsAppPopup from "./WhatsAppPopup";
import "./WhatsAppButton.css";

// ✅ Import image as variable
import whatsappIcon from "../assets/images/whast.webp";

function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="wa-floating-btn" onClick={() => setOpen(true)}>
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          width="60"
          height="60"
        />
      </div>

      {open && <WhatsAppPopup onClose={() => setOpen(false)} />}
    </>
  );
}

export default WhatsAppButton;
