import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 px-4 md:px-6">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="bg-green-500/20 backdrop-blur-md hover:bg-green-500/40 text-white p-4 rounded-md shadow-lg transition-all duration-300 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "2s" }}
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Email */}
      <a
        href="mailto:youremail@example.com"
        title="Send us an Email"
        className="bg-blue-500/20 backdrop-blur-md hover:bg-blue-500/40 text-white p-4 rounded-md shadow-lg transition-all duration-300 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "2s" }}
      >
        <FaEnvelope size={28} />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/memoressa.media/" 
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on Instagram"
        className="bg-pink-500/20 backdrop-blur-md hover:bg-pink-500/40 text-white p-4 rounded-md shadow-lg transition-all duration-300 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "2s" }}
      >
        <FaInstagram size={28} />
      </a>
    </div>
  );
}
