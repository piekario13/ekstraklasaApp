import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Rules.css';

const Rules = () => {
    return (
        <div>
            <Route path="/Rules" render={() => (
                <h4>Nullam at consequat wisi. Suspendisse commodo magna, gravida massa nisl, sollicitudin id, elit. Proin nonummy porttitor odio. Donec sollicitudin mi. Aliquam interdum faucibus, fermentum sed, aliquam ac, felis. Cum sociis natoque penatibus et nisl. Nullam volutpat, velit vitae lorem nec ante. Fusce sed libero. Cum sociis natoque penatibus et turpis. Lorem ipsum scelerisque lorem tempus dictum sem. Nam vestibulum. Nunc gravida. Pellentesque at velit vel neque tellus, volutpat at, pretium wisi. Donec faucibus gravida elit. Cum sociis natoque penatibus et malesuada quis, massa. Nam eu sem fringilla mollis. Proin scelerisque viverra. Cras ac turpis egestas. Mauris pellentesque, wisi. Vivamus nibh.</h4>
            )} />
        </div>
    )
}

export default Rules;