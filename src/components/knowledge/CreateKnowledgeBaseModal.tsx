import { useState } from "react";
import { CloseIcon } from "../icons/Icons";
import { VECTOR_STORE_OPTIONS, LLM_EMBEDDING_OPTIONS } from "../../data/constants";

interface CreateKnowledgeBaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: { name: string; description: string; vectorStore: string; llmModel: string }) => void;
}

const CreateKnowledgeBaseModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateKnowledgeBaseModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vectorStore, setVectorStore] = useState(VECTOR_STORE_OPTIONS[0]);
  const [llmModel, setLlmModel] = useState(LLM_EMBEDDING_OPTIONS[0]);

  const handleCreate = () => {
    if (!name.trim()) return;
    onCreate({ name, description, vectorStore, llmModel });
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-[100] transition-opacity duration-300 pointer-events-none ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Drawer panel: Exact match for width (380px) and box-shadow from design */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-[380px] bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.12)] z-[101] flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-start justify-between p-5 border-b border-[#f3f4f6]">
          <div>
            <h2 className="text-[15px] font-bold text-[#111827] leading-[1.3]">Create New Knowledge Base</h2>
            <p className="text-[11px] text-[#6b7280] mt-1 font-medium italic">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button onClick={onClose} className="p-1 rounded-md text-[#9ca3af] hover:text-[#111827] transition-colors">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#374151]">
              Name (Cannot be edited later)<span className="text-[#ef4444] ml-0.5">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#e5e7eb] rounded-lg px-3 py-2 text-[13px] text-[#1f2937] placeholder-[#9ca3af] outline-none transition-all focus:border-[#4F46E5] shadow-sm"
            />
          </div>

          {/* Description Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#374151]">Description</label>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="border border-[#e5e7eb] rounded-lg px-3 py-2 text-[13px] text-[#1f2937] placeholder-[#9ca3af] outline-none transition-all focus:border-[#4F46E5] shadow-sm resize-none"
            />
          </div>

          {/* Select fields - custom styled to match design */}
          {[
            { label: "Vector Store", options: VECTOR_STORE_OPTIONS, val: vectorStore, set: setVectorStore },
            { label: "LLM Embedding Model", options: LLM_EMBEDDING_OPTIONS, val: llmModel, set: setLlmModel },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#374151]">
                {field.label}<span className="text-[#ef4444] ml-0.5">*</span>
              </label>
              <select
                value={field.val}
                onChange={(e) => field.set(e.target.value)}
                className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2 text-[13px] text-[#1f2937] bg-white cursor-pointer outline-none transition-all hover:border-[#d1d5db] focus:border-[#4F46E5] shadow-sm appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
              >
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="p-5 border-t border-[#f3f4f6] flex justify-end">
          <button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="bg-[#4F46E5] hover:bg-[#4338CA] disabled:bg-[#4F46E5]/50 text-white text-[13px] font-bold px-6 py-2 rounded-lg transition-all shadow-sm"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateKnowledgeBaseModal;