import './App.css'
import SimpleComponent from './Component/simpleComponent/SimpleComponent'
import StatefulForm from '../src/Component/staateFul/statefulForm'
import ResuableForm from './Component/ResuableForm/ResuableForm'
// import RefForm from './Component/RefForm/RefForm'

function App() {

  const handleSignupSubmit = data => {
      console.log('signUp', data)

    }

  const handleUpdateProfail = data => {
    console.log('updateProfail', data)

  }

  return (
    <>
      <h1>Vite + React</h1>
     {/* <SimpleComponent></SimpleComponent> */}
     {/* <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
     <ResuableForm formTitle={'Form Title'} handleSubmit={handleSignupSubmit} >
      <h1>Sign Up</h1>
      <p>Please SignUp Right Now</p>
     </ResuableForm>
     <ResuableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfail} submitBtnText="Update">
      <h1>Update Profail</h1>
      <p>Please Update Your Profile</p>
     </ResuableForm>
    </>
  )
}

export default App
