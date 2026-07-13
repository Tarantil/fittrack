import Button from './Button';
import classes from './Calendar.module.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
export default function Calendar(){
    const days = [];

    for (let i = 1; i <= 30; i++) {
        days.push(<div className={classes.day}>{i}</div>);
    }

    return (
        <>
            <div className={classes.head}>
                <h3>May 2024</h3>
                <div className={classes.buttons}>
                    <Button><ChevronLeft /></Button>
                    <Button><ChevronRight /></Button>
                </div>
            </div>
            <div className={classes.calendar}>
                <div className={classes['day-name']}>Mon</div>
                <div className={classes['day-name']}>Tue</div>
                <div className={classes['day-name']}>Wed</div>
                <div className={classes['day-name']}>Thu</div>
                <div className={classes['day-name']}>Fri</div>
                <div className={classes['day-name']}>Sat</div>
                <div className={classes['day-name']}>Sun</div>
                { days }
            </div>
        </>
    );
}