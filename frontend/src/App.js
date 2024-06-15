import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ResetPassword from "./ResetPassword"; // Import the ResetPassword component

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />{" "}
                {/* Redirect to signup */}
                <Route path="/signup" element={<SignupForm />} />
                <Route
                    path="/login"
                    element={<LoginForm onLogin={handleLogin} />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/forgotpassword"
                    element={<ForgotPasswordForm />}
                />{" "}
                {/* Add the forgot password route */}
                <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                />{" "}
                {/* Add the reset password route */}
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
