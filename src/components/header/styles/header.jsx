import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
	transition: background-color 0.5s;
	position: relative;
	max-width: 1920px;
	margin: 0 auto;
	padding-top: 20px;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	height: 4rem;
`;

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 8px solid #222;
	width: 100%;
	object-fit: cover;
	background:
		linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8) 0,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, 0.8) 100%
		),
		url(${({ src }) =>
				src
					? `../images/misc/${src}.jpg`
					: "../images/misc/home-bg.jpg"})
			top left / cover no-repeat;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: auto;
	padding-top: 0.5rem;
	position: relative;
	margin: 0 3.5rem;
`;

export const Logo = styled.img`
	width: auto;
	height: 1.5rem;
	padding-top: 0;
	@media only screen and (min-width: 950px) and (max-width: 1449px) {
		width: 8.375rem;
		height: 2.25rem;
	}
	@media only screen and (min-width: 1450px) {
		width: 10.4375rem;
		height: 2.8125rem;
	}
`;

export const ButtonLink = styled(Link)`
	display: block;
	background-color: #e50914;
	color: #fff;
	border: 0;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;
	font-size: 1rem;
	font-weight: 400;
	white-space: nowrap;

	&:hover {
		background-color: #f40612;
	}
`;
export const WrapBlock = styled.div`
	display: flex;
`;

export const WrapSelect = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	margin: 0 0.75rem;
	&::before {
		content: "\f0ac";
		font-family: "Font Awesome 5 Free";
		font-weight: 900;
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		left: 0.5rem;
		color: #fff;
		font-size: 0.75rem;
		pointer-events: none;
	}
`;

export const Select = styled.select`
	padding: 0.5rem 1.375rem;
	background-color: rgba(0, 0, 0, 0.4);
	border: 1px solid #aaa;
	color: #fff;
	font-size: 0.875rem;
	border-radius: 2px;
	width: 80%;

	@media only screen and (min-width: 550px) and (max-width: 949px),
		only screen and (min-width: 950px) and (max-width: 1449px),
		only screen and (min-width: 1450px) {
		padding: 0.5rem 1.375rem;
	}
`;
export const Option = styled.option``;
