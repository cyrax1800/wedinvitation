'use client'

import React, { useEffect, useState } from 'react'
import { NumberBox } from './NumberBox';

interface TimeProps {
    countDownDuration: number
}

export const TimerContainer = ({ countDownDuration }: TimeProps) => {
    let countDownDate = new Date().getTime() + countDownDuration;
    var now = new Date().getTime();
    var difference = countDownDate - now;

    const [time, setTime] = useState<number[]>([
        Math.floor(difference / (1000 * 60 * 60 * 24)),
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((difference % (1000 * 60)) / 1000),
        Math.floor(difference / (1000 * 60 * 60 * 24)),
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((difference % (1000 * 60)) / 1000),
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

            tmpTime = [days, hours, minutes, seconds, tmpTime[0], tmpTime[1], tmpTime[2], tmpTime[3]]
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
                <NumberBox id={`days${time[0]}-${time[4]}`} key={`days${time[0]}-${time[4]}`} current={time[0]} previous={time[4]} unit="Days" />
                <span className="text-5xl -mt-12 md:-mt-12 inline-block md:text-7xl font-normal text-white-800 ">:</span>
                <NumberBox id={`hours${time[1]}-${time[5]}`} key={`hours${time[1]}-${time[5]}`} current={time[1]} previous={time[5]} unit="Hours" />
                <span className="text-5xl -mt-12 md:-mt-12 inline-block md:text-7xl font-normal text-white-800 ">:</span>
                <NumberBox id={`minutes${time[2]}-${time[6]}`} key={`minutes${time[2]}-${time[6]}`} current={time[2]} previous={time[6]} unit="Minutes" />
                <span className="text-5xl -mt-12 md:-mt-12 inline-block md:text-7xl font-normal text-white-800 ">:</span>
                <NumberBox id={`seconds${time[3]}-${time[7]}`} key={`seconds${time[3]}-${time[7]}`} current={time[3]} previous={time[7]} unit="Seconds" />
            </div>

        </div>
    )
}