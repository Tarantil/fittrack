import classes from "./IconCard.module.css";
type IconCardProps = {
    icon: React.JSX.Element,
    children:React.ReactElement
};
export default function IconCard({icon, children}:IconCardProps){
    return (<>
    <div className={classes.card}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.content}>
            {children}
        </div>
    </div>
    </>);
}