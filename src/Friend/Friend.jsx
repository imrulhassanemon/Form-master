import React, { useContext } from 'react';
import { AssetContex } from '../Component/Grandpa/Grandpa';

const Friend = () => {

    const gift = useContext(AssetContex)

    return (
        <div>
            Friend
            <p>Gift: {gift}</p>
        </div>
    );
};

export default Friend;