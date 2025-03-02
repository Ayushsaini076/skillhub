import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Searchpage from './pages/Searchpage';
import Tutorpage from './pages/Tutorpage';
import Tutoronboarding from './pages/Tutoronboarding';
import StudentDashboard from './pages/StudentDashboard';
import TutorDashboard from './pages/TutorDashboard';
import OnboardingForm from './components/Onboarding';
import ProfileSection from './components/ProfileSection';
import AboutExperience from './components/ExperienceSection';
import PricingAvailability from './components/PriceSection';
import { ScheduleCalendar } from './components/Calender';
import Settings from './components/ProfileSetting';
import SignUpPage from './pages/Signup';
import AuthLandingPage from './pages/Tutorsignup';
import SignIn from './pages/Tutorsignin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/tutorsignin' element={<SignIn/>}/>
        <Route path="/search" element={<Searchpage/>}/>
        <Route path='/tutors/:id' element={<Tutorpage/>}/>
        <Route path='/onboarding' element={<Tutoronboarding/>}/>
        <Route path='/tutorauth' element={<AuthLandingPage/>}/>
        <Route path='/students/:id' element={<StudentDashboard/>}/>
        <Route path='/tutordash/:id' element={<TutorDashboard/>}/>
        <Route path='/settings/:id' element={<Settings/>}/>


        <Route path='/onboarding/step-1' element={<OnboardingForm/>}/>
        <Route path='/onboarding/step-2' element={<ProfileSection/>}/>
        <Route path='/onboarding/step-3' element={<AboutExperience/>}/>
        <Route path='/onboarding/step-4' element={<PricingAvailability/>}/>
        <Route path='/onboarding/step-5' element={<ScheduleCalendar/>}/>
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
