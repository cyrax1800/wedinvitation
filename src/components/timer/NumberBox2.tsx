import React from 'react'

const padStart = (number: number): string => {
    return number.toString().padStart(2, '0')
}

interface numProp {
    current: number,
    unit: string,
    previous?: number,
    id: string
};

export const NumberBox2 = ({ current, unit, previous, id }: numProp) => {
    return (
        <>
            <div className="w-20 lg:w-44">
                <p suppressHydrationWarning className="lg:top-8 left-0 right-0 text-center text-theme_softRed text-4xl lg:text-8xl font-bold">
                    {typeof current === 'undefined' ? '00' : padStart(current)}
                </p>
                <p className="text-lg mt-3 font-semibold text-rose-200  md:text-2xl text-center">
                    {unit}
                </p>
            </div>
        </>
    )
}