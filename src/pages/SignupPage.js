import React from "react";
import '../App.css';
import Footer from "../components/Footer";

function SignupPage() {
    return (
        <div>
            <div className="form">
                <SignupForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default SignupPage;