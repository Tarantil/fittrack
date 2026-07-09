import classes from './ProgressBar.module.css';
type ProgressBarProps={
    loaded:number
}
export default function ProgressBar({loaded}:ProgressBarProps){
    return (
        <div className={classes.loadbar}>
            <span className={classes.loaded} style={{width:`${loaded}%`}}></span>
        </div>
    );
}