import { type Table } from '@tanstack/react-table';

import { DOTS, usePagination } from '@repo/hooks';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@repo/ui';
import { cn } from '@repo/utils';

export interface AppPaginationProps<TData> {
  table: Table<TData>;
}

export function AppPagination<TData>({ table }: AppPaginationProps<TData>) {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;
  const canPrevious = table.getCanPreviousPage();
  const canNext = table.getCanNextPage();

  const { range, setPage, previous, next } = usePagination({
    total: pageCount,
    page: currentPage,
    onChange: (page) => {
      table.setPageIndex(page - 1);
    },
  });

  if (pageCount <= 1) {
    return null;
  }

  return (
    <Pagination className="mt-4 flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(event) => {
              event.preventDefault();
              if (canPrevious) {
                previous();
              }
            }}
            className={cn(!canPrevious && 'pointer-events-none opacity-50')}
            aria-disabled={!canPrevious}
            tabIndex={!canPrevious ? -1 : undefined}
          />
        </PaginationItem>
        {range.map((item, index) =>
          item === DOTS ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink
                href="#"
                isActive={item === currentPage}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(item);
                }}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(event) => {
              event.preventDefault();
              if (canNext) {
                next();
              }
            }}
            className={cn(!canNext && 'pointer-events-none opacity-50')}
            aria-disabled={!canNext}
            tabIndex={!canNext ? -1 : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
