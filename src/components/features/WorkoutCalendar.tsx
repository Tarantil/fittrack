import Widget from "../layout/Widget";
import Calendar from "../ui/Calendar";
import {CalendarDays} from "lucide-react";

export default function WorkoutCalendar(){
    return (
            <Widget icon={<CalendarDays/>} title="Workout Calendar">
                <Calendar/>
            </Widget>
    );
}