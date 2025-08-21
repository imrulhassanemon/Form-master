import React from 'react';

const ResuableForm = ({submitBtnText = 'Submit',  handleSubmit, children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }

    return (
        <div >
            <h5>{children}</h5>
            <form onSubmit={handleLocalSubmit} >
                <input type="text" name='name'  placeholder="Enter text" />
                <br />
                <input type="email"name ='email' placeholder="Enter text" />
                <br />
                <input type="password"name ='password' placeholder="Enter text" />
                <br />
                <input value={submitBtnText} type="submit"></input>
            </form>
        </div>
    );
};

export default ResuableForm;