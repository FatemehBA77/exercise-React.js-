import CourseCard from "./CourseCard";
const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lesson with the most popular teachers",
    imgUrl: "/public/assets/image/5.jpg",
    rate: "4.5",
    tags: ["languages"],
    start: "2023-10-10T20:46:30.615Z",
    status: "completed",
  },
  {
    id: 2,
    title: "React.js",
    description: "language lesson with the most popular teachers",
    imgUrl: "/public/assets/image/1.jpg",
    rate: "6.5",
    tags: ["webDesign"],
    start: "2020-11-09T20:46:30.615Z",
    status: "UpComming",
  },
  {
    id: 3,
    title: "Vue.js",
    description: "language lesson with the most popular teachers",
    imgUrl: "/public/assets/image/3.jpg",
    rate: "7.5",
    tags: ["UI/Design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "completed",
  },
  {
    id: 4,
    title: "UIUX",
    description: "language lesson with the most popular teachers",
    imgUrl: "/public/assets/image/2.jpg",
    rate: "5",
    tags: ["languages"],
    start: "2022-09-24T20:46:30.615Z",
    status: "Active",
  },
];

function CourseList() {
  return (
    <div className="course_list">
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
}
export default CourseList;
