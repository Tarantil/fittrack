import { Link, type LinkProps } from 'react-router-dom'
import classes from './Button.module.css'
type ButtonLinkProps={
    variant?:'ghost'|'danger-ghost'|'outline'|'primary',
} & LinkProps;
export default function ButtonLink({children, variant='ghost', className, ...props}:ButtonLinkProps){
    let styles = `${classes.button}`;
    if(variant){
        styles+= ` ${classes[variant]}`
    }
    return (
        <Link className={`${styles} ${className || ''}`} {...props}>{children}</Link>
    )
}