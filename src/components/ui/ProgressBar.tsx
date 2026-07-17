import classes from './ProgressBar.module.css';
type ProgressBarProps={
    percentage:number,
    showPercentage?:boolean
}
export default function ProgressBar({percentage, showPercentage}:ProgressBarProps){
    return (
        <div className={classes.wrapper}>
            <div className={classes.loadbar}>
                <span className={classes.loaded} style={{width:`${percentage}%`}}></span>
            </div>
            {showPercentage && <span className={classes.text}>{percentage}%</span>}
        </div>
    );
}