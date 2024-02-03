import {useState,useEffect} from 'react';
function TimeComp(){
    const [time, setTime]=useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
      }, []);

    useEffect(() => {
        const endOfMinute = new Date(time);
        endOfMinute.setSeconds(60);
        const timeUntilNextMinute = endOfMinute - time;
        const timeoutId = setTimeout(() => {
            console.log('End of minute reached!');
          }, timeUntilNextMinute);
        return () => clearTimeout(timeoutId);      
       
    }, [time])
    
    const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
     };
    return (
        <div>{formatTime(time)}</div>
    )
    
}
export default TimeComp;