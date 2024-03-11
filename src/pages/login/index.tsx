import React, { useContext, useState } from "react";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [user, setUser] = useState<string>('');
    const handleLogin = () => {
        alert("login!");
    };

    return (
        <div>
            <label>
                username :
                <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}></button>
        </div>
    );
}

export default LoginPage;