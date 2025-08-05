
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CGPA from './pages/CGPA';
import Assignments from './pages/Assignments';


function App() {

return (
  <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Navigate to="/home" replace />} />

      
      <Route path="/home" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="cgpa" element={<CGPA />} />
        <Route path="assignments" element={<Assignments />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

}

export default App;