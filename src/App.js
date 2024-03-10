import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages/index";
import { IsUser, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks/index"; //<---------- Import here

export default function App() {
	const { user } = useAuthListener(); //<---------- Use it here
	return (
		<BrowserRouter>
			<IsUser
				user={user}
				path={ROUTES.SIGN_IN}
				LoggedInPath={ROUTES.BROWSE}
			>
				<SignIn />
			</IsUser>
			<IsUser
				user={user}
				path={ROUTES.SIGN_UP}
				LoggedInPath={ROUTES.BROWSE}
			>
				<SignUp />
			</IsUser>
			<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
				<Browse />
			</ProtectedRoute>
			<IsUser user={user} path={ROUTES.HOME} LoggedInPath={ROUTES.BROWSE}>
				<Home />
			</IsUser>
		</BrowserRouter>
	);
}