import {
	Card,
	Avatar,
	BlackFade,
	DataContainer,
	HeaderContainer,
	GenderBadgeStyle,
	EpisodesContainer
} from './CharacterDetailsCard.styles';

const CharacterDetailsCard = (props) => {
	const { image, name, gender, status, species, origin, location } = props.character;
	const episodes = props.episodes;
	return (
		<Card>
			<div>
				<Avatar imageSource={image} />
				<BlackFade></BlackFade>
			</div>

			<DataContainer>
				<HeaderContainer>
					<h1>{name}</h1>
					<GenderBadgeStyle gender={gender}>
						<p>{gender}</p>
					</GenderBadgeStyle>
				</HeaderContainer>

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