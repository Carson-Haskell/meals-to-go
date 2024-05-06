import { useContext, useState, useEffect } from "react";
import { LocationContext } from "../../../services/location/location.context";

import { Searchbar } from "react-native-paper";

import { SearchContainer } from "./search.styles";

function Search() {
  const { keyword, search } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

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
