import Card from '../ui/Card';
import classes from './Widget.module.css';
import { Link } from 'react-router-dom'; 
type WidgetProps = {
    title:string,
    icon?:React.JSX.Element,
    link?:{
        url:string,
        title:string
    },
    children:React.ReactNode
};
export default function Widget({title, icon, link, children}:WidgetProps){
    return (
        <Card>
        <div className={classes.head}>
            <h2 className={classes.title}>{icon}{title}</h2>
            {link && <Link to={link.url} className={classes.button}>{link.title}</Link>}
        </div>
        <div>
            {children}
        </div>
        </Card>
    );
}