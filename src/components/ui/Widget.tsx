import classes from './Widget.module.css';
import { Link } from 'react-router-dom'; 
type WidgetProps = {
    title:string,
    link?:{
        url:string,
        title:string
    },
    children:React.ReactElement
};
export default function Widget({title, link, children}:WidgetProps){
    return (
        <>
        <div className={classes.head}>
            <h2>{title}</h2>
            {link && <Link to={link.url} className={classes.button}>{link.title}</Link>}
        </div>
        <div>
            {children}
        </div>
        </>
    );
}