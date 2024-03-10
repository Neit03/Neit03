import React from "react";
import {
	Container,
	Base,
	ErrorMessage,
	Title,
	Text,
	SmallText,
	RedirectLink,
	Input,
	Button,
	CheckBox,
	Wrapper,
	FlexBox,
	SmallLink,
	SocialButton,
	Image
} from "./styles/form";

export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Form.ErrorMessage = function FormErrorMessage({ children, ...restProps }) {
	return <ErrorMessage {...restProps}>{children}</ErrorMessage>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

Form.RedirectLink = function FormRedirectLink({ children, ...restProps }) {
	return <RedirectLink {...restProps}>{children}</RedirectLink>;
};

Form.SmallLink = function FormSmallLink({ children, ...restProps }) {
	return <SmallLink {...restProps}>{children}</SmallLink>;
};

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Form.Button = function FormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Form.SocialButton = function FormSocialButton({ children, ...restProps }) {
	return <SocialButton {...restProps}>{children}</SocialButton>;
};

Form.Image = function FormImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
};

Form.CheckBox = function FormCheckBox({ children, ...restProps }) {
	return <CheckBox {...restProps}>{children}</CheckBox>;
};

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Form.FlexBox = function FormFlexBox({ children, ...restProps }) {
	return <FlexBox {...restProps}>{children}</FlexBox>;
};