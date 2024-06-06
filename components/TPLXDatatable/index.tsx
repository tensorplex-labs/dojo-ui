import { taskStatus } from '@/hooks/useGetTasks';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import {
  ColumnDef,
  Row,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { Button } from '../Button';

export interface FilterDef {
  filterType: 'global' | 'column';
  columnIdToFilter?: string;
  filterInputType?: 'string' | 'date';
  displayLabel?: string;
}

interface Props {
  canLoad?: boolean;
  loadingState?: boolean;
  data: any[];
  columnDef: ColumnDef<any, any>[];
  filterControlsDef?: FilterDef[];
  dateFilterControlType?: 'past' | 'future' | 'none';
  pageSize?: number;
  headerClassName?: string;
  headerCellClassName?: string;
  styled?: boolean;
  tooltipShowingXofY?: boolean;
  cellsClassName?: string;
  tableClassName?: string;
  defaultColumnSize?: number;
  columnVisibility?: Record<string, boolean>;
  isLoading?: boolean;
  cellRenderer?: (cell: any, cellIndex: number, row: any, rowIndex: number) => React.ReactNode;
  rowRenderer?: (row: any, rowIndex: number, cells: any[]) => React.ReactNode;
}

type ColumnFilter = {
  id: string;
  value: any;
};

type ButtonState = {
  disabled: boolean;
  text: string;
};

const generateBtnState = (row: Row<any>): ButtonState => {
  if (new Date(row.original.expireAt).getTime() < Date.now() || row.original.status === taskStatus.EXPIRED)
    return { disabled: true, text: 'Expired' };

  if (row.original.isCompletedByWorker) return { disabled: true, text: 'Completed' };

  if (row.original.maxResults === row.original.numResults || row.original.status == taskStatus.COMPLETED)
    return { disabled: true, text: 'Filled' };

  return { disabled: false, text: 'Start' };
};

const TPLXDatatable = ({
  isLoading,
  canLoad,
  loadingState,
  data,
  columnDef,
  filterControlsDef,
  pageSize = 10,
  dateFilterControlType,
  headerClassName = '',
  headerCellClassName = '',
  tooltipShowingXofY = true,
  styled = true,
  cellsClassName = '',
  tableClassName = '',
  defaultColumnSize = 150,
  columnVisibility,
  cellRenderer,
  rowRenderer,
  ...props
}: Props) => {
  // State and refs
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  // Table instance
  const table = useReactTable({
    data,
    columns: columnDef,
    state: {
      globalFilter,
      columnFilters,
      columnVisibility,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: pageSize,
        // pageIndex: 0,
      },
    },
  });
  // Assuming you have a maximum number of pagination buttons you want to show
  const maxPageButtons = 5;

  // Calculate the total number of pages
  const pageCount = Math.ceil(table.getPreFilteredRowModel().rows.length / pageSize);

  // Calculate the range of page numbers to display
  const currentPage = table.getState().pagination.pageIndex + 1;
  const halfMaxPageButtons = Math.floor(maxPageButtons / 2);
  let startPage = Math.max(currentPage - halfMaxPageButtons, 1);
  let endPage = Math.min(startPage + maxPageButtons - 1, pageCount);

  // Adjust the range if we're at the start or end
  if (endPage - startPage + 1 < maxPageButtons) {
    if (currentPage <= halfMaxPageButtons) {
      endPage = Math.min(maxPageButtons, pageCount);
    } else {
      startPage = Math.max(pageCount - maxPageButtons + 1, 1);
    }
  }

  // Generate the page numbers to display
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const [taskId, setTaskId] = useState<string>('');
  const router = useRouter(); // Initialize useRouter

  const onStartHandler = (id: string) => {
    setTaskId(id);
    router.push(`/Questions?taskId=${id}`);
  };

  const tableRows = table.getRowModel().rows;

  // Render the UI for your table
  return (
    <div {...props} ref={tableContainerRef} className="flex flex-col gap-4">
      <div className={`overflow-x-auto border-2 border-black bg-[#F8F8F8] shadow-brut-sm`}>
        <table className={`min-w-full ${tableClassName}`}>
          <thead className={`border-b border-black ${FontSpaceMono.className} text-lg font-bold`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="px-[25px] py-[18px]">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`px-4 py-2 text-start text-black ${headerCellClassName} ${
                      header.column.columnDef.header === 'Name'
                        ? 'font-bold'
                        : header.column.columnDef.header === 'Operations'
                          ? 'text-end'
                          : ''
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header !== 'Operations' ? header.column.columnDef.header : ' ',
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {isLoading ? (
            <tbody>
              {[...Array(10)].map((_, i) => (
                <tr key={i}>
                  <td className="px-4 py-2">
                    <div className="h-4 w-1/2 animate-pulse rounded bg-gray-300"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-4 animate-pulse rounded bg-gray-300"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-4 w-1/3 animate-pulse rounded bg-gray-300"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-4 w-1/4 animate-pulse rounded bg-gray-300"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative right-0 flex">
                      <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
                      <div className="justify-right absolute inset-0 flex items-center">
                        {/* <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div> */}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.id} className={`${row.original.bodyRowClassName || ''} border-b-2`}>
                  {row.getVisibleCells().map((cell) =>
                    cell.column.columnDef.header === 'Name' ? (
                      <td
                        key={cell.id}
                        className={`px-4 py-2 text-black ${cellsClassName} capitalize ${FontManrope.className}`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ) : cell.column.columnDef.header === 'Type' ? (
                      <td
                        key={cell.id}
                        className={`px-4 py-2 text-black ${cellsClassName} capitalize ${FontManrope.className}`}
                      >
                        <div className=" w-fit rounded-[64px] bg-[#00B6A6] bg-opacity-[0.22] px-[11px] py-1.5 text-[#00B6A6]">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      </td>
                    ) : // cell.column.columnDef.header === "Yield" ? (
                    //   <td
                    //     key={cell.id}
                    //     className={`px-4 py-2 text-black ${cellsClassName} capitalize ${FontManrope.className}`}
                    //   >
                    //     <div
                    //       className={`${FontManrope.className} text-lg text-black opacity-60 font-bold`}
                    //     >
                    //       {flexRender(
                    //         cell.column.columnDef.cell,
                    //         cell.getContext()
                    //       )}
                    //     </div>
                    //   </td>
                    // ) :
                    cell.column.columnDef.header === 'Expiry' ? (
                      <td
                        key={cell.id}
                        className={`px-4 py-2 text-black ${cellsClassName} capitalize ${FontManrope.className}`}
                      >
                        {new Date(row.original.expireAt).getTime() < Date.now() ? (
                          <div
                            className={`rounded-full px-0.5 text-center ${FontManrope.className} bg-red-500 bg-opacity-50 text-base font-bold text-white`}
                          >
                            {/* {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )} */}
                            Expired
                          </div>
                        ) : (
                          <div className={`${FontManrope.className} text-lg font-bold text-black opacity-60`}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </div>
                        )}
                      </td>
                    ) : cell.column.columnDef.header === 'Slots Filled' ? (
                      <td
                        key={cell.id}
                        className={`px-4 py-2 text-black ${cellsClassName} capitalize ${FontManrope.className}`}
                      >
                        <div className={`${FontManrope.className} text-lg font-bold text-black opacity-60`}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      </td>
                    ) : cell.column.columnDef.header === 'Operations' ? (
                      <td
                        key={cell.id}
                        className={`px-4 py-2 text-black ${cellsClassName} capitalize ${FontManrope.className} flex justify-end`}
                      >
                        <Button
                          disabled={generateBtnState(row).disabled}
                          buttonText={generateBtnState(row).text}
                          className={`text-white disabled:cursor-not-allowed disabled:bg-gray-400`}
                          onClick={() => onStartHandler(row.original.taskId)}
                        />
                      </td>
                    ) : null
                  )}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Pagination */}
      {/* <div className={`flex justify-end items-center gap-2 ${FontSpaceMono.className}`}>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-2 py-1 text-base font-bold rounded-md text-opacity-75 text-black disabled:text-opacity-25"
        >
          Prev
        </button>
        {pageNumbers.map((pageNumber) => {
          const isActive = currentPage === pageNumber;
          return (
            <button
              onClick={() => table.setPageIndex(pageNumber - 1)}
              className={`flex items-center justify-center h-7 w-7 border-2 font-bold bg-[#00B6A6] border-black ${
                isActive
                  ? " text-white"
                  : " bg-opacity-[14%] text-black"
              }`}
              key={`pageControlPages_${pageNumber}`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-2 py-1 text-base font-bold rounded-md text-opacity-75 text-black disabled:text-opacity-25"
        >
          Next
        </button>

      </div> */}
    </div>
  );
};

export default TPLXDatatable;
