
 interface ItemType{
    name: string,
    image: string,
    episode: any[]  ,
  } 
 
  interface SearchInputPropsType{
    value: string,
    onChange: (e: any) => void
  }
  export type {ItemType, SearchInputPropsType}