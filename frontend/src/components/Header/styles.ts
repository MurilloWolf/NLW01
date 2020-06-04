import styled from "styled-components";

const Header = styled.div`
	margin: 48px 0 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		color: ${(props) => props.theme.colors.title};
		font-weight: bold;
		text-decoration: none;

		display: flex;
		align-items: center;

		svg {
			align-self: flex-end;
			margin-right: 16px;
			color: ${(props) => props.theme.colors.primary};
		}
	}
	@media screen and(max-width: 900px) {
		margin: 48px auto 0;
	}
`;

const Style = {
	Header,
};

export default Style;
