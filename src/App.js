
import './App.css';
// import{BrowserRouter,Route,Routes}from'react-router-dom';
// import UserRouter from './Routers/UserRouter';
// // import AdminRouter from './Routers/AdminRouter';
// import UserHomePage from './pages/User/UserHomePage';
// import Signup from './components/User/Signup/Signup';
import Login from './components/User/Login/Login';

function App() {
  return (

    <div>
        {/* <BrowserRouter>
        <Routes>                                  
          <Route path='/*' element={<UserRouter/>}/>

          {/* <Route path='/Admin/*' element={<AdminRouter/>}/> */}
        {/* </Routes> */}
        
       {/* </BrowserRouter>  */} 
       {/* <Signup/> */}
       <Login/>
      {/* <UserHomePage/> */}
    
  </div>
  );
}

export default App;
