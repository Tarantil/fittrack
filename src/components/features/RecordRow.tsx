import RoundIcon from '../ui/RoundIcon';
import classes from './RecordRow.module.css';
type RecordRowProps={
    icon:React.ReactElement,
    name:string,
    volume:number,
    date:string
}
export default function RecordRow({icon, name, volume, date}:RecordRowProps){
    return (
        <div className={classes.row}>
            <div className={classes.name}>
                <RoundIcon icon={icon} size="small" />
                <p>{name}</p>
            </div>
            <div>
                <p>{volume} kg</p>
            </div>
            <div className={classes.date}>
                {date}
            </div>
        </div>
    );
}