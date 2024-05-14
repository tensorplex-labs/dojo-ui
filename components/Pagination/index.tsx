import { FontSpaceMono } from "@/utils/typography";
import { useEffect, useState } from "react";

interface PaginationProps {
    totalPages: number;
    handlePageChange: (page: number) => void;
}

export function Pagination({ totalPages, handlePageChange }: PaginationProps) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [displayedPages, setDisplayedPages] = useState<(number | string)[]>([]);

    useEffect(() => {
        const getPageNumbers = () => {
            const maxVisiblePages = 5;
            const middlePage = Math.floor(maxVisiblePages / 2);
    
            if (totalPages <= maxVisiblePages) {
                return Array.from({ length: totalPages }, (_, i) => i + 1);
            }
    
            if (currentPage <= middlePage + 1) {
                return [
                    ...Array.from({ length: maxVisiblePages - 1 }, (_, i) => i + 1),
                    "...",
                    totalPages,
                ];
            }
    
            if (currentPage >= totalPages - middlePage) {
                return [
                    1,
                    "...",
                    ...Array.from({ length: maxVisiblePages - 1 }, (_, i) => totalPages - maxVisiblePages + 2 + i),
                ];
            }
    
            return [
                1,
                "...",
                ...Array.from({ length: maxVisiblePages - 2 }, (_, i) => currentPage - middlePage + 1 + i),
                "...",
                totalPages,
            ];
        };
    
        setDisplayedPages(getPageNumbers());
    }, [currentPage, totalPages]);
    return (
        <div className={`flex justify-end items-center gap-2 ${FontSpaceMono.className}`}>
            <button
                onClick={() => { handlePageChange(1); setCurrentPage(1); }}
                disabled={currentPage === 1}
                className="px-2 py-1 text-base font-bold rounded-md text-opacity-75 text-black disabled:text-opacity-25"
            >
                First
            </button>
            {displayedPages.map((pageNumber, index) => {
                if (pageNumber === "...") {
                    return <span key={`ellipsis_${index}`} className="mx-1 text-black font-bold">...</span>;
                }
                const isActive = currentPage === pageNumber;
                return (
                    <button
                        key={`pageControlPages_${pageNumber}`}
                        onClick={() => {
                            handlePageChange(pageNumber as number);
                            setCurrentPage(pageNumber as number);
                        }}
                        className={`flex items-center justify-center h-7 w-7 border-2 font-bold bg-[#00B6A6] border-black ${isActive ? "text-white" : "bg-opacity-[14%] text-black"}`}
                    >
                        {pageNumber}
                    </button>
                );
            })}
             <button
                onClick={() => { handlePageChange(totalPages); setCurrentPage(totalPages); }}
                disabled={currentPage === totalPages}
                className="px-2 py-1 text-base font-bold rounded-md text-opacity-75 text-black disabled:text-opacity-25"
            >
                Last
            </button>
        </div>
    );
}