import React, { FC } from "react";
import styled from "styled-components";
import { colors, spacing } from "../../../styles/constants";

import Link from "next/link";

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Spartan", sans-serif;
  padding: ${spacing.mobilePageGutter};

  @media (min-width: 1280px) {
    padding: 0px;
    padding-top: 50px;
  }
  .disabled {
    pointer-events: none;
  }

  a {
    color: white;
    background-color: ${colors.bubblegumPink};
    border-radius: 50px;
    padding: 10px 25px;
    display: inline-block;
    :hover {
      transform: scale(1.2);
    }
  }
`;
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
    <Root>
      <li>
        <Link href={prevDisabled ? "" : prevPageUrl}>
          <a className={prevDisabled ? "disabled" : ""}>Previous page</a>
        </Link>
      </li>
      {/* <li>
        Page {currentPage} of {totalPages}
      </li> */}
      <li>
        <Link href={nextDisabled ? "" : nextPageUrl}>
          <a className={nextDisabled ? "disabled" : ""}>Next page</a>
        </Link>
      </li>
    </Root>
  );
};
export default Pagination;
