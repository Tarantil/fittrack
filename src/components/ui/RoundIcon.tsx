import classes from './RoundIcon.module.css'
type RoundIconProps={
    icon:React.JSX.Element,
    size:'small'|'medium'|'large'
}
export default function RoundIcon({icon, size}:RoundIconProps){
    return (
        <div className={`${classes.icon} ${classes[size]}`}>{icon}</div>
    );
}