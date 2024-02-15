
import './App.css';
// import{BrowserRouter,Route,Routes}from'react-router-dom';
// import UserRouter from './src/Routers/UserRouter';
// import AdminRouter from './src/Routers/AdminRouter';
import UserHomePage from './pages/User/UserHomePage';


function App() {
  return (

    <div>
      {/* <BrowserRouter>
       <Routes>
        <Route path='/*' element={<UserRouter/>}/>
        <Route path='/admin/*' element={<AdminRouter/>}/>
       </Routes>
      </BrowserRouter> */}
      <UserHomePage/>
    
    </div>
  );
}

export default App;
