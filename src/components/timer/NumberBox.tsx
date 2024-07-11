import React from 'react'

interface numProp {
    num: number,
    unit: string,
    flip: boolean,
};

export const NumberBox = ({ num, unit, flip }: numProp) => {
    return (
        <div className="flex flex-col items-center mt-4 px-1 md:px-2">
            <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-16 h-16 text-2xl md:w-32 md:h-32 md:text-4xl mt-4 ">
                <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>

                <span className="text-3xl absolute text-rose-500 z-10 font-bold font-redhat md:text-7xl font-mono ">
                    {num < 10 ? ("0" + num) : num}
                </span>

                <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>

                <div className={`absolute  w-full h-1/2 top-0  rounded-t-lg rounded-b-lg z-5 ${flip ? 'animate-flip bg-rose-200' : 'bg-transparent'}`}></div>
                {/* Two Small Dots */}
                {/* <div className="absolute -right-1 top-[26px] md:top-[58px] rounded-full w-[12px] h-[12px] bg-[#ffffff]"></div>
                <div className="absolute -left-1 top-[26px] md:top-[58px] rounded-full w-[12px] h-[12px] bg-[#ffffff]" ></div> */}

            </div>
            <p className="text-lg mt-3 font-semibold text-rose-200  md:text-2xl ">
                {unit}
            </p>
        </div>
    )
}