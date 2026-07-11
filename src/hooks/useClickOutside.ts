import { useEffect } from "react";

export function useClickOutside(element:React.RefObject<HTMLElement>, callback:()=>void){
    const outsideClickListener = (event:MouseEvent) => {
        
        if(element && event.target instanceof Node){
            if (!element.current.contains(event.target)) { 
                callback();
            }
        }
        
    }
    useEffect(()=>{
        document.addEventListener('click',outsideClickListener);
        return () => {
            document.removeEventListener('click',outsideClickListener);
        }
    },[element,callback])
    
}