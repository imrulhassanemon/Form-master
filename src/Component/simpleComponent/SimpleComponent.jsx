
const SimpleComponent = () => {

   const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.input1.value)
        console.log(e.target.input2.value)
        console.log(e.target.phone3.value)
       console.log("form are subbmitted")
   }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='input1' placeholder="Enter text" />
                <br />
                <input type="text"name ='input2' placeholder="Enter text" />
                <br />
                <input type="text"name ='phone3' placeholder="Enter text" />
                <br />
                <button value={'Submit'} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleComponent;