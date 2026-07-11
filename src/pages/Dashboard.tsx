import RecentWorkouts from '../components/features/RecentWorkouts';
import StatsGrid from '../components/features/StatsGrid';
import Grid from '../components/ui/Grid';
import classes from './Dashboard.module.css';
import { Dumbbell, Flame, TrendingUp, Goal } from 'lucide-react';
type Stat = {
  id: string,
  icon: React.ReactElement,
  title:string,
  unit:number|string,
  unitSuffix?:string,
  result?:string,
  progressBar?:number
};
const STATS:Stat[] =[
  {
    id:'workouts-this-week',
    icon:<Dumbbell/>,
    title:"Workouts this week",
    unit:5,
    result:"↑ 12% vs last week",
  },
  {
    id:'current-streak',
    icon:<Flame/>,
    title:"Current streak",
    unit:8,
    unitSuffix:'days',
    result:"Keep it up!",
  },
  {
    id:'total-volume',
    icon:<TrendingUp/>,
    title:"Total volume",
    unit:18400,
    unitSuffix:'kg',
    result:"↑ 12% vs last week",
  },
  {
    id:'goal-progress',
    icon:<Goal/>,
    title:"Goal progress",
    unit:'73%',
    progressBar:73,
  }
];
export default function Dashboard() {
    return(
    <>
      <div className={classes.head}>
        <div>
          <h1>Welcome, Ilona!👋</h1>
          <p>You've got this! Let's crush your goals today.</p>
        </div>
        <button type="button">+ Add Workout</button>
      </div>
      <StatsGrid stats={STATS}/>
      <Grid columns={2}>
        <RecentWorkouts />
      </Grid>
      
    </>);
  }