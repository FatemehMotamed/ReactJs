
import './App.css'
import FirstComponent from './FirstComponent'
import Header from './Header'
import CourseList from './CourseList'
import Banner from './Banner'
import Counter from './Counter'
import Form from './Form'
function App() {
const name="fatemeh"

  return (
   
    <>
    {/* <Form></Form> */}
    {/* <Counter></Counter> */}
    {/* <Header></Header> */}

    <Banner title="courses" description="website" number={5000} name={name}></Banner>

    
    {/* <div>main css</div>
    <FirstComponent></FirstComponent>
    <p>{4*5}</p> */}

    {/* <h3>Cources</h3>
    <CourseList></CourseList> */}
    </>

  )
}

export default App
