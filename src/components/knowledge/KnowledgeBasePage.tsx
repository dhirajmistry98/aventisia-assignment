import { useState } from "react";
import { PlusIcon, SearchIcon, NoDataIcon } from "../icons/Icons";
import KnowledgeCard from "./KnowledgeCard";
import Pagination from "./Pagination";
import CreateKnowledgeBaseModal from "./CreateKnowledgeBaseModal";
import { KNOWLEDGE_BASE_ITEMS, type KnowledgeBaseItem } from "../../data/constants";

const KnowledgeBasePage = () => {
  const [items, setItems] = useState<KnowledgeBaseItem[]>(KNOWLEDGE_BASE_ITEMS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleCreate = (data: {
    name: string;
    description: string;
    vectorStore: string;
    llmModel: string;
  }) => {
    const newItem: KnowledgeBaseItem = {
      id: String(Date.now()),
      title: data.name,
      description: data.description || "No description provided.",
      createdOn: new Date().toLocaleDateString("en-GB"),
    };
    setItems((prev) => [newItem, ...prev]);
  };

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginated = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-gray-900 font-semibold text-xl">Knowledge Base</h1>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white hover:border-gray-300 transition-colors">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="text-sm text-gray-700 placeholder-gray-400 outline-none w-44 bg-transparent"
            />
          </div>

          {/* Create New Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <PlusIcon />
            <span>Create New</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((item) => (
              <KnowledgeCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <NoDataIcon />
            <div className="text-center">
              <h3 className="text-gray-900 font-bold text-lg">No Knowledge Bases Found</h3>
              <p className="text-gray-500 text-sm mt-1">Create a new knowledge base to get started.</p>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        totalRows={filtered.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={(rows) => {
          setRowsPerPage(rows);
          setCurrentPage(1);
        }}
      />

      {/* Modal */}
      <CreateKnowledgeBaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  );
};

export default KnowledgeBasePage;