import React, { useRef } from 'react';

const RefForm = () => {

    const ref = useRef('');
    const emailRef = useRef(null)
    const passwordRef = useRef(undefined)
    const handleRef = (e) => {
        e.preventDefault()
        console.log(ref.current.value);  
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);       
    }

    return (
        <div>
            
            <form onSubmit={handleRef}>
                <input type="text" ref={ref} name='input1' placeholder="Enter text" />
                <br />
                <input ref={emailRef} type="email"name ='input2' placeholder="Enter text" />
                <br />
                <input ref={passwordRef} type="password" name='phone3' placeholder="Enter text" />
                <br />
                <button value={'Submit'} type="submit">Submit</button> </form>
        </div>
    );
};

export default RefForm;