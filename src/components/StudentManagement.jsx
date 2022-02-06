import Form from "./Form";
import StudentSection from "./StudentSection";
import {useState} from "react";


function StudentManagement(props){
   
    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);
    
    return (
        <div className="container-fluid">
        <Form 
            students = {students}
            setStudents = {setStudents}
            isEditable = {isEditable}
            setIsEditable = {setIsEditable}
            setEditableStudent = {setEditableStudent}
            studentName = {studentName}
            setStudentName = {setStudentName}
            editableStudent = {editableStudent}
        />
        <StudentSection 
            isEditable = {isEditable}
            setIsEditable = {setIsEditable}
            setEditableStudent = {setEditableStudent}
            setStudentName = {setStudentName}
            students = {students}
            setStudents = {setStudents}
        />
    </div>
    )
}
export default StudentManagement;