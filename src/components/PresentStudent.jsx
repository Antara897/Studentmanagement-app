
function PresentStudent(props){

    return (
        <div className="col-12 col-md-4">
         <div className="present-students" >
            <h2>
                Present Students
            </h2>
            <ol>
                {props.students.filter(item => item.isPresent === true).map(student => (
                    <li className="list">
                        <span>{student.name}</span>
                        <button className="btn btn-primary mx-0" onClick={() => props.toggleHandler(student.id)}>Accidentally Added</button>
                    </li>
                ))}
            </ol>
       </div>
      </div>
    )
}
export default PresentStudent;