export type Stat = {
    id: string,
    icon: React.ReactElement,
    title:string,
    value:number|string,
    unit?:string,
    result?:string,
    progressBar?:number
}
