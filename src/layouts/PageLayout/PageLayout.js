import { PageLayoutStyled } from "./PageLayout.styles";

const PageLayout = (props) => {
	return (
		<PageLayoutStyled>
			{props.children}
		</PageLayoutStyled>
	);
};

export default PageLayout;