import { Trophy } from "lucide-react";
import Widget from "../layout/Widget";
import RecordRow from "./RecordRow";



export default function Records(){
    return (
            <Widget title="Personal Records" link={{url:'/progress', title:'View All'}} size='small'>
                <RecordRow icon={<Trophy />} name="Hip Trust" volume={108} date="May 18, 2024"/>
                <RecordRow icon={<Trophy />} name="Hip Trust" volume={108} date="May 18, 2024"/>
                <RecordRow icon={<Trophy />} name="Hip Trust" volume={108} date="May 18, 2024"/>
            </Widget>
        
    );
}