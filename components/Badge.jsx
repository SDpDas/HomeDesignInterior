'use client';
import CountUp from 'react-countup';

const Badge = ({
    containerStyles,
    endCountNum,
    endCountText,
}) => {
    return(
        <div className={`${containerStyles}`}>
            <div className='flex items-center justify-center gap-x-2'>
                <div className='text-4xl leading-name font-bold'>
                    <CountUp  end={endCountNum} delay={1} duration={4}/>
                    {endCountText}
                </div>
            </div>
        </div>
    ) 
}

export default Badge;