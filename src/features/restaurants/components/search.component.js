import { useContext, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";

import { Searchbar } from "react-native-paper";

import { SearchContainer } from "./search.styles";

function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
}

export default Search;
