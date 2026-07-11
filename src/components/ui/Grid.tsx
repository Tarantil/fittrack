import classes from './Grid.module.css';
type GridProps = {
    children:React.ReactElement,
    columns?:number
}
export default function Grid({children, columns}:GridProps){
    return (
        <div className={classes.grid}>
            {children}
        </div>
    );
}