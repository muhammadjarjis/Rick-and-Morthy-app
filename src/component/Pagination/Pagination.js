import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ info, pageNumber, setPageNumber }) {
  <style jsx>
    {`
      @media (max-width: 578px) {
        .pagination {
          font-size: 12px;
        }
        .next,
        .prev {
          display: none;
        }
      }
      @media (max-width: 768px) {
        .pagination {
          font-size: 14px;
        }
      }
    `}
  </style>;
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextClassName="btn btn-outline-primary next"
      previousClassName="btn btn-outline-primary prev"
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
