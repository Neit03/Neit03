import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer, FooterContainer } from "../containers/index";
import { Form } from "../components/index";
import * as ROUTES from "../constants/routes";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const { firebase } = useContext(FirebaseContext);
	const history = useHistory();

	// Check form input elements are valid
	const isInvalid = password === "" || email === "";

	// Email & Password
	const handleSignIn = (event) => {
		event.preventDefault();
		//Apply authentication of firebase
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				// Redirect to browse page
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setErrorMessage(error.code);
			});
	};

	return (
		<>
			<HeaderContainer status="hidden">
				<Form>
					<Form.Title>Sign In</Form.Title>
					{errorMessage && (
						<Form.ErrorMessage>{errorMessage}</Form.ErrorMessage>
					)}
					<Form.Base onSubmit={handleSignIn} method="POST">
						<Form.Input
							placeholder="Email or phone number"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Form.Input
							type="password"
							autoComplete="off"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Button disabled={isInvalid} type="submit">
							Sign In
						</Form.Button>
						<Form.FlexBox>
							<Form.Wrapper>
								<Form.CheckBox
									type="checkbox"
									defaultChecked={true}
								/>
								<Form.SmallText style={{ marginTop: "0" }}>
									{" "}
									Remember me
								</Form.SmallText>
							</Form.Wrapper>
							<Form.SmallLink to="/">Need help?</Form.SmallLink>
						</Form.FlexBox>
					</Form.Base>
					<Form.Wrapper
						style={{
							flexDirection: "column",
							alignItems: "flex-start"
						}}
					>
						<Form.SocialButton>
							<Form.Image src="./images/icons/FB-Logo.png" />
							<Form.SmallLink to="/">
								Login with Facebook
							</Form.SmallLink>
						</Form.SocialButton>
						<Form.Text style={{ marginBottom: "0" }}>
							New to Netflix?{" "}
							<Form.RedirectLink to={ROUTES.SIGN_UP}>
								Sign up now
							</Form.RedirectLink>
							.
						</Form.Text>
						<Form.SmallText>
							This page is protected by Google reCAPTCHA to ensure
							you're not a bot.{" "}
							<Form.SmallLink to="/" style={{ color: "#0071eb" }}>
								Learn more
							</Form.SmallLink>
							.
						</Form.SmallText>
					</Form.Wrapper>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}