import { useEffect } from "react";

export function useClickOutside(element:React.RefObject<HTMLElement>, callback:()=>void, enabled:boolean){
    
    useEffect(()=>{

        const outsideClickListener = (event:MouseEvent) => {
        
            if(element?.current && event.target instanceof Node){
                if (!element.current.contains(event.target)) { 
                    callback();
                }
            }
            
        }
        if(enabled){
            document.addEventListener('click',outsideClickListener);
        }
        return () => {
            document.removeEventListener('click',outsideClickListener);
        }
    },[element, callback, enabled])
    
}