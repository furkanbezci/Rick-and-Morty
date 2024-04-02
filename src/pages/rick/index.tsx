import List from "./components/List";
import SearchBar from "./components/SearchBar";
import useSearch from "./hooks/useSearch";
import useSelect from "./hooks/useSelect";

export const Main = () => {

  const { listData, searchInputProps, queryResult } = useSearch();
  const {  onSelectItem, deleteItem ,updatedListData, handleKeyDown, } = useSelect();
  const { loading, error } = queryResult;

  return (
    <div style={{ padding: 10 }}>
      <SearchBar
        searchInputProps={searchInputProps}
        deleteItem={deleteItem}
        updatedListData={updatedListData}
        handleKeyDown={handleKeyDown}
      />
      {loading && <div> Loading...</div>}
      {error ? (
        <div> Error...</div>
      ) : (
        <List
          listData={listData}
          onSelectItem={onSelectItem}
          updatedListData={updatedListData}
          searchInputProps={searchInputProps}
          handleKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};
