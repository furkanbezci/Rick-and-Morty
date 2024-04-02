import { SearchInputPropsType } from "../../../types/common";

interface SearchBarProps{
  searchInputProps: SearchInputPropsType,
  deleteItem: (name: string) => void,
  updatedListData: string[],
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>, name: string) => void
}

const SearchBar = ({
  searchInputProps,
  deleteItem,
  updatedListData,
  handleKeyDown,
}: SearchBarProps) => {

 

  return (
      <div className="input-wrapper">
        <div className="tag-group">
          
        {updatedListData?.map((item,index) =>(
         
          item ?  <div key={index} className="tag" onClick={()=>deleteItem(item)} tabIndex={0} onKeyDown={(e)=>handleKeyDown(e,item)}  >
              {item}
              <button className="x-icon" tabIndex={-1} />
            </div> : null )
         
          )}
        <input type="text" placeholder="search" {...searchInputProps} />
          </div>
      </div>
  );
};

export default SearchBar;
