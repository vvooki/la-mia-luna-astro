import { createPortal } from "react-dom";
import { Medal, X } from "lucide-react";
import { useEffect, useState } from "react";

interface AchievementData {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AchievementData;
}

export default function AchievementModal({ isOpen, onClose, data }: ModalProps) {
  // Hack dla SSR (np. Astro/Next.js), żeby uniknąć błędu "document is not defined"
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Opcjonalnie: blokowanie scrollowania strony pod spodem gdy modal jest otwarty
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Zapobiega zamykaniu przy kliknięciu w środek
      >
        {/* Przycisk zamknięcia */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 bg-white/80 hover:bg-white rounded-full text-gray-500 hover:text-gray-900 transition-colors z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Treść */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-orange-100 p-3">
              <Medal size={24} className="text-orange-700" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{data.title}</h3>
              <span className="text-orange-600 font-medium">{data.date}</span>
            </div>
          </div>

          <div className="prose prose-sm text-gray-600">
            <p className="text-base leading-relaxed">{data.description}</p>
          </div>
        </div>

        {/* Zdjęcie */}
        {data.imageUrl && (
          <div className="w-full p-2">
            <img
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}