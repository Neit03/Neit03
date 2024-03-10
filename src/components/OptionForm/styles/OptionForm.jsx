import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	padding-top: 0.85rem;
	flex-wrap: wrap;
	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}

	@media only screen and (min-width: 550px) and (max-width: 949px),
		only screen and (min-width: 950px) and (max-width: 1449px),
		only screen and (min-width: 1450px) {
		padding: 70px 45px;
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	height: 60px;
	background-color: #e50914;
	color: white;
	text-transform: capitalize;
	padding: 0 1em;
	font-size: 1.625rem;
	border: 0;
	border-radius: 2px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-left: 1px solid #333;
	cursor: pointer;
	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 24px;
		@media (max-width: 1000px) {
			width: 16px;
		}
	}
	&:hover {
		background: #f40612;
	}
`;

export const Input = styled.input`
	max-width: 450px;
	width: 100%;
	border: 0;
	padding: 10px;
	height: 60px;
	box-sizing: border-box;
	font-size: 16px;
	border-radius: 2px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`;

export const Text = styled.p`
	font-size: 19.2px;
	color: white;
	text-align: center;
	padding-top: 0.85rem;
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const WrapContent = styled.div`
	position: relative;
	width: 100%;
	padding: 75px 0;
	max-width: 950px;
	margin: 0 auto;
	text-align: center;
	z-index: 1;
	font-size: 1.625rem;
	font-weight: 400;
	color: #fff;
`;

export const WrapForm = styled.form`
	text-align: center;

	@media only screen and (min-width: 950px) and (max-width: 1449px),
		only screen and (min-width: 1450px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 1rem;
	}
`;

export const WrapFormFAQ = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	max-width: 950px;
`;

export const Title = styled.h1`
	max-width: 640px;
	margin: 0 auto;
	line-height: 1.1;
	font-size: 1.75rem;

	@media only screen and (min-width: 950px) and (max-width: 1449px),
		only screen and (min-width: 1450px) {
		font-size: 4rem;
	}

	@media only screen and (min-width: 950px) and (max-width: 1449px) {
		font-size: 3.125rem;
	}

	@media only screen and (min-width: 1450px) {
		max-width: 800px;
	}
`;

export const SubTitle = styled.h2`
	font-size: 1.125rem;
	margin: 1rem auto;
	max-width: 640px;
	font-weight: 400;

	@media only screen and (min-width: 950px) and (max-width: 1449px),
		only screen and (min-width: 1450px) {
		font-size: 1.625rem;
	}
`;
