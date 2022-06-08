import { Link } from 'react-router-dom';
import {
	Box,
	CardCont,
	Card,
	Avatar,
	DataContainer,
	ItemData,
	ItemName,
	ItemStatus
} from './CharactersListItem.styles';

const CharactersListItem = ({ avatar, name, status, id }) => {
	return (
		<Link to={`${id}`}>
			<Box>
				<CardCont>
					<Card>
						<Avatar source={avatar}/>
						<DataContainer>
							<ItemData>
								<ItemName>{name}</ItemName>
								<ItemStatus>-{status.toLowerCase()}-</ItemStatus>
							</ItemData>
						</DataContainer>
					</Card>
				</CardCont>
			</Box>
		</Link>
	);
}
export default CharactersListItem;