import React, { Component } from 'react'
import '../styles/MainSubject.css'
import League from '../components/League'


class Timetable extends Component {
  state = {
    league: [],
    procesing: true
  }

  componentDidMount() {
    fetch('data/league.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          league: data.league,
          procesing: false
        })
      })
  }
  render() {
    const { league, procesing } = this.state
    return !procesing ? (
      <ul>
        {league.map(element => (
          <League key={league} league={element.league} />
        ))}
      </ul>
    ) : (
        'Trwa ładowanie'
      )
  }
}
export default Timetable;