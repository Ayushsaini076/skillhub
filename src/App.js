import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Searchpage from './pages/Searchpage';
import Tutorpage from './pages/Tutorpage';
import Tutoronboarding from './pages/Tutoronboarding';
import StudentDashboard from './pages/StudentDashboard';
import TutorDashboard from './pages/TutorDashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/search" element={<Searchpage/>}/>
        <Route path='/tutors/:id' element={<Tutorpage/>}/>
        <Route path='/onboarding' element={<Tutoronboarding/>}/>
        <Route path='/students/:id' element={<StudentDashboard/>}/>
        <Route path='/tutordash/:id' element={<TutorDashboard/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
