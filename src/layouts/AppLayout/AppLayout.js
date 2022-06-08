import { AppLayoutContainer } from "./AppLayout.styles";

const AppLayout = (props) => {
	return (
		<AppLayoutContainer>
			{props.children}
		</AppLayoutContainer>
	);
};

export default AppLayout;