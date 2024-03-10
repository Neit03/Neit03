import React from "react";
import {
	StoryContainer,
	FAQsContainer,
	FooterContainer,
	HeaderContainer
} from "../containers/index";
import { OptionForm } from "../components/index";

export default function Home() {
	return (
		<>
			{/* Header */}
			<HeaderContainer>
				<OptionForm>
					<OptionForm.WrapContent>
						<OptionForm.Title>
							Unlimited movies, TV shows, and more.
						</OptionForm.Title>
						<OptionForm.SubTitle>
							Watch anywhere. Cancel anytime.
						</OptionForm.SubTitle>
						<OptionForm.Break />
						<OptionForm.Text>
							Ready to watch? Enter your email to create or
							restart your membership.
						</OptionForm.Text>
						<OptionForm.WrapForm>
							<OptionForm.Input placeholder="Email address" />
							<OptionForm.Button>Get Started</OptionForm.Button>
						</OptionForm.WrapForm>
					</OptionForm.WrapContent>
				</OptionForm>
			</HeaderContainer>
			<StoryContainer />
			<FAQsContainer />
			<FooterContainer />
		</>
	);
}
