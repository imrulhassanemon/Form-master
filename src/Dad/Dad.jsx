import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../brother/Brother';
import Cousing from '../Cousing/Cousing';
import Sister from '../sister/Sister';

const Dad = () => {
    return (
        <div>
            <h2>DAD</h2>

            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;