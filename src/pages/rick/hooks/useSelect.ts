import { useState } from "react";

const useSelect = () => {
  const [searchBarListData, setSearchBarListData] = useState([]);

  const onSelectItem = (selectedItemName: string,) => {
    let newArr: any = [...searchBarListData];
    const isDuplicate = newArr.includes(selectedItemName);

    if (isDuplicate) {
      deleteItem(selectedItemName);
    } else {
      newArr.push(selectedItemName);
      setSearchBarListData(newArr);
    }
  };

  const deleteItem = (selectedItemName: string) => {
    let newArr = [...searchBarListData];

    newArr = newArr = newArr.filter((item: any) => item !== selectedItemName);
    setSearchBarListData(newArr);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, item: string) => {
    if (e.key === "Enter") {
      onSelectItem(item)
    }
    if (e.key === "Backspace") {
      deleteItem(item)
    }
  }

  return {
    onSelectItem,
    deleteItem,
    searchBarListData,
    handleKeyDown,
  };
};
export default useSelect;
