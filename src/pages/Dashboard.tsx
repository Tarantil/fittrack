import IconCard from '../components/IconCard';
import classes from './Dashboard.module.css';
import { Dumbbell, Flame, TrendingUp, Goal } from 'lucide-react';
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
      <div className={classes["cards-mini"]}>
        <IconCard icon={<Dumbbell/>}>
          <div className="stats-content">
            <h3>Workouts this week</h3>
            <div className="count">
              <strong>5</strong>
            </div>
            <div className="result result_grow">↑ 12% vs last week</div>
          </div>
        </IconCard>
        <IconCard icon={<Flame/>}>
          <div className="stats-content">
            <h3>Current streak</h3>
            <div className="count">
              <strong>8</strong> days
            </div>
            <div className="result">Keep it up!</div>
          </div>
        </IconCard>
        <IconCard icon={<TrendingUp/>}>
          <div className="stats-content">
            <h3>Total volume</h3>
            <div className="count">
              <strong>18 400</strong> kg
            </div>
            <div className="result result_grow">↑ 8% vs last week</div>
          </div>
        </IconCard>
        <IconCard icon={<Goal/>}>
          <div className="stats-content">
            <h3>Goal progress</h3>
            <div className="count">
              <strong>73%</strong>
            </div>
            <div className="loadbar">
              <span className="loaded" style={{width:'73%'}}></span>
            </div>
          </div>
        </IconCard>
      </div>
    </>);
  }