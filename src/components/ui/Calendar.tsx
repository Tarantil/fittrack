import { useState } from 'react';
import Button from './Button';
import classes from './Calendar.module.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const WEEK_DAYS=[
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
]
const today = new Date();
export default function Calendar(){
    const [viewDate, setViewDate] = useState(new Date());
    const currentMonth = viewDate.getMonth();
    const currentYear = viewDate.getFullYear();
    function renderCalendar(month:number, year:number){
        const firstDay = new Date(year, month, 1).getDay();
        const firstDayIndex = firstDay === 0 ? 6 : firstDay-1;
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        const daysInMonth = new Date(year, month+1, 0).getDate();
        const remainingDays=42-firstDayIndex-daysInMonth;
        const days = [];
        for (let i = 0; i < firstDayIndex; i++) {
            const dayNum=daysInPrevMonth-firstDayIndex+i+1;
            days.push(<div key={`${month-1}-${dayNum}-${year}`} className={`${classes.day} ${classes['prev-day']}`}>{dayNum}</div>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(<div key={`${month}-${i}-${year}`} className={`${classes.day} ${today.getDate()===i && today.getMonth()===month && today.getFullYear()===year ?classes.active:''}`}>{i}</div>);
        }
        for (let i = 1; i <= remainingDays; i++) {
            days.push(<div key={`${month+1}-${i}-${year}`} className={`${classes.day} ${classes['prev-day']}`}>{i}</div>);
        }
        
        return days; 
    }
    function handleMonthChange(action:'prev'|'next'){
        setViewDate(prev=>{
            const newDate=new Date(prev);
            const month = prev.getMonth();
            newDate.setDate(1);
            if(action==='prev'){
                newDate.setMonth(month-1);
            }
            if(action==='next'){
                newDate.setMonth(month+1);
            }
            return newDate;
        })
    }
    return (
        <>
            <div className={classes.head}>
                <h3>{MONTHS[currentMonth]} {currentYear}</h3>
                <div className={classes.buttons}>
                    <Button onClick={()=>handleMonthChange('prev')}  aria-label="Previous month"><ChevronLeft /></Button>
                    <Button onClick={()=>handleMonthChange('next')}  aria-label="Next month"><ChevronRight /></Button>
                </div>
            </div>
            <div className={classes.calendar}>
                    {WEEK_DAYS.map(item=><div key={item} className={classes['day-name']}>{item}</div>)}
                    {renderCalendar(currentMonth, currentYear)}
            </div>
        </>
    );
}