import classes from './RoundIcon.module.css'
type RoundIconProps={
    icon:React.ReactElement,
    size:'small'|'medium'|'large'|'extra-large'
}
export default function RoundIcon({icon, size}:RoundIconProps){
    return (
        <div className={`${classes.icon} ${classes[size]}`}>{icon}</div>
    );
}