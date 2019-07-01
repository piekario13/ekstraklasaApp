import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/MainSubject.css';

const Timetable = () => {
    return (
        <div>
            <Route path="/Timetable" render={() => (
                <h1>Tu będzie terminarz ekstraklasy</h1>
            )} />
        </div>
    )
}

export default Timetable;