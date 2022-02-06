

function Form(props){

    const addStudent = (event, name) => {
        event.preventDefault()
        if(name) {
            const newStudent = {
                id: Date.now(),
                name
            }
            props.setStudents([newStudent, ...props.students]);
            props.setStudentName("")
        } else {
            alert("Please provide a valid student name")
        }
    }

    const updateHandler = (event, name) => {
        event.preventDefault()
        if(name) {
            props.editableStudent.name = name || props.editableStudent.name;
            props.setStudentName("");
            props.setIsEditable(false);
            props.setEditableStudent(null)
        } else {
            alert("Please provide a valid student name")
        }
    }

    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-12">  
        <form className="text-center mt-5"> 
        <input className="input w-50" value={props.studentName} onChange={(e) => props.setStudentName(e.target.value)} type="text" name="student-name" placeholder="Enter a student name"/>
        <button className="btn btn-primary py-2 mx-2" onClick={(e) => props.isEditable ? updateHandler(e, props.studentName) : addStudent(e, props.studentName)} >
            {props.isEditable ? "Update Student" : "Add Student"}
        </button>
        </form>
        </div>
      </div>
     </div> 
    )
}
export default Form;