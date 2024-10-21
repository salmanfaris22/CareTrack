import  { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTimeOpen } from '../../features/user/adminCheck';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
//   const {  } = useSelector((state) => state.user);
const dispatch = useDispatch()
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
   
    return () => {
      clearInterval(timerID);
    };
  }, []);
  dispatch(setTimeOpen(time.toLocaleTimeString))

  return (
    <div className="ml-[100px]">
      <div className="text-white text-4xl font-bold">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default LiveClock;
