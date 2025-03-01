import styled from "styled-components";

export const Inner = styled.div`
	display: flex;
	align-items: center;
	flex-direction: ${({ direction }) => direction};
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const BlockPane = styled.div`
	width: 50%;

	@media screen and (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media screen and (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2`
	font-size: 26px;
	line-height: normal;
	font-weight: normal;

	@media screen and (max-width: 600px) {
		font-size: 18px;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	width: 507px;
	height: auto;
`;

export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: #fff;
	overflow: hidden;
`;

export const Container = styled.div`
	@media (max-width: 1000px) {
		${Item}:last-of-type h2 {
			margin-bottom: 50px;
		}
	}
`;
