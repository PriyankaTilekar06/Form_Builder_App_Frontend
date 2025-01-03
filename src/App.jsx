import "./App.css";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from "../context/userContext";
import LandingPage from "./pages/landingPage/LandingPage";
import Register from "./pages/RegisterPage/Register";
import Login from "./pages/LoginPage/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/Settings/Setting";
import Form from "./pages/FormPage/Form";
import Response from "./pages/Response/Response";
import SharedForm from "./pages/SharedForm/SharedForm";

axios.defaults.baseURL = 'http://localhost:8000'
// axios.defaults.baseURL = 'https://form-builder-app-backend.vercel.app'
axios.defaults.withCredentials = true

function App() {
  return(
    <UserContextProvider>
    <Toaster position="top-right" toastOptions={{duration: 2000}} />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/landingpage" element={<LandingPage />}/>
      <Route path="/setting" element={<Setting />}/>
      <Route path="/form" element={<Form />}/>
      <Route path="/response" element={<Response />}/>
      <Route path="/sharedform" element={<SharedForm />} />
    </Routes>
    </UserContextProvider>
  )
}

export default App;
