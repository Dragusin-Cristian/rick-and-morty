import { PageLayoutContainer } from "./PageLayout.styles";

const PageLayout = (props) => {
	return (
		<PageLayoutContainer>
			{props.children}
		</PageLayoutContainer>
	);
};

export default PageLayout;