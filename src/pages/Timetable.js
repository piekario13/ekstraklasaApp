import React, { Component } from 'react';
import '../styles/MainSubject.css';
import Queue from '../components/Queue';




class Timetable extends Component {
    state = {
        queues: [],
        procesing: true
    }

    componentDidMount() {
        fetch('data/queues.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    queues: data.queues,
                    procesing: false
                })
            })
    }
    render() {
        const { queues, procesing } = this.state
        return !procesing ? (
            <div>
                {queues.map(element => (
                    <Queue key={element.number} />
                ))}
            </div>
        ) : (
                'Trwa ładowanie'
            )
    }
}



export default Timetable;

// const Timetable = () => {
//     return (
//         <div>
//             <h1>Tu będzie terminarz ekstraklasy </h1>
//         </div>
//     )
// }

// export default Timetable;