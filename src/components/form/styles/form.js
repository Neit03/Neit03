import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 4px;
	box-sizing: border-box;
	min-height: 515px;
	width: 100%;
	margin: auto;
	max-width: 450px;
	padding: 20px 0 30px;

	@media only screen and (min-width: 500px) {
		min-width: 380px;
	}

	@media only screen and (min-width: 740px) {
		min-height: 660px;
		padding: 60px 68px 40px;
		margin-bottom: 90px;
	}
`;

export const ErrorMessage = styled.div`
	background-color: #e87c03;
	border-radius: 4px;
	font-size: 14px;
	margin: 0 0 14px;
	color: #fff;
	padding: 15px 20px;
`;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex-grow: 0.5;
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: 700;
	margin-bottom: 28px;
	padding: 0;
`;

export const Text = styled.p`
	color: #737373;
	font-size: 16px;
	font-weight: 500;
`;

export const SmallText = styled.span`
	margin-top: 10px;
	font-size: 13px;
	line-height: normal;
	color: #8c8c8c;
`;

export const RedirectLink = styled(Link)`
	color: #fff;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const SmallLink = styled(RedirectLink)`
	color: #b3b3b3;
	cursor: pointer;
	font-size: 13px;
	font-weight: 500;
	padding-top: 2px;
`;

export const Input = styled.input`
	background: #333;
	border-radius: 4px;
	border: 0;
	color: #fff;
	height: 50px;
	line-height: 50px;
	padding: 5px 20px;
	width: 100%;
	box-shadow: none;
	box-sizing: border-box;
	font-size: 16px;
	display: block;
	appearance: none;
	margin-bottom: 16px;
`;

export const Button = styled.button`
	border: 0;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 700;
	margin: 24px 0 12px;
	background: #e50914;
	position: relative;
	box-shadow: 0 1px 0 rgb(0 0 0 / 55%);
	color: #fff;
	cursor: pointer;
	letter-spacing: 0.1px;
	user-select: none;
	text-align: center;

	@media only screen and (min-width: 360px) {
		width: 100%;
		max-width: 100%;
	}

	@media only screen and (min-width: 500px) {
		padding: 16px;
		display: inline-block;
		min-width: 98px;
		min-height: 37px;
		line-height: 1em;
		&:disabled {
			opacity: 0.8;
		}
	}
`;

export const CheckBox = styled.input`
	width: 16px;
	height: 16px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const FlexBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SocialButton = styled.button`
	margin-top: 16px;
	min-height: 0;
	width: auto;
	border: 0;
	background: 0 0;
	box-shadow: none;
	padding: 0;
	margin: 0;
`;

export const Image = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 10px;
	vertical-align: middle;
`;