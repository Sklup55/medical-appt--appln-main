import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'; 
import Login from './Components/Login/Login';

// import { Landing_Page } from './Components/Landing_Page/Landing_Page';

// import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
// import DoctorBook from './Components/DoctorCard/DoctorBook';


// import Notification from './Components/Notification/Notification';
// import ReviewForm from './Components/ReviewForm/ReviewForm';


import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';





// import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
// import ProfileForm from './Components/ProfileCard/ProfileForm';
// import ReportsLayout from './Components/ReportsLayout/ReportsLayout';


function App() { 

  return ( 

<BrowserRouter> 

<Navbar/>
{/* <Notification> */}

<Routes> 

   {/* <Route path='/' element={<Landing_Page/>}/> */}

  <Route path='/login' element={<Login/>}/> 

  <Route path='/sign_up' element={<Sign_Up/>}/> 
  {/* <Route path='/finddoctor' element={<FindDoctorSearch/>}/> */}
  {/* <Route path="/search/doctors" element={<DoctorBook/>} /> */}
  {/* <Route path='/review' element={<ReviewForm/>}/> */}
  {/* <Route path='/instant-consultation' element={<InstantConsultation/>}/> */}
  {/* <Route path='/profile' element={<ProfileForm/>} />
  <Route path='/reports' element={<ReportsLayout/>} /> */}
  {/* <Route path='/login' element={<Login/>}/> */} 



 

</Routes> 
{/* </Notification> */}

</BrowserRouter> 

 

   

  ); 

} 

 

export default App; 
      