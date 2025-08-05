import { useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([
  {
    id: 'CS101',
    name: 'Introduction to Computer Science',
    credits: 3,
    grade: 'A',
    points: 4.0,
  },
  {
    id: 'CS102',
    name: 'Data Structures',
    credits: 4,
    grade: 'B+',
    points: 3.3,
  },
  {
    id: 'CS103',
    name: 'Database Systems',
    credits: 3,
    grade: 'A-',
    points: 3.7,
  },
  {
    id: 'CS104',
    name: 'Computer Networks',
    credits: 3,
    grade: 'B',
    points: 3.0,
  },
  {
    id: 'CS105',
    name: 'Operating Systems',
    credits: 4,
    grade: 'A',
    points: 4.0,
  },
  {
    id: 'CS106',
    name: 'Software Engineering',
    credits: 3,
    grade: 'B-',
    points: 2.7,
  },
  {
    id: 'CS107',
    name: 'Web Development',
    credits: 3,
    grade: 'A+',
    points: 4.0,
  },
  {
    id: 'CS108',
    name: 'Machine Learning',
    credits: 4,
    grade: 'B+',
    points: 3.3,
  },
  {
    id: 'CS109',
    name: 'Artificial Intelligence',
    credits: 3,
    grade: 'A-',
    points: 3.7,
  },
  {
    id: 'CS110',
    name: 'Mobile App Development',
    credits: 2,
    grade: 'B',
    points: 3.0,
  },
]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Credit Units</th>
            <th>Grade</th>
            <th>Grade Points</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.credits}</td>
              <td>{course.grade}</td>
              <td>{course.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;