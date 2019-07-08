import React from 'react';
import PrevQueue from '../pages/PrevQueue';
import Table from '../pages/Table';
import ClubZero from '../pages/ClubZero';

const Page = () => {
    return (
        <div>
            {<Table />}
            {<PrevQueue />}
            {<ClubZero />}
        </div>
    );
}

export default Page;