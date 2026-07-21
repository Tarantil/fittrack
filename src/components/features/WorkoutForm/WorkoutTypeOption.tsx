import classes from './WorkoutTypeOption.module.css';
type WorkoutTypeOptionProps = {
    icon: React.ReactElement,
    title:string
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function WorkoutTypeOption({icon, title, ...props}:WorkoutTypeOptionProps){
    return (
        <label className={classes.option}>
            <input {...props} type="radio" name="workout-type" required/>
            {icon}
            <span>{title}</span>
        </label>
    );
}