import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import extractToken from "../utils/GetToken";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "..";

export const Datacontext = createContext(null)


const ContextProvider = ({ children }) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [profileLoading, setProfileLoading] = useState(true);
	const [account, setAccount] = useState('')
	const [userId, setUserId] = useState('')



	useEffect(() => {
		if (extractToken()) {
			if (location.pathname === "/login" || location.pathname === "/screen1" || location.pathname === "/screen2" || location.pathname === "/screen3") {
				navigate("/main")
			}
		}
		else {
			navigate('/screen1')
		}
	}, [])


	const fetchUser = async () => {
		try {
			setProfileLoading(true)
			await axios(`${server}/user/profile`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}).then((response) => {
				setAccount(response.data?.user)
			})
			.catch((err) => {
				console.log(err);
			})
			setProfileLoading(false)
		} catch (error) {
			console.log(error);
			setProfileLoading(true)
		}
	}
	useEffect(() => {
		fetchUser()
	}, [userId])


	return (
		<Datacontext.Provider value={{ account, profileLoading}}>
			{children}
		</Datacontext.Provider>
	)
}


const ContextAuth = () => {
	return useContext(Datacontext)
}

export { ContextProvider, ContextAuth }