import React from "react";
import { FAQs, OptionForm } from "../components/index";
import faqsData from "../fixtures/faqs.json";

export default function FAQsContainer() {
	return (
		<FAQs>
			<FAQs.Title>Frequently Asked Questions</FAQs.Title>
			<FAQs.InnerWrapper>
				{faqsData.map((item) => (
					<FAQs.Item key={item.id}>
						<FAQs.Header>{item.header}</FAQs.Header>
						<FAQs.Body>{item.body}</FAQs.Body>
					</FAQs.Item>
				))}
			</FAQs.InnerWrapper>
			<OptionForm.WrapFormFAQ>
				<OptionForm.Text>
					Ready to watch? Enter your email to create or restart your
					membership.
				</OptionForm.Text>
				<OptionForm.WrapForm>
					<OptionForm.Input placeholder="Email address" />
					<OptionForm.Button>Get Started</OptionForm.Button>
				</OptionForm.WrapForm>
			</OptionForm.WrapFormFAQ>
		</FAQs>
	);
}
