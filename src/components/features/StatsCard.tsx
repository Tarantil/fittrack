import Card from "../ui/Card";
import RoundIcon from "../ui/RoundIcon";
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
            <RoundIcon icon={icon} size="large"/>
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