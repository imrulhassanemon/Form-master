import React from 'react';
import Cousing from '../Cousing/Cousing';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousing name={"Javer"}></Cousing>
                <Cousing name={"Turin"}></Cousing>
            </section>
        </div>
    );
};

export default Aunty;