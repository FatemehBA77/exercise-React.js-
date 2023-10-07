function CourseCard({ course }) {
  // const { course } = props;
  // console.log(course);
  // console.log(props.course);
  return (
    <div className="course_item">
      <div className="course_img">
        <img src={course.imgUrl} alt="" />
      </div>
      <div className="courseitem_details">
        <div className="courseitem_body">
          <CourseCardBody
            description={course.description}
            title={course.title}
            tag={course.tags[0]}
            start={course.start}
          />
          <CourseCardFooter course={course} />
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
function CourseCardBody({ description, title, tag, start }) {
  return (
    <div className="description_course">
      <h2 title={title} className="title">
        {title}
      </h2>
      <p title={description} className="desc">
        {description}
      </p>
      <div>
        <button className="btn-course">{tag}</button>
      </div>
      <p className="date-desc">
        <span>
          {new Date(start).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            day: "numeric",
          })}
        </span>
      </p>
    </div>
  );
}

function CourseCardFooter({ course }) {
  return (
    <div className="course-rate">
      <div className="rate">
        <span>⭐ {course.rate}</span>
      </div>
      <div>
        <button
          className={`btn ${
            course.status === "Active"
              ? "primary"
              : course.status === "UpComming"
              ? "danger"
              : "secondary"
          }`}
        >
          {course.status}
        </button>
      </div>
    </div>
  );
}
