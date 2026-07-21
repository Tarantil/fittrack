import classes from './Goals.module.css';
import Widget from "../layout/Widget";
import ProgressBar from '../ui/ProgressBar';

export default function Goals(){
    return (
        <Widget title="Goals" link={{url:'/progress', title:'View All'}} size='small'>
            <div className={classes.goal}>
                <div className={classes.head}>
                    <span>Hip Trust</span>
                    <span>150kg</span>
                </div>
                <ProgressBar percentage={80} showPercentage={true}/>
            </div>
            <div className={classes.goal}>
                <div className={classes.head}>
                    <span>Hip Trust</span>
                    <span>150kg</span>
                </div>
                <ProgressBar percentage={80} showPercentage={true}/>
            </div>
        </Widget>
    );
}