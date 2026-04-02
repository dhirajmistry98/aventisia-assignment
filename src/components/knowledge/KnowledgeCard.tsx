import { useState } from "react";
import { DotsIcon } from "../icons/Icons";
import type { KnowledgeBaseItem } from "../../data/constants";

interface KnowledgeCardProps {
  item: KnowledgeBaseItem;
}

const KnowledgeCard = ({ item }: KnowledgeCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md hover:border-indigo-200 transition-all duration-200 relative">
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-gray-900 font-semibold text-base">{item.title}</h3>
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-100"
          >
            <DotsIcon />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Edit</button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Duplicate</button>
              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">Delete</button>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.description}</p>

      {/* Footer */}
      <div className="mt-auto pt-3 border-t border-gray-100">
        <span className="text-gray-400 text-xs">
          Created On: <span className="text-gray-500 font-medium">{item.createdOn}</span>
        </span>
      </div>
    </div>
  );
};

export default KnowledgeCard;