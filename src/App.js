import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
    const { authIsReady, user } = useAuthContext()

    return (
        <div>
            {authIsReady &&
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route
                            path='/'
                            element={user ? (<Home />) : (<Navigate to='/login' />)}
                        />
                        <Route
                            path='/login'
                            element={user ? (<Navigate to='/' />) : <Login />}
                        />
                        <Route
                            path='/signup'
                            element={user ? (<Navigate to='/' />) : <Signup />}
                        />
                    </Routes>
                </BrowserRouter>
            }
            <p>copyright Alexandra Mai</p>
        </div>
    )
}

export default App;