import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../store/Characters_Actions';
import PageLayout from '../layouts/PageLayout/PageLayout';
import CharactersList from '../components/CharactersList/CharactersList';
import SearchBar from '../components/SearchBar/SearchBar';

const SearchPage = () => {
	const isFirstLoad = useSelector(state => state.isFirstLoad);
	const dispatch = useDispatch();
	console.log('Rended Search', isFirstLoad);

	useEffect(() => {
		if (isFirstLoad) {
			dispatch(fetchCharacters())
		}
	}, [dispatch, isFirstLoad]);
	return (
		<PageLayout>
			<SearchBar />
			<CharactersList />
		</PageLayout>
	);
};

export default SearchPage;