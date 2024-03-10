import React, { useState, useContext, createContext } from "react";
import {
	Container,
	Inner,
	Header,
	Title,
	Frame,
	Item,
	Body,
	InnerWrapper
} from "./styles/FAQs";

const toggleContext = createContext();

export default function FAQs({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

FAQs.Title = function FAQsTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

FAQs.Frame = function FAQsFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

FAQs.Item = function FAQsItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<toggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</toggleContext.Provider>
	);
};

FAQs.Header = function FAQsHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(toggleContext);
	return (
		<Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="close" />
			) : (
				<img src="/images/icons/add.png" alt="open" />
			)}
		</Header>
	);
};

FAQs.Body = function FAQsBody({ children, ...restProps }) {
	const { toggleShow } = useContext(toggleContext);
	return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

FAQs.InnerWrapper = function FAQsInnerWrapper({ children, ...restProps }) {
	return <InnerWrapper {...restProps}>{children}</InnerWrapper>;
};
