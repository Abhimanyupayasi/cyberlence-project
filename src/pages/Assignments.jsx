import { useState } from 'react';

const Assignments = () => {
  const [filter, setFilter] = useState({
    courseId: '',
    assignmentId: '',
    status: 'all',
  });

  const [assignments, setAssignments] = useState( [
  {
    id: 'A1',
    courseId: 'CS101',
    title: 'Programming Basics',
    dueDate: '2023-10-15',
    status: 'ongoing',
  },
  {
    id: 'A2',
    courseId: 'CS102',
    title: 'Data Structures',
    dueDate: '2023-10-20',
    status: 'completed',
  },
  {
    id: 'A3',
    courseId: 'CS103',
    title: 'Database Systems',
    dueDate: '2023-10-25',
    status: 'pending',
  },
  {
    id: 'A4',
    courseId: 'CS104',
    title: 'Computer Networks',
    dueDate: '2023-11-01',
    status: 'ongoing',
  },
  {
    id: 'A5',
    courseId: 'CS105',
    title: 'Operating Systems',
    dueDate: '2023-11-05',
    status: 'completed',
  },
  {
    id: 'A6',
    courseId: 'CS106',
    title: 'Software Engineering',
    dueDate: '2023-11-10',
    status: 'pending',
  },
  {
    id: 'A7',
    courseId: 'CS107',
    title: 'Web Development',
    dueDate: '2023-11-15',
    status: 'ongoing',
  },
  {
    id: 'A8',
    courseId: 'CS108',
    title: 'Machine Learning',
    dueDate: '2023-11-20',
    status: 'not started',
  },
]
);

  const filteredAssignments = assignments.filter((assignment) => {
    return (
      (filter.courseId === '' ||
        assignment.courseId.includes(filter.courseId)) &&
      (filter.assignmentId === '' ||
        assignment.id.includes(filter.assignmentId)) &&
      (filter.status === 'all' || assignment.status === filter.status)
    );
  });

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course ID</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={filter.courseId}
            onChange={(e) =>
              setFilter({ ...filter, courseId: e.target.value })
            }
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Assignment ID</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={filter.assignmentId}
            onChange={(e) =>
              setFilter({ ...filter, assignmentId: e.target.value })
            }
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select
            className="select select-bordered"
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="all">All</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Assignment ID</th>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssignments.map((assignment) => (
              <tr key={`${assignment.courseId}-${assignment.id}`}>
                <td>{assignment.courseId}</td>
                <td>{assignment.id}</td>
                <td>{assignment.title}</td>
                <td>{assignment.dueDate}</td>
                <td>
                  <span
                    className={`badge ${
                      assignment.status === 'completed'
                        ? 'badge-success'
                        : 'badge-warning'
                    }`}
                  >
                    {assignment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;