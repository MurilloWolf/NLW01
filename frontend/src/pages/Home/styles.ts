import styled from "styled-components";
import bgImage from "../../assets/home-background.svg";
export const Container = styled.div``;

const PageHome = styled.div`
	height: 100vh;
	background: url(${bgImage}) no-repeat 900px bottom !important;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 30px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	header {
		margin: 48px 0 0;
	}

	main {
		flex: 1;
		max-width: 560px;

		display: flex;
		flex-direction: column;
		justify-content: center;

		h1 {
			font-size: 54px;
			color: ${(props) => props.theme.colors.title};
		}

		p {
			font-size: 24px;
			margin-top: 24px;
			line-height: 38px;
		}

		a {
			cursor: pointer;
			width: 100%;
			max-width: 360px;
			height: 72px;
			background: ${(props) => props.theme.colors.primary};
			border-radius: 8px;
			text-decoration: none;

			display: flex;
			align-items: center;
			overflow: hidden;

			margin-top: 40px;

			span {
				display: block;
				background: rgba(0, 0, 0, 0.08);
				width: 72px;
				height: 72px;

				display: flex;
				align-items: center;
				justify-content: center;
				transition: background-color 0.2s;

				svg {
					color: #fff;
					width: 20px;
					height: 20px;
				}
			}
			strong {
				flex: 1;
				text-align: center;
				color: #fff !important;
			}

			:hover {
				background: ${(props) => props.theme.colors.primaryLight} !important;
			}
		}
	}

	@media screen and (max-width: 900px) {
		align-items: center;
		text-align: center;

		header {
			margin: 48px auto 0;
		}

		main {
			align-items: center;
		}
		main h1 {
			font-size: 42px;
		}
		main p {
			font-size: 24px;
		}
	}
`;

const Styles = { PageHome, Content };

export default Styles;
