import ComponentDashboard from "../components/Dashboard/CompomentDashboard";

const Dashboard = () => {
  return (
   <>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Current Semester</h2>
          <p>Fall 2023</p>
          <p>Registered Courses: 5</p>
        </div>
      </div>
      
      
      <div className="card bg-secondary text-secondary-content">
        <div className="card-body">
          <h2 className="card-title">Current CGPA</h2>
          <p className="text-4xl font-bold">3.75</p>
        </div>
      </div>
      
      
      <div className="card bg-accent text-accent-content">
        <div className="card-body">
          <h2 className="card-title">Upcoming Assignments</h2>
          <ul>
            <li>CS101 - Assignment 3 (Due: 10/15)</li>
            <li>MATH202 - Quiz 2 (Due: 10/18)</li>
          </ul>
        </div>
      </div>
    </div> */}
    <ComponentDashboard/>
   </>
  );
};

export default Dashboard;