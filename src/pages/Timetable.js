import React, { Component } from 'react'
import '../styles/MainSubject.css'
import League from '../components/League'


class Timetable extends Component {
  state = {
    rounds: [],
    procesing: true
  }

  componentDidMount() {
    fetch('data/league.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          rounds: data.rounds,
          procesing: false
        })
      })
  }
  render() {
    const { rounds, procesing, } = this.state
    return !procesing ? (
      <div>
        {rounds.map(element => (
          <League key={element.name} matches={element.name} />
        ))}
      </div>
    ) : (
        'Trwa ładowanie'
      )
  }
}
export default Timetable;