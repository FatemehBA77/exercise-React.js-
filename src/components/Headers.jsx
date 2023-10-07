const courseStatus = ["All", "Active", "Completed", "UpComming"];

function Hearder() {
  return (
    <div>
      <h1 className="title__header">My Course</h1>
      <div className="course-title">
        {courseStatus.map((s) => (
          <div className="active" key={s}>{s}</div>
        ))}
      </div>
    </div>
  );
}
export default Hearder;
