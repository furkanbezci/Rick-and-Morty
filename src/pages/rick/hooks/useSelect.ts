import { useState } from "react";

const useSelect = () => {
  const [updatedListData, setUpdatedListData] = useState([]);

  const onSelectItem = (selectedItemName: string, ) => {
    let newArr: any = [...updatedListData];
    const isDuplicate = newArr.includes(selectedItemName);

    if (isDuplicate) {
      deleteItem(selectedItemName);
    } else {
      newArr.push(selectedItemName);
      setUpdatedListData(newArr);
    }
  };

  const deleteItem = (selectedItemName: string) => {
    let newArr = [...updatedListData];

    newArr = newArr = newArr.filter((item: any) => item !== selectedItemName);
    setUpdatedListData(newArr);
  };

  const handleKeyDown =(e:React.KeyboardEvent<HTMLDivElement>,item:string)=>{
    if(e.keyCode === 13){ // enter
      onSelectItem(item)
    }
    if(e.keyCode === 8){ //Backspace
      deleteItem(item)
    }
  } 
  
  return {
    onSelectItem,
    deleteItem,
    updatedListData,
    handleKeyDown,
  };
};
export default useSelect;
