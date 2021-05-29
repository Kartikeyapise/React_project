import React, { useState } from "react";

function Pagination(props) {
  if (props.numberOfPages <= 1) return null;
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {/* <li className="page-item disabled">
          <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
            Previous
          </a>
        </li> */}
        {getNumberOfPagesJsx(props)}
      </ul>
    </nav>
  );

  function getNumberOfPagesJsx() {
    let marr = [];
    // console.log(props.numberOfPages);
    for (let i = 1; i <= props.numberOfPages; i++) {
      marr.push(
        <li
          key={"paginationNo" + i}
          className={i === props.pageNo ? "page-item active" : "page-item"}
        >
          <a
            href="#"
            className="page-link"
            onClick={() => props.handlePagination(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    let nextpage =
      props.pageNo + 1 > props.numberOfPages ? props.pageNo : props.pageNo + 1;
    marr.push(
      <li key={"paginationNoNext"} className="page-item">
        <a
          className="page-link"
          href="#"
          onClick={() => props.handlePagination(nextpage)}
        >
          Next
        </a>
      </li>
    );
    return marr;
  }
}

export default Pagination;
