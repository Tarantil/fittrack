export function formatWorkoutDate(dateString:string){
    const today = new Date();
    const date=new Date(dateString);
    let formattedDate:string='';
    const difference = today.getTime()-date.getTime();
    const {days, hours, minutes} = getTimeDifference(difference);
    if(days<1){
        if(hours<1){
            formattedDate = `${minutes} ${minutes===1?'minute':'minutes'} ago`;
        }
        else if(hours<5){
            formattedDate = `${hours} ${hours===1?'hour':'hours'} ago`;
        }
        else{
            formattedDate = "Today"; 
        }
    }
    else if(days<=3){
        switch(days){
            case 1:
                formattedDate = "Yesterday";
                break;
            default:
                formattedDate = `${days} days ago`;
        }
    }
    else if(today.getFullYear() !== date.getFullYear()){
        formattedDate=new Intl.DateTimeFormat("en-US", {
            month:"short",
            day:"numeric",
            year:"numeric"
          }).format(date);
    }
    else{
        formattedDate=new Intl.DateTimeFormat("en-US", {
            month:"short",
            day:"numeric"
          }).format(date);
    }
    return formattedDate;
}
function getTimeDifference(t:number){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor( (t - d * cd) / ch),
        m = Math.round( (t - d * cd - h * ch) / 60000);
  if( m === 60 ){
    h++;
    m = 0;
  }
  if( h === 24 ){
    d++;
    h = 0;
  }
  return {days:d, hours:h, minutes:m};
}