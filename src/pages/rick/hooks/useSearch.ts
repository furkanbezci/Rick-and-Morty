import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHARACTERS } from "../queries";

const useSearch = () => {
  const delay = 300;
  const [getCharacters, { loading, error }] = useLazyQuery(GET_CHARACTERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [listData, setListData] = useState([]);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getCharacters({
        variables: {
          filter: {
            name: searchTerm,
          },
        },
      }).then((res: any) => {
        if (res) setListData(res.data?.characters?.results);
      });
    }, delay);
    return () => clearTimeout(timeOut);
  }, [searchTerm, delay]);

  const searchInputProps = {
    value: searchTerm,
    onChange: handleChange,
  };

  return { searchInputProps, listData, queryResult: { loading, error } };
};
export default useSearch;
