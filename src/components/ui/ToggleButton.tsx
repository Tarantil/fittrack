import classes from "./ToggleButton.module.css";
type ToggleButtonProps = {
    name:string,
    icon?: React.ReactElement,
    onChange:()=>void,
    checked:boolean,
}
export default function ToggleButton({name, icon, ...props}:ToggleButtonProps){
    return (
        <label htmlFor={name} className={classes["toggle-button"]}>
            <input type="checkbox" name={name} id={name} {...props}/>
            <span className={classes.slider}>
                <span className={classes.tumbler}>
                    {icon}
                </span>
            </span>
        </label>
    );
}