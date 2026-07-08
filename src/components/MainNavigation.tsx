import { NavLink } from "react-router-dom"
import ToggleButton from "./ToggleButton";
type MainNavigationProps={
    onSetMode:()=>void
};
export default function MainNavigation({onSetMode}:MainNavigationProps){
    return (
        <header>
            <ToggleButton name="mode" onClick={onSetMode}/>
        </header>
    );
}
