import { useState } from 'react';

const CGPA = () => {
  const [courses, setCourses] = useState([
  { id: 1, name: 'CS101', credits: 3, grade: 'A', points: 4.0 },
  { id: 2, name: 'CS102', credits: 4, grade: 'B+', points: 3.3 },
  { id: 3, name: 'CS103', credits: 3, grade: 'A-', points: 3.7 },
  { id: 4, name: 'CS104', credits: 3, grade: 'B', points: 3.0 },
  { id: 5, name: 'CS105', credits: 4, grade: 'A', points: 4.0 },
  { id: 6, name: 'CS106', credits: 3, grade: 'B-', points: 2.7 },
  { id: 7, name: 'CS107', credits: 3, grade: 'A+', points: 4.0 },
  { id: 8, name: 'CS108', credits: 4, grade: 'B+', points: 3.3 },
  { id: 9, name: 'CS109', credits: 3, grade: 'A-', points: 3.7 },
  { id: 10, name: 'CS110', credits: 2, grade: 'B', points: 3.0 },
]);

  const calculateCGPA = () => {
     let totalPoints = 0;
  let totalCredits = 0;

  
  courses.forEach(course => {
    totalPoints += course.points * course.credits;
    totalCredits += course.credits;
  });

  
  if (totalCredits === 0) return 0;
  const cgpa = totalPoints / totalCredits;
  return cgpa.toFixed(2);
}

  return (
    <div>
      <div className="card bg-base-100 shadow-lg mb-4">
        <div className="card-body">
          <h2 className="card-title">Your CGPA</h2>
          <p className="text-4xl font-bold">{calculateCGPA()}</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Course</th>
              <th>Credits</th>
              <th>Grade</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.credits}</td>
                <td>{course.grade}</td>
                <td>{course.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CGPA;