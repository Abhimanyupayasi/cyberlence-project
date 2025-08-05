const ComponentDashboard = () => {
  // Sample data
  const studentData = {
    personal: {
      name: "John Doe",
      id: "STU2023001",
      email: "john.doe@university.edu",
      mobile: "+1 234-567-8901"
    },
    guardian: {
      name: "Robert Doe",
      email: "robert.doe@email.com",
      mobile: "+1 987-654-3210",
      address: "123 University Ave, Campus City, CC 12345"
    },
    academic: {
      program: "Bachelor of Technology",
      degree: "Computer Science Engineering",
      joinDate: "15 August 2022",
      designation: "CSE - 3rd Year"
    },
    notifications: [
      { type: "Fees Payment", lastDate: "25 Oct 2023", status: "Pending" },
      { type: "Upload Certificate", lastDate: "30 Nov 2023", status: "Pending" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* First Row - Personal and Guardian Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Details Card */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-lg font-bold border-b pb-2">Personal Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold">Name:</span>
                <span>{studentData.personal.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Student ID:</span>
                <span>{studentData.personal.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{studentData.personal.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Mobile Number:</span>
                <span>{studentData.personal.mobile}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guardian Details Card */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-lg font-bold border-b pb-2">Guardian Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold">Name:</span>
                <span>{studentData.guardian.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{studentData.guardian.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Mobile Number:</span>
                <span>{studentData.guardian.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Address:</span>
                <span className="text-right">{studentData.guardian.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Academic and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Academic Details Card */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-lg font-bold border-b pb-2">Academic Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold">Degree Program:</span>
                <span>{studentData.academic.program}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Specialization:</span>
                <span>{studentData.academic.degree}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Join Date:</span>
                <span>{studentData.academic.joinDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Current Status:</span>
                <span>{studentData.academic.designation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Notifications Card */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title text-lg font-bold border-b pb-2">Admin Notifications</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Last Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.notifications.map((notification, index) => (
                    <tr key={index}>
                      <td>{notification.type}</td>
                      <td>{notification.lastDate}</td>
                      <td>
                        <span className={`badge ${notification.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
                          {notification.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row - Widgets (Original ones) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Current Semester */}
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Current Semester</h2>
            <p>Fall 2023</p>
            <p>Registered Courses: 5</p>
          </div>
        </div>
        
        {/* CGPA */}
        <div className="card bg-secondary text-secondary-content">
          <div className="card-body">
            <h2 className="card-title">Current CGPA</h2>
            <p className="text-4xl font-bold">3.75</p>
          </div>
        </div>
        
        {/* Upcoming Assignments */}
        <div className="card bg-accent text-accent-content">
          <div className="card-body">
            <h2 className="card-title">Upcoming Assignments</h2>
            <ul>
              <li>CS101 - Assignment 3 (Due: 10/15)</li>
              <li>MATH202 - Quiz 2 (Due: 10/18)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDashboard;