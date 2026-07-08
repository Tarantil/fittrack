import classes from "./ToggleButton.module.css";
export default function ToggleButton({name, ...props}){
    return (
        <label htmlFor={name} className={classes["toggle-button"]}>
            <input type="checkbox" name={name} id={name} {...props}/>
            <span className={classes.slider}></span>
        </label>
    );
}