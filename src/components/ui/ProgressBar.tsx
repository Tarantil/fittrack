import classes from './ProgressBar.module.css';
type ProgressBarProps={
    percentage:number
}
export default function ProgressBar({percentage}:ProgressBarProps){
    return (
        <div className={classes.loadbar}>
            <span className={classes.loaded} style={{width:`${percentage}%`}}></span>
        </div>
    );
}