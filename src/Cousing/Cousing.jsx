import React, { useContext } from 'react';
import { AssetContex } from '../Component/Grandpa/Grandpa';
import Friend from '../Friend/Friend';

const Cousing = ({name}) => {

    const gift = useContext(AssetContex)

    return (
        <div>
            <h1 >Cousing</h1>
            <p className='text-2xl font-bold' >{name}</p>
            <p>Gift: {gift}</p>
            {
                name == 'Nadia' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousing;