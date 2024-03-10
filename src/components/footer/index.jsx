import React from "react";
import {
	Column,
	Container,
	Row,
	Link,
	Title,
	Text,
	Break,
	Select,
	Option,
	Wrapper,
	SelectWrap
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
	return <Break {...restProps}>{children}</Break>;
};

Footer.SelectWrap = function FooterSelectWrap({ children, ...restProps }) {
	return <SelectWrap {...restProps}>{children}</SelectWrap>;
};

Footer.Select = function FooterSelect({ children, ...restProps }) {
	return <Select {...restProps}>{children}</Select>;
};

Footer.Option = function FooterOption({ children, ...restProps }) {
	return <Option {...restProps}>{children}</Option>;
};
