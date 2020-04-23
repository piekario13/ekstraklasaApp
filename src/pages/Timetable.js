import React, { Fragment, useState, useEffect } from "react";
import League from "../components/League";

const Timetable = () => {
  const [rounds, setRounds] = useState([]);
  const [procesing, setProcesing] = useState(true);
  useEffect(() => {
    fetch("data/league.json")
      .then((response) => response.json())
      .then((data) => {
        setRounds(data.rounds);
        setProcesing(false);
      });
  }, []);
  return !procesing ? (


    rounds.reverse().map((element, id) => (
      <Fragment key={id}>
        <h1
          style={{
            backgroundColor: "#000",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {element.name}
        </h1>{" "}
        <br />
        <ul>
          <League
            key={element.name}
            name={element.name}
            matches={element.matches}
          />
        </ul>
      </Fragment>
    ))


  ) : (
      "Trwa ładowanie"
    );
};

export default Timetable;
