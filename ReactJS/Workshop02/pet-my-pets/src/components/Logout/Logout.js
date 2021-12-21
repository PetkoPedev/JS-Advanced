import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import { useAuthContext } from "../../contexts/AuthContext.js";
import { useEffect } from "react";
export default function Logout() {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/dashboard');
            })
    }, []);

    return null;
}