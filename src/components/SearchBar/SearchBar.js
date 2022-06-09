import { useDispatch, useSelector } from "react-redux";
import { characters_actions } from "../../store/Characters_Slice";
import { fetchCharacters } from '../../store/Characters_Actions';
import { FilterContainer, InputContainer, SearchInput, StatusInput, Option } from './SearchBar.styles';

let filterTimeout;

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const status = useSelector(state => state.status);

  const searchHandler = async (event) => {
    event.preventDefault();
    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(async () => {
      dispatch(fetchCharacters());
    }, 300)
  }

  const searchInputHandler = (event) => {
    dispatch(characters_actions.updateSearch(event.target.value));
    searchHandler(event);
  }

  const statusDropdownChange = (event) => {
    dispatch(characters_actions.setStatus(event.target.value));
    dispatch(fetchCharacters());
  }

  return (
    <FilterContainer onSubmit={searchHandler}>

      <InputContainer>
        <StatusInput value={status} onChange={statusDropdownChange}>
          <Option value=""> ALL STATUSES </Option>
          <Option value="alive"> ALIVE </Option>
          <Option value="dead"> DEAD </Option>
          <Option value="unknown"> UNKNOWN </Option>
        </StatusInput>

        <SearchInput
          type="text"
          id="search"
          value={search}
          onChange={searchInputHandler}
          placeholder="Search for character name"
        />

      </InputContainer>
    </FilterContainer>
  );
};

export default SearchBar; <input type='text' />