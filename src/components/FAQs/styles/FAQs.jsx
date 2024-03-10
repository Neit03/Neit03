import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	position: relative;
	margin: 0;
	background: 0 0;

	@media only screen and (min-width: 550px) and (max-width: 949px),
		only screen and (min-width: 950px) and (max-width: 1449px),
		only screen and (min-width: 1450px) {
		padding: 70px 45px;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-bottom: 1px;
	font-size: 26px;
	font-weight: normal;
	background-color: #303030;
	padding: 0.8em 1.2em 0.8em 1.2em;
	user-select: none;
	transition: all 0.3s ease;

	img {
		filter: brightness(0) invert(1);
		width: 24px;
	}
`;

export const Body = styled.div`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	background: #303030;
	white-space: pre-wrap;
	user-select: none;
	overflow: hidden;
	padding: 1.2em;
`;

export const Item = styled.div`
	color: #fff;
	margin: 0 0 8px 0;
`;

export const Frame = styled.div`
	margin-bottom: 40px;
`;

export const InnerWrapper = styled.div`
	max-width: 815px;
	margin: 1.25em auto;

	@media only screen and (min-width: 950px) and (max-width: 1449px),
		only screen and (min-width: 1450px) {
		margin-top: 20px;
		width: 75%;
		margin: 3.25em auto;
	}
`;

export const Inner = styled.div`
	display: flex;
	margin: auto;
	flex-direction: column;
	width: 100%;
`;

export const Title = styled.h1`
	font-size: 3.125rem;
	line-height: 1.1;
	margin-top: 0;
	margin-bottom: 0.5rem;
	color: #fff;
	text-align: center;

	@media screen and (max-width: 600px) {
		font-size: 35px;
	}
`;
