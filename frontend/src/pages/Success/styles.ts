import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 70vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column nowrap;

	div {
		text-align: center;
		width: 100%;

		h1 {
			color: #fff;
			font-size: 36px;
			margin: 1.125rem;
		}
	}
`;

const Styles = { Container };
export default Styles;
