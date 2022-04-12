import React, { FC } from "react";

import Link from "next/link";

interface PaginationProps {
  totalPages: any;
  currentPage: any;
  prevDisabled: any;
  nextDisabled: any;
}
const Pagination: FC<PaginationProps> = (props) => {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;

  const prevPageUrl =
    currentPage === "2"
      ? "/blog"
      : `/blog/page/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`;

  return (
    <ol>
      <li>
        {prevDisabled && <span>Previous page</span>}
        {!prevDisabled && (
          <Link href={prevPageUrl}>
            <a>Previous page</a>
          </Link>
        )}
      </li>
      <li>
        Page {currentPage} of {totalPages}
      </li>
      <li>
        {nextDisabled && <span>Next page</span>}
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <a>Next page</a>
          </Link>
        )}
      </li>
    </ol>
  );
};
export default Pagination;
