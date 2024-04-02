import { ItemType, SearchInputPropsType } from "../../../types/common";

interface ListProps {
  listData: ItemType[];
  onSelectItem: (name: string) => void;
  updatedListData: string[];
  searchInputProps: SearchInputPropsType;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>, name: string) => void
}

const List = ({
  listData,
  onSelectItem,
  updatedListData,
  searchInputProps,
  handleKeyDown
}: ListProps) => {

  const { value } = searchInputProps;

  function getHighlightedText(text: any, highlight: any) {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {" "}
        {parts.map((part: any, i: any) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  }

  return (
    <div className="list-container">
      {listData?.map((item: ItemType, index: number) => (
        <div
          key={index}
          className="list-line"
          onClick={() => onSelectItem(item.name)}
          onKeyDown={(e)=>handleKeyDown(e,item.name)}
          tabIndex={0}
        >
          <input
            type="checkbox"
            checked={updatedListData.includes(item.name)}
            tabIndex={-1}
          />
          <div>
            <img src={item.image} />
          </div>
          <div>
            {getHighlightedText(item.name, value)}
            <div>{item.episode.length + " Episode"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
