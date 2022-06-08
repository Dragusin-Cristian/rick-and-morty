import {
	Card,
	Avatar,
	BlackFade,
	DataContainer,
	HeaderCont,
	GenderBadgeStyle,
	EpisodesContainer
} from './CharacterDetailsCard.styles';

const CharacterDetailsCard = ({ image, name, gender, status, species, origin, location, episodes }) => {
	return (
		<Card>
			<div>
				<Avatar imageSource={image} />
				<BlackFade></BlackFade>
			</div>

			<DataContainer>
				<HeaderCont>
					<h1>{name}</h1>
					<GenderBadgeStyle gender={gender}>
						<p>{gender}</p>
					</GenderBadgeStyle>
				</HeaderCont>

				<p>- status: {status}</p>
				<p>- species: {species}</p>
				<p>- origin: {origin.name}</p>
				<p>- location: {location.name}</p>
				<p>- episodes:</p>
				<EpisodesContainer>
					<ul>
						{episodes.map(e => {
							return (
								<li key={e}><p>{e}</p></li>
							)
						})}
					</ul>
				</EpisodesContainer>

			</DataContainer>
		</Card>
	);
};

export default CharacterDetailsCard;