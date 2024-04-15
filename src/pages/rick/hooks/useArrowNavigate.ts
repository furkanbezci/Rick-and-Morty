import { useEffect, useState } from "react"
import { ItemType } from "../../../types/common"

interface ArrowNavigateProps {
    listData: ItemType[],
    searchBarListData: string[],
}

const useArrowNavigate = ({ listData, searchBarListData }: ArrowNavigateProps) => {

    const [elements, setElements] = useState<HTMLElement[]>([])

    const dispatchKeyEvent = (event: KeyboardEvent) => {

        const currentIndex = elements.findIndex((element: HTMLElement) => element === document.activeElement);
        const isFocusedOnInput = document.activeElement === document.querySelector('input')

        const focusMatchedElement =(value : number)=>{
                const selectedElementIndex = (currentIndex + value) % elements.length
                elements[selectedElementIndex]?.focus()
        }

        if (!isFocusedOnInput) {
            if (["ArrowRight", "ArrowDown"].includes(event.key)) {
                focusMatchedElement(1)
            }
            if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
                focusMatchedElement(-1)
            }
        }
    }

    useEffect(() => {
        if (listData.length) {
            const tabbableElements: HTMLElement[] = Array.from(document.querySelectorAll('div.list-line,div.tag'))
            setElements(tabbableElements)
        }
    }, [listData, searchBarListData])

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if ((["ArrowDown", "ArrowUp"].includes(event.key))){
                event.preventDefault()
            }
            dispatchKeyEvent(event,)
        }
        document.addEventListener('keydown', handleKey)
        return () => { document.removeEventListener('keydown', handleKey) }
    }, [elements])
}
export default useArrowNavigate