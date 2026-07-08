import ToggleButton from "./ToggleButton";
import classes from "./MainNavigation.module.css";
type MainNavigationProps={
    onSetMode:()=>void
};
export default function MainNavigation({onSetMode}:MainNavigationProps){
    return (
        <header className={classes.header}>
            <ToggleButton name="mode" onClick={onSetMode}/>
        </header>
    );
}
