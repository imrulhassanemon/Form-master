import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../brother/Brother';

const Dad = () => {
    return (
        <div>
            <h2>DAD</h2>

            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Dad;