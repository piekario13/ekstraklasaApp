import React, { Fragment, useState, useEffect } from 'react'
import '../styles/MainSubject.css'
import League from '../components/League'

const Timetable = () => {
  const [rounds, setRounds] = useState([])
  const [procesing, setProcesing] = useState(true)
  useEffect(() => {
    fetch('data/league.json')
      .then(response => response.json())
      .then(data => {
        setRounds(data.rounds)
        setProcesing(false)
      })
  }, [])
  return !procesing ? (
    <ul>
      {rounds.map((element, id) => (
        <Fragment key={id} >
          <b>Kolejka: {element.name}</b> <br />
          <League key={element.name} name={element.name} matches={element.matches} />
        </Fragment>
      ))
      }
    </ul>
  ) : (
      'Trwa ładowanie'
    )
}

export default Timetable;