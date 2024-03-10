import React from "react";
import {
	Container,
	Button,
	Input,
	Text,
	Break,
	Title,
	SubTitle,
	WrapForm,
	WrapContent,
	WrapFormFAQ
} from "./styles/OptionForm";

export default function OptionForm({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

OptionForm.Input = function OptionFormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

OptionForm.Text = function OptionFormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

OptionForm.Button = function OptionFormButton({ children, ...restProps }) {
	return (
		<Button {...restProps}>
			{children}{" "}
			<img src="/images/icons/chevron-right.png" alt="Finish Sign Up" />
		</Button>
	);
};

OptionForm.Break = function OptionFormBreak({ ...restProps }) {
	return <Break {...restProps} />;
};

OptionForm.WrapForm = function OptionFormWrapForm({ children, ...restProps }) {
	return <WrapForm {...restProps}>{children}</WrapForm>;
};

OptionForm.WrapFormFAQ = function OptionFormWrapFormFAQ({
	children,
	...restProps
}) {
	return <WrapFormFAQ {...restProps}>{children}</WrapFormFAQ>;
};

OptionForm.WrapContent = function OptionFormWrapContent({
	children,
	...restProps
}) {
	return <WrapContent {...restProps}>{children}</WrapContent>;
};

OptionForm.Title = function OptionFormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

OptionForm.SubTitle = function OptionFormSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
