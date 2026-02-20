import { useState } from "react";
import { Medal } from "lucide-react";
import AchievementModal from "./AchievementModal"; // Pamiętaj o imporcie

interface Props {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export default function AchievementCard({ title, date, description, imageUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 select-none cursor-pointer group flex flex-col justify-between"
      >
        <div className="text-left">
          <div className="flex gap-2">
            <span className="rounded-full h-fit bg-orange-100 p-2 group-hover:bg-orange-200 transition-colors">
              <Medal size={16} className="text-orange-700" />
            </span>
            <div className="flex flex-col mb-2 truncate">
              <span className="text-orange-900 font-bold text-md leading-tight truncate">{title}</span>
              <span className="text-sm text-orange-600 font-medium mt-1">{date}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>
        </div>

        <div className="text-xs text-orange-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Kliknij, aby zobaczyć szczegóły
        </div>
      </div>

      <AchievementModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={{ title, date, description, imageUrl }}
      />
    </>
  );
}