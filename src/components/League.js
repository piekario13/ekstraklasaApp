import React from 'react'

const League = ({ matches }) => matches.map((match, id) => (<li key={id}>
    {match.team1.name} - {match.team2.name}
    &nbsp;Wynik: {match.team1.score}:{match.team2.score}
</li>))

export default League;