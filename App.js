
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './Component/Registration';
import Login from './Component/Login';
import Create from './Create/Create';
import Profile from './Component/ProfileDetails/Profile';
import CateList from './Category/CateList';
import CateDe from './Category/CateDe';
import CategoryList from './Cate/CategoryList';
import CategoryDetails from './Cate/CategoryDetails';
import Header from './ShareModule/Header';
import Footer from './ShareModule/Footer';
import Home from './Home/Home';
import Getbanner from './Getbanner/Getbanner';
import StudentList from './Student/StudentList';
import Banner from './Banner/Banner';




function App() {
  return (
    <div className="App">


      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Registration" element={< Registration/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="create" element={<Create/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="categorylist" element={<CateList/>}/>
          <Route path="/categorydetails/:category" element={<CateDe/>}/>
          <Route path="catelist" element={<CategoryList/>}/>
          <Route path="/categorydetails/:category" element={<CategoryDetails/>}/>
          <Route path='banner'  element={<Getbanner/>} />
          <Route path='studentlist'  element={<StudentList/>} />
          <Route path='getbanner'  element={<Banner/>} />
        </Routes>
        <Footer/>
      </Router>



    </div>
  );
}

export default App;



