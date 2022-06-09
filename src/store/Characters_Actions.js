import { characters_actions } from "./Characters_Slice";

const buildFetchUrl = (search, status) => {
	let link;
	if (search && !status) {
		link = `${process.env.REACT_APP_GET_CHARACTERS}/?name=${search}`;
	} else if (!search && status) {
		link = `${process.env.REACT_APP_GET_CHARACTERS}/?status=${status}`;
	} else if (search && status) {
		link = `${process.env.REACT_APP_GET_CHARACTERS}/?name=${search}&status=${status}`;
	} else if (!search && !status) {
		link = `${process.env.REACT_APP_GET_CHARACTERS}`;
	}
	return link;
}

export const fetchCharacters = () => {
	return async (dispatch, getState) => {
		const { search, status } = getState();
		const fetchData = async () => {
			dispatch(characters_actions.setIsLoading(true));
			const response = await fetch(buildFetchUrl(search, status));
			if (!response.ok) {
				switch (response.status) {
					case 404:
						throw new Error("No characters were found");
					default:
						throw new Error("Could not fetch the characters");
				}
				
			}
			const data = await response.json();
			return data.results;
		}

		try {
			const characters = await fetchData();
			dispatch(characters_actions.setCharacters(characters));
			dispatch(characters_actions.setIsLoading(false));
			dispatch(characters_actions.setErrorState(null));
			dispatch(characters_actions.setIsFirstLoad(false));
		} catch (e) {
			// handle error with a notification
			// console.error(e);
			dispatch(characters_actions.setCharacters([]));
			dispatch(characters_actions.setIsLoading(false));
			dispatch(characters_actions.setErrorState(e.message));
		}
	}
}
