import BodyStats from '../components/features/BodyStats';
import Goals from '../components/features/Goals';
import RecentWorkouts from '../components/features/RecentWorkouts';
import Records from '../components/features/Records';
import StatsGrid from '../components/features/StatsGrid';
import WorkoutCalendar from '../components/features/WorkoutCalendar';
import ButtonLink from '../components/ui/ButtonLink';
import type {Stat} from '../types/stat.types';
import classes from './Dashboard.module.css';
import { Dumbbell, Flame, TrendingUp, Goal } from 'lucide-react';
const STATS:Stat[] =[
  {
    id:'workouts-this-week',
    icon:<Dumbbell/>,
    title:"Workouts this week",
    value:5,
    result:"↑ 12% vs last week",
  },
  {
    id:'current-streak',
    icon:<Flame/>,
    title:"Current streak",
    value:8,
    unit:'days',
    result:"Keep it up!",
  },
  {
    id:'total-volume',
    icon:<TrendingUp/>,
    title:"Total volume",
    value:18400,
    unit:'kg',
    result:"↑ 12% vs last week",
  },
  {
    id:'goal-progress',
    icon:<Goal/>,
    title:"Goal progress",
    value:'73%',
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
        <ButtonLink to='/workouts/new' variant='primary'>+ Add Workout</ButtonLink>
      </div>
      <StatsGrid stats={STATS}/>
      <div className={classes.layout}>
        <div className={classes.workout}>
          <RecentWorkouts />
        </div>
        <div className={classes.calendar}>
          <WorkoutCalendar />
        </div>
        <div className={classes.bodystats}>
          <BodyStats/>
        </div>
        <div className={classes.records}>
          <Records />
        </div>
        <div className={classes.goals}>
          <Goals />
        </div>
      </div>
    </>);
  }