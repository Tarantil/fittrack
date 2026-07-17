import ButtonLink from '../ui/ButtonLink';
import Card from '../ui/Card';
import classes from './Widget.module.css';
type WidgetProps = {
    title:string,
    icon?:React.JSX.Element,
    link?:{
        url:string,
        title:string
    },
    children:React.ReactNode,
    size?:'small'|'medium'
};
export default function Widget({title, icon, link, children, size}:WidgetProps){
    return (
        <Card>
        <div className={size?classes[size]:undefined}>
            <div className={classes.head}>
                <h2 className={classes.title}>{icon}{title}</h2>
                {link && <ButtonLink url={link.url} variant='outline' className={classes.button}>{link.title}</ButtonLink>}
            </div>
            <div>
                {children}
            </div>
        </div>
        </Card>
    );
}