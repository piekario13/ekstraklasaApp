import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/MainSubject.css';

const Contact = () => {
    return (
        <div>
            <Route path="/Contact" render={() => (
                <h1>Tutaj będzie kontakt z twórcą tej apliacji</h1>
            )} />
        </div>
    )
}

export default Contact;