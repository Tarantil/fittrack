import { Link } from 'react-router-dom'
import classes from './Button.module.css'
type ButtonLinkProps={
    url:string,
    children:React.ReactNode,
    variant?:'outline'|'primary',
    className?:string
} & React.RefAttributes<HTMLAnchorElement>;
export default function ButtonLink({url, children, variant, className}:ButtonLinkProps){
    let styles = `${classes.button}`;
    if(variant){
        styles+= ` ${classes[variant]}`
    }
    return (
        <Link to={url} className={`${styles} ${className || ''}`}>{children}</Link>
    )
}