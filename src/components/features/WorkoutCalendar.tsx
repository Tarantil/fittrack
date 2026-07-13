import Widget from "../layout/Widget";
import Calendar from "../ui/Calendar";
import Card from "../ui/Card";
import {CalendarDays} from "lucide-react";

export default function WorkoutCalendar(){
    return (
        <Card>
            <Widget icon={<CalendarDays/>} title="Workout Calendar">
                <Calendar/>
            </Widget>
        </Card>
    );
}