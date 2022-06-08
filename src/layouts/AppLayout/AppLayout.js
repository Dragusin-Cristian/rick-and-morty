import { AppLayoutStyled } from "./AppLayout.styles";

const AppLayout = (props) => {
	return (
		<AppLayoutStyled>
			{props.children}
		</AppLayoutStyled>
	);
};

export default AppLayout;