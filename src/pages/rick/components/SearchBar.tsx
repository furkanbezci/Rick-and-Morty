import { SearchInputPropsType } from "../../../types/common";

interface SearchBarProps {
  searchInputProps: SearchInputPropsType,
  deleteItem: (name: string) => void,
  searchBarListData: string[],
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>, name: string) => void
}

const SearchBar = ({
  searchInputProps,
  deleteItem,
  searchBarListData,
  handleKeyDown,
}: SearchBarProps) => {


  return (
    <div className="input-wrapper">
      <div className="tag-group">

        {searchBarListData?.map((item, index) => (

          item ? <div key={"key" + index} className="tag" onClick={() => deleteItem(item)} tabIndex={0} onKeyDown={(e) => handleKeyDown(e, item)}  >
            {item}
            <button className="x-icon" tabIndex={-1} />
          </div> : null)

        )}
        <input type="text" placeholder="search" {...searchInputProps} tabIndex={0} />
      </div>
    </div>
  );
};

export default SearchBar;
