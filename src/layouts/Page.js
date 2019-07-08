import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainSubject from '../pages/MainSubject';
import Timetable from '../pages/Timetable';
import Ranking from '../pages/Ranking';
import Rules from '../pages/Rules';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainSubject} />
                <Route path="/timetable" component={Timetable} />
                <Route path="/ranking" component={Ranking} />
                <Route path="/rules" component={Rules} />
                <Route path="/contact" component={Contact} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    );
}

export default Page;