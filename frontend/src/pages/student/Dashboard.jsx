import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../services/config";
import WelcomeBox from "./WelcomeBox/WelcomeBox";

function Dashboard() {

    const [student , setStudent] = useState(null)
  
     useEffect(() => {
    const storedStudent = localStorage.getItem("student");
    if (storedStudent) {return}
        queueMicrotask(() => {
        setStudent(JSON.parse(storedStudent));
    });
  }, []);

  return (
    <>
        <WelcomeBox name={student.username || "Student"}
                    grade={student.GPA || "error"}
                    level={student.level || "error"}/>
    </>
  );
}

export default Dashboard;
