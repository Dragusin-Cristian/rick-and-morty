import { charactersActions } from "./Characters_Slice";

const buildFetchUrl = (search, status) => {
	let url = new URL(process.env.REACT_APP_GET_CHARACTERS);

	const paramsObj = (() => {
		const paramsObj = {};
		if (search) paramsObj.name = search;
		if (status) paramsObj.status = status;

		return paramsObj;
	})();

	const params = new URLSearchParams(paramsObj).toString();

	return `${url}?${params}`;
}

export const fetchCharacters = () => {

	return async (dispatch, getState) => {
		const { search, status } = getState();
		const fetchData = async () => {
			dispatch(charactersActions.setIsLoading(true));
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
			dispatch(charactersActions.setCharacters(characters));
			dispatch(charactersActions.setIsLoading(false));
			dispatch(charactersActions.setErrorState(null));
			dispatch(charactersActions.setIsFirstLoad(false));
		} catch (e) {
			// handle error with a notification
			// console.error(e);
			dispatch(charactersActions.setCharacters([]));
			dispatch(charactersActions.setIsLoading(false));
			dispatch(charactersActions.setErrorState(e.message));
		}
	}
}
