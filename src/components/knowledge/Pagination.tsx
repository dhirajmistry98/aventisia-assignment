import {
  PaginationFirstIcon,
  PaginationLastIcon,
  PaginationNextIcon,
  PaginationPrevIcon,
  ChevronDownIcon,
} from "../icons/Icons";
import { ROWS_PER_PAGE_OPTIONS } from "../../data/constants";

interface PaginationProps {
  totalRows: number;
  rowsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

const Pagination = ({
  totalRows,
  rowsPerPage,
  currentPage,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const btnBase =
    "flex items-center justify-center w-7 h-7 rounded border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm text-black">
      {/* Left: Row count */}
      <span className="text-[13px] font-bold text-black">
        {totalRows} row{totalRows !== 1 ? "s" : ""}
      </span>

      {/* Right controls */}
      <div className="flex items-center gap-6">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-bold text-black">Rows per page</span>

          <div className="relative">
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
              className="appearance-none border border-gray-200 rounded px-2 pr-6 py-[2px] text-[12px] text-black bg-white focus:outline-none"
            >
              {ROWS_PER_PAGE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <ChevronDownIcon />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-[1px] h-4 bg-gray-200 mx-1" />

        {/* Page info */}
        <span className="text-[13px] font-bold text-black">
          page {currentPage} of {totalPages}
        </span>

        {/* Buttons */}
        <div className="flex items-center gap-1">
          <button
            className={btnBase}
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            <PaginationFirstIcon />
          </button>

          <button
            className={btnBase}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <PaginationPrevIcon />
          </button>

          <button
            className={btnBase}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <PaginationNextIcon />
          </button>

          <button
            className={btnBase}
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <PaginationLastIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;