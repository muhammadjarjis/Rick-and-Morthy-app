import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

function Cards({ results, page }) {
  let display;

  if (results) {
    display = results.map((el) => {
      let { id, name, image, species, status } = el;
      return (
        <div key={id} className="col-lg-3 col-md-6 col-sm-12 position-relative ">
          <div className={`${styles.cards} mb-4 d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div className="content mb-4 text-center">
              <div className="fs-4 fw-bold">{name}</div>
              <div className="">
                <div className="fs-6">{species}</div>
              </div>
              <Link to={`${page}${id}`} type="button" className="btn btn-outline-primary btn-sm">
                Details
              </Link>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return <div className={`${styles.badge} badge text-bg-danger position-absolute `}>{status}</div>;
            } else if (status === "Alive") {
              return <div className={`${styles.badge} badge text-bg-success position-absolute `}>{status}</div>;
            } else {
              return <div className={`${styles.badge} badge text-bg-secondary position-absolute `}>{status}</div>;
            }
          })()}
        </div>
      );
    });
  } else {
    display = "no character found :(";
  }

  return <>{display}</>;
}

export default Cards;
