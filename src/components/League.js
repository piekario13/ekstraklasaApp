import React from "react";
import "../styles/League.css";

const League = ({ matches }) =>
  matches.map((match, id) => (
    <li key={id}>
      {match.team1.name} - {match.team2.name} {match.team1.score}:
      {match.team2.score}
    </li>
  ));

export default League;
