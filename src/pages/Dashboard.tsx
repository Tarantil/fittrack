import BodyStats from '../components/features/BodyStats';
import Goals from '../components/features/Goals';
import RecentWorkouts from '../components/features/RecentWorkouts';
import Records from '../components/features/Records';
import StatsGrid from '../components/features/StatsGrid';
import WorkoutCalendar from '../components/features/WorkoutCalendar';
import ButtonLink from '../components/ui/ButtonLink';
import Grid from '../components/ui/Grid';
import type {Stat} from '../types/stat.types';
import type { Workout } from '../types/workout.types';
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
const WORKOUTS:Workout[]=[
  {
    id:'leg-day-130726',
    icon:<Dumbbell />,
    name:"Leg Day",
    date:"Yesterday",
    duration:72,
    exerciseCount:18,
    totalVolume:18400
  },
  {
    id:'push-day-110726',
    icon:<Dumbbell />,
    name:"Push Day",
    date:"July 11",
    duration:72,
    exerciseCount:18,
    totalVolume:18400
  },
  {
    id:'pull-day-090726',
    icon:<Dumbbell />,
    name:"Pull Day",
    date:"July 9",
    duration:72,
    exerciseCount:18,
    totalVolume:18400
  },
  {
    id:'leg-day-140726',
    icon:<Dumbbell />,
    name:"Leg Day",
    date:"July 7",
    duration:72,
    exerciseCount:18,
    totalVolume:18400
  },
  {
    id:'push-day-150726',
    icon:<Dumbbell />,
    name:"Push Day",
    date:"July 5",
    duration:72,
    exerciseCount:18,
    totalVolume:18400
  }
]
export default function Dashboard() {
    return(
    <>
      <div className={classes.head}>
        <div>
          <h1>Welcome, Ilona!👋</h1>
          <p>You've got this! Let's crush your goals today.</p>
        </div>
        <ButtonLink url='/workouts/new' variant='primary'>+ Add Workout</ButtonLink>
      </div>
      <StatsGrid stats={STATS}/>
      <Grid columns={2}>
        <RecentWorkouts workouts={WORKOUTS}/>
        <WorkoutCalendar />
      </Grid>
      <Grid columns={3}>
        <BodyStats/>
        <Records />
        <Goals />
      </Grid>
    </>);
  }