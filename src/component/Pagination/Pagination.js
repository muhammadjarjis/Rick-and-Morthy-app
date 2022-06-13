import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ info, pageNumber, setPageNumber }) {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextClassName="btn btn-outline-primary"
      previousClassName="btn btn-outline-primary"
      previousLabel="Prev"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    />
  );
}

export default Pagination;
