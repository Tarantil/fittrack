import classes from "./ToggleButton.module.css";
type ToggleButtonProps = {
    name:string,
    onClick:()=>void
}
export default function ToggleButton({name, ...props}:ToggleButtonProps){
    return (
        <label htmlFor={name} className={classes["toggle-button"]}>
            <input type="checkbox" name={name} id={name} {...props}/>
            <span className={classes.slider}></span>
        </label>
    );
}