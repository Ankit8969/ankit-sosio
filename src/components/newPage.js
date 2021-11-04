import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../styles/newPage.css";

const NewPage = ({ currList }) => {
  const { id } = useParams();
  console.log("give Id " + id);
  const ind = currList.findIndex((data) => data.id === id);

  const { title, desc, start, end } = currList[ind];
  return (
    <div>
      <Link to="/">
        <button className="back-btn">GO BACK</button>
      </Link>
      <article>
        <h3 className="title">{title}</h3>
        <hr />
        <p>{desc}</p>
        <div>
          <span>Starting Date - {start}</span>
          <span>Ending Date - {end}</span>
        </div>
      </article>
    </div>
  );
};

export default NewPage;
