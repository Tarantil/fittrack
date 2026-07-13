import Card from "../ui/Card";
import RoundIcon from "../ui/RoundIcon";
import classes from "./StatCard.module.css";
type StatCardProps = {
    icon: React.JSX.Element,
    title:string,
    children:React.ReactNode
};
export default function StatCard({icon, title, children}:StatCardProps){
    return (
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
    );
}