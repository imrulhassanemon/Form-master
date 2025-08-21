import React from 'react';
import Dad from '../../Dad/Dad';
import Uncle from '../../Uncle/Uncle';
import Aunty from '../../Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h4>grandpa</h4>
            <section className='grandpa flex items-center justify-center'> 
                <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;