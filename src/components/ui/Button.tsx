import classes from './Button.module.css';
type ButtonProps={
    children:React.ReactNode,
    onClick?:()=>void,
    variant?:'outline'|'primary',
    className?:string
}
export default function Button({children, variant, className, ...props}:ButtonProps){
    let styles = `${classes.button}`;
    if(variant){
        styles+= ` ${classes[variant]}`
    }
    return (
        <button className={`${styles} ${className}`} type="button" {...props}>{children}</button>
    );
}