import { createContext, useState } from "react";

const CharactersContext = createContext({
	characters: [],
	fetchCharacters: () => { },
	search: '',
	updateSearch: () => { },
	isLoading: true
})


export const CharactersContextProvider = (props) => {
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const fetchCharacters = () => {
		fetch(process.env.REACT_APP_GET_CHARACTERS)
			.then((response => {
				return response.json();
			})).then(data => {
				setCharacters(data.results);
				setIsLoading(false);
				console.log("FETCHED");
			});
	}

	const updateSearch = (s) => {
		setSearch(s);
	}


	return <CharactersContext.Provider value={{
		characters: characters,
		fetchCharacters: fetchCharacters,
		search: search,
		updateSearch: updateSearch,
		isLoading: isLoading
	}}>
		{props.children}
	</CharactersContext.Provider>


}

export default CharactersContext;