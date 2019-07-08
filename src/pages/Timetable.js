import React, { Component } from 'react';
import '../styles/MainSubject.css';


class Timetable extends Component {
    state = {
        words: []
    }

    componentDidMount() {
        fetch('data/words.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    words: data.words
                })
            })
    }
    render() {
        return (
            <div>
                sdfds
            </div>
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