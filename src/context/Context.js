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
	const [account, setAccount] = useState('')
	const [userId, setUserId] = useState('')



	useEffect(() => {
		if (extractToken()) {
			const jwtD = jwtDecode(localStorage.getItem("token"))
			setUserId(jwtD?.id)
			// console.log(location.pathname);
			if (location.pathname === "/login" || location.pathname === "/screen1" || location.pathname === "/screen2" || location.pathname === "/screen3") {
				navigate("/main")
			}
		}
		else {
			navigate('/screen1')
		}
	}, [])


	const fetchUser = async (userId) => {
		try {
			await axios(`${server}/user/${userId}`, {
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
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchUser(userId)
	}, [userId])


	return (
		<Datacontext.Provider value={{ account }}>
			{children}
		</Datacontext.Provider>
	)
}


const ContextAuth = () => {
	return useContext(Datacontext)
}

export { ContextProvider, ContextAuth }