import { ItemType, SearchInputPropsType } from "../../../types/common";
import { getHighlightedText } from "../helpers/highlightText";

interface ListProps {
  listData: ItemType[];
  onSelectItem: (name: string) => void;
  searchBarListData: string[];
  searchInputProps: SearchInputPropsType;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>, name: string) => void
}

const List = ({
  listData,
  onSelectItem,
  searchBarListData,
  searchInputProps,
  handleKeyDown
}: ListProps) => {

  const { value } = searchInputProps;


  const renderListItem = () => {

    return listData?.map((item: ItemType, index: number) => (
      <div
        key={index}
        className="list-line"
        onClick={() => onSelectItem(item.name)}
        onKeyDown={(e) => handleKeyDown(e, item.name)}
        tabIndex={0}
      >
        <input
          type="checkbox"
          checked={searchBarListData.includes(item.name)}
          tabIndex={-1}
          readOnly
        />
        <div>
          <img className="image" src={item.image} alt="" />
        </div>
        <div>
          {getHighlightedText(item.name, value)}
          <div>{item.episode.length + " Episode"}</div>
        </div>
      </div>
    ))
  }


  return (
    <div className="list-container" >
      {renderListItem()}
    </div>
  );
};
export default List;
