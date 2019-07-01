import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/MainSubject.css';

const Ranking = () => {
    return (
        <div>
            <Route path="/Ranking" render={() => (
                <h1>Tu będzie ranking typerów</h1>
            )} />
        </div>
    )
}

export default Ranking;