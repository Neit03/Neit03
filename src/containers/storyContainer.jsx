import React from "react";
import { Story } from "../components/index";
import storiesData from "../fixtures/stories.json";
// import FooterContainer from "./footerContainer";
// import FooterContainer from "./footerContainer";

export default function StoryContainer() {
	return (
		<div>
			<Story.Container>
				{storiesData.map((story) => (
					<Story key={story.id} direction={story.direction}>
						<Story.BlockPane>
							<Story.Title>{story.title}</Story.Title>
							<Story.SubTitle>{story.subTitle}</Story.SubTitle>
						</Story.BlockPane>
						{story.image ? (
							<Story.BlockPane>
								<Story.Image
									src={story.image}
									alt={story.alt}
								></Story.Image>
							</Story.BlockPane>
						) : (
							""
						)}
					</Story>
				))}
			</Story.Container>
			{/* <FooterContainer /> */}
		</div>
	);
}
