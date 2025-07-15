import CourseCard from "./CourseCard";
// import './CourseList.css'
import styles from "./courseList.module.css"

function CourseList(){

const courses = [
    {id:1, name: "javascript", "description":"this is javascript" },
    {id:2, name: "next", "description":"this is next" },
    {id:3, name: "react", "description":"this is react" }

]

return (
    <>
        {/* <p className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos vitae officia. Tenetur quis, fugiat harum labore, maiores veritatis nam possimus minima facere reprehenderit, mollitia quae magni et? Exercitationem, necessitatibus.</p> */}
        <p className={styles.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos vitae officia. Tenetur quis, fugiat harum labore, maiores veritatis nam possimus minima facere reprehenderit, mollitia quae magni et? Exercitationem, necessitatibus.</p>
        <ul>
            {
            courses.map((course)=><CourseCard key={course.id} data={course}></CourseCard>)
            }
        </ul>
    
    </>
);
}

export default CourseList