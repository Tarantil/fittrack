import StatsCard from "./StatsCard";
import ProgressBar from '../ui/ProgressBar';
import classes from './StatsGrid.module.css';
type Stat = {
    id: string,
    icon: React.ReactElement,
    title:string,
    unit:number|string,
    unitSuffix?:string,
    result?:string,
    progressBar?:number
  };
type StatsGridProps={
    stats:Stat[]
}
export default function StatsGrid({stats}:StatsGridProps){
    return (<>
        <div className={classes.grid}>
            {stats.map(element=>
            <StatsCard key={element.id} icon={element.icon} title={element.title}>
                <>
                    <div className={classes.count}>
                        <strong>{element.unit}</strong>
                        {element.unitSuffix}
                    </div>
                    {element.result && <div className={classes.result}>{element.result}</div>}
                    {element.progressBar && <ProgressBar loaded={element.progressBar}/>}
                </>
            </StatsCard>)}
        </div>
      </>);
}