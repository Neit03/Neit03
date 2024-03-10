import React from "react";
import { Header } from "../components/index";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children, status }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Wrapper>
					<Header.Logo
						to={ROUTES.HOME}
						alt="Netflix-clone"
						src="/images/logo.svg"
					/>
					{/* Handle hidden or show is here */}
					{status === "signin" ? (
						""
					) : (
						<Header.WrapBlock>
							<Header.WrapSelect>
								<Header.Select>
									<Header.Option value="/vn-en/">
										English
									</Header.Option>
									<Header.Option value="/vn/">
										Vietnamese
									</Header.Option>
								</Header.Select>
							</Header.WrapSelect>
							<Header.ButtonLink to={ROUTES.SIGN_IN}>
								Sign In
							</Header.ButtonLink>
						</Header.WrapBlock>
					)}
				</Header.Wrapper>
			</Header.Frame>
			{children}
		</Header>
	);
}