import Card from "./Card";
import classes from "./StatsCard.module.css";
type StatsCardProps = {
    icon: React.JSX.Element,
    title:string,
    children:React.ReactElement
};
export default function StatsCard({icon, title, children}:StatsCardProps){
    return (<>
    <Card>
        <div className={classes.card}>
            <div className={classes.icon}>{icon}</div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <div>
                    {children}
                </div>
            </div>
        </div>
    </Card>
    </>);
}