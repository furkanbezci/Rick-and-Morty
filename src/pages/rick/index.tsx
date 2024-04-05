import List from "./components/List";
import SearchBar from "./components/SearchBar";
import useSearch from "./hooks/useSearch";
import useSelect from "./hooks/useSelect";
import useArrowNavigate from "./hooks/useArrowNavigate";

export const Main = () => {

  const { listData, searchInputProps, queryResult } = useSearch();
  const {  onSelectItem, deleteItem ,searchBarListData, handleKeyDown, } = useSelect();

  useArrowNavigate({listData ,searchBarListData})
  const { loading, error } = queryResult;


  return (
    <div className="main-container">
      <SearchBar
        searchInputProps={searchInputProps}
        deleteItem={deleteItem}
        searchBarListData={searchBarListData}
        handleKeyDown={handleKeyDown}
      />
      {loading && <div> Loading...</div>}
      {error ? (
        <div> Error...</div>
      ) : (
        <List
          listData={listData}
          onSelectItem={onSelectItem}
          searchBarListData={searchBarListData}
          searchInputProps={searchInputProps}
          handleKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};
