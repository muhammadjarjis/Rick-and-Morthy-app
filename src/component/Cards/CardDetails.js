import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="card shadow border border-dark">
            <div className="row g-0">
              <div className="col-lg-5 col-md-6 col-sm-12 ">
                <img src={image} alt="" className="img-fluid rounded w-100 h-100" />
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12">
                <div className="card-body">
                  <h3 className="card-title">{name}</h3>
                  <div className="d-flex flex-column mb-2">
                    <small className="text-muted">Status :</small>
                    <h6 className="card-text"> {status}</h6>
                  </div>
                  <div className="d-flex flex-column mb-2">
                    <small className="text-muted">Species :</small>
                    <h6 className="card-text"> {species}</h6>
                  </div>
                  <div className="d-flex flex-column mb-2">
                    <small className="text-muted">Gender :</small>
                    <h6 className="card-text"> {gender}</h6>
                  </div>
                  <div className="d-flex flex-column mb-2">
                    <small className="text-muted">Type :</small>
                    <h6 className="card-text"> {type === "" ? "Unknown" : type}</h6>
                  </div>
                  <div className="d-flex flex-column mb-2">
                    <small className="text-muted">Origin :</small>
                    <h6 className="card-text"> {origin?.name}</h6>
                  </div>
                  <div className="d-flex flex-column mb-2">
                    <small className="text-muted">Location :</small>
                    <h6 className="card-text"> {location?.name}</h6>
                  </div>
                  <div className="col-3 mx-auto">
                    <Link to="/" className="btn btn-outline-dark">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
