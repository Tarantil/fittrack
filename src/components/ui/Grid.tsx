import classes from './Grid.module.css';
type GridProps = {
    children:React.ReactNode,
    columns?:number
}
export default function Grid({children, columns}:GridProps){
    return (
        <div className={classes.grid} style={{gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`}}>
            {children}
        </div>
    );
}