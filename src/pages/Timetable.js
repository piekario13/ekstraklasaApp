import React, { Component } from 'react';
import '../styles/MainSubject.css';


const Queue = () => (<li>sadsdasdsadasd</li>)

class Timetable extends Component {
    state = {
        queues: []
    }

    componentDidMount() {
        fetch('data/queues.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    queues: data.queues
                })
            })
    }
    render() {
        const queues = this.state.queues.map(element => (
            <Queue key={element.id} />
        ))
        return (
            <ul>
                {queues}
            </ul>
        );
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