'use client'

import React, { useEffect, useState } from 'react'
import { NumberBox } from './NumberBox';

interface TimeProps {
    countDownDuration: number
}

export const TimerContainer = ({ countDownDuration }: TimeProps) => {
    const [flip, setFlip] = useState<boolean[]>([false, false, false, false]);

    let countDownDate = new Date().getTime() + countDownDuration;
    var now = new Date().getTime();
    var difference = countDownDate - now;

    const [time, setTime] = useState<number[]>([
        Math.floor(difference / (1000 * 60 * 60 * 24)), 
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 
        Math.floor((difference % (1000 * 60)) / 1000)
    ]);

    useEffect(() => {
        var tmpTime = time
        var updateTime = setInterval(() => {
            var now = new Date().getTime();
            var difference = countDownDate - now;

            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setFlip([days != tmpTime[0], hours != tmpTime[1], minutes != tmpTime[2], seconds != tmpTime[3]])
            tmpTime = [days, hours, minutes, seconds]
            setTime(tmpTime)

            if (difference <= 0) {
                clearInterval(updateTime);
                console.log("The Launch Has Started");
            }
        }, 1000)

        return () => {
            clearInterval(updateTime);
        }

    }, [countDownDuration]);

    return (
        <div>
            <div className="py-6 flex items-center justify-between md:mt-2 rounded-xl md:px-6 md:py-8 ">
                <NumberBox num={time[0]} unit="Days" flip={flip[0]} />
                <span className="text-5xl -mt-4 md:-mt-8 inline-block md:text-7xl font-normal text-gray-800 ">:</span>
                <NumberBox num={time[1]} unit="Hours" flip={flip[1]} />
                <span className="text-5xl -mt-4 md:-mt-8 inline-block md:text-7xl font-normal text-gray-800 ">:</span>
                <NumberBox num={time[2]} unit="Minutes" flip={flip[2]} />
                <span className="text-5xl -mt-4 md:-mt-8 inline-block md:text-7xl font-normal text-gray-800 ">:</span>
                <NumberBox num={time[3]} unit="Seconds" flip={flip[3]} />
            </div>

        </div>
    )
}