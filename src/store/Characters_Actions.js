import { characters_actions } from "./Characters_Slice";

export const fetchCharacters = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(characters_actions.setIsLoading(true));
            const response = await fetch(process.env.REACT_APP_GET_CHARACTERS);
            if(!response.ok) throw new Error("Could not fetch the characters");
            const data = await response.json();
            console.log(data.results);
            return data.results; 
        }

        try {
            const characters = await fetchData();
            dispatch(characters_actions.setCharacters(characters));
            dispatch(characters_actions.setIsLoading(false));
            dispatch(characters_actions.setErrorState(false));
            dispatch(characters_actions.setIsFirstLoad(false));
        } catch (e) {
            // handle error with a notification
            console.error(e);
            dispatch(characters_actions.setIsLoading(false));
            dispatch(characters_actions.setErrorState(true));
        }
    }
}
