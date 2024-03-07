import { useState } from "react";
import { Searchbar as Search } from "react-native-paper";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Search
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default Searchbar;
