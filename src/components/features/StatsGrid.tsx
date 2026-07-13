import StatCard from "./StatCard";
import ProgressBar from '../ui/ProgressBar';
import type { Stat } from '../../types/stat.types';
import classes from './StatsGrid.module.css';
import Grid from "../ui/Grid";

type StatsGridProps = {
    stats: Stat[]
}
export default function StatsGrid({ stats }: StatsGridProps) {
    return (
        <Grid columns={4}>
            {stats.map(element =>
                <StatCard key={element.id} icon={element.icon} title={element.title}>
                    <div className={classes.count}>
                        <strong>{element.value}</strong>
                        {element.unit}
                    </div>
                    {element.result && <div className={classes.result}>{element.result}</div>}
                    {element.progressBar != null && <ProgressBar percentage={element.progressBar} />}
                </StatCard>)}
        </Grid>
    );
}