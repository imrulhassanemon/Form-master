import React, { useState } from 'react';

const StatefulForm = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        if(!password < 6){
            setError('Password must be at least 6 characters long')
        }else{
            setError('')
            console.log(email)
        console.log(password)
        }

    }

    const onChangeHandler = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }



    

    return (
        
            <div>
            <form onSubmit={onSubmit} >
                <input type="text" name='input1' placeholder="Enter text" />
                <br />
                <input type="email" onChange={onChangeHandler} name='email' placeholder="Enter text" />
                <br />
                <input type="password" onChange={onChangePassword} name='phone3' placeholder="Enter text" />
                <br />
                <button value={'Submit'} type="submit">Submit</button>

                <p>
                    {
                        error &&  <p>please enter at least 6 c character</p>
                    }
                </p>
            </form>
        </div>
    );
};

export default StatefulForm;