import React from "react";
import "../styles/League.css";
import styled from "styled-components";

const FirstTeam = styled.span`
  color: red
`


const League = ({ matches }) =>
  matches.map((match, id) => (
    <li key={id}>
      <FirstTeam>{match.team1.name}</FirstTeam> - <span className="second-team">{match.team2.name} </span>{match.team1.score}:
      {match.team2.score}
    </li>
  ));

export default League;
