import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 70px 45px;
	max-width: 1000px;

	@media screen and (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Wrapper = styled.div`
	display: inline-block;
	position: relative;
	margin-bottom: 1rem;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 15px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;

export const Link = styled.a`
	color: #757575;
	margin-bottom: 20px;
	font-size: 13px;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

export const Title = styled.p`
	font-size: 16px;
	color: #757575 !important;
	margin-bottom: 40px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export const Text = styled.p`
	font-size: 13px;
	color: #757575;
	margin-bottom: 40px;
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const SelectWrap = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	&::before {
		content: "\f0ac";
		font-family: "Font Awesome 5 Free";
		font-weight: 900;
		position: absolute;
		top: 15px;
		left: 15px;
		color: #999;
		font-size: 16px;
		pointer-events: none;
	}
`;

export const Select = styled.select`
	text-indent: 0;
	line-height: 1.7;
	background-color: #000;
	background-image: none;
	border: 1px solid #333;
	color: #999;
	font-size: 16px;
	padding: 12px 26px 12px 45px;
	border-radius: 2px;
`;
export const Option = styled.option``;
