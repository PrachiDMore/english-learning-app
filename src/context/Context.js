import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import extractToken from "../utils/GetToken";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";

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

	useEffect(() => {
		

		
	}, [userId])


	return (
		<Datacontext.Provider value={{}}>
			{children}
		</Datacontext.Provider>
	)
}


const ContextAuth = () => {
	return useContext(Datacontext)
}

export { ContextProvider, ContextAuth }