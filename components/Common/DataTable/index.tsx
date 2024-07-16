import { ColumnFilter, DatatableProps } from '@/types/QuestionPageTypes';
import { generateBtnState } from '@/utils/generateBtnState';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import LoadingSkeleton from '../LoadingSkeleton';

const DataTable = ({
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
}: DatatableProps) => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  const tableContainerRef = useRef<HTMLDivElement>(null);

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

  const maxPageButtons = 5;

  const pageCount = Math.ceil(table.getPreFilteredRowModel().rows.length / pageSize);

  const currentPage = table.getState().pagination.pageIndex + 1;
  const halfMaxPageButtons = Math.floor(maxPageButtons / 2);
  let startPage = Math.max(currentPage - halfMaxPageButtons, 1);
  let endPage = Math.min(startPage + maxPageButtons - 1, pageCount);

  if (endPage - startPage + 1 < maxPageButtons) {
    if (currentPage <= halfMaxPageButtons) {
      endPage = Math.min(maxPageButtons, pageCount);
    } else {
      startPage = Math.max(pageCount - maxPageButtons + 1, 1);
    }
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const [taskId, setTaskId] = useState<string>('');
  const router = useRouter();

  const onStartHandler = (id: string) => {
    setTaskId(id);
    router.push(`/Questions?taskId=${id}`);
  };

  const tableRows = table.getRowModel().rows;
  useEffect(() => {
    tableRows.forEach((row) => {
      const criteriaCount = row.original.taskData.criteria;
      console.log(row.id, { criteriaCount });
    });
  }, [data]);

  return (
    <div {...props} ref={tableContainerRef} className="flex flex-col gap-4">
      <div className={`overflow-x-auto border-2 border-black bg-card-background shadow-brut-sm`}>
        <table className={`min-w-full ${tableClassName}`}>
          <thead className={`border-b border-black ${FontSpaceMono.className} text-lg font-bold`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="px-[25px] py-[18px]">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`px-4 py-2 text-start uppercase text-black ${headerCellClassName} text-base ${
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
              <LoadingSkeleton />
            </tbody>
          ) : tableRows.length === 0 ? (
            <>
              {[...Array(8)].map((_, i) => (
                <tr key={i}>
                  <td colSpan={columnDef.length} className="px-4 py-2 text-center">
                    {i === 3 && (
                      <div className={`${FontManrope.className} text-lg font-bold text-black opacity-60`}>
                        No Data Available
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </>
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
                        <div className=" w-fit rounded-[64px] bg-primary bg-opacity-[0.22] px-[11px] py-1.5 text-sm font-semibold text-primary">
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
                        className={`flex px-4 py-2 text-black ${cellsClassName} capitalize ${FontManrope.className}`}
                      >
                        {new Date(row.original.expireAt).getTime() < Date.now() ? (
                          <div
                            className={` rounded-2xl  px-[10px] py-[5px] text-center ${FontManrope.className} bg-opacity/20 bg-red-400 text-sm font-semibold text-red-600 text-opacity-100`}
                          >
                            Expired
                          </div>
                        ) : (
                          <div
                            className={`${FontManrope.className} text-center text-lg font-bold text-black opacity-60`}
                          >
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
                          className={`h-[40px] w-[113px] text-white disabled:cursor-not-allowed disabled:bg-gray-400`}
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
    </div>
  );
};

export default DataTable;
