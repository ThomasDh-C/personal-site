import React, { ReactNode } from 'react';


const SvgArrow = () => {
    const duration = ".7s";
    const cubicBezier = "0.17 0.67 0.83 0.67";
    // const cubicBezier = ".23 .66 .8 .7"; // more linear ease
    const pathThickness = "8.5px";
    const arrowheadScale = 2;
    return (
        <div className="mb-8">
            <svg viewBox="30 50 160 280" className='w-16' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path id="arrowhead" d="M 0 0 L 20 10 L 0 20 z" fill="black" transform={`translate(0, -${10 * arrowheadScale}) scale(${arrowheadScale})`} />
                <path
                    id='arrowpath'
                    fill='none'
                    stroke='black'
                    strokeWidth={pathThickness}
                    stroke-dasharray='443.13'
                    d="M169.9 57.7c0 32.1-12.3 152.6-69.7 152.6-17.1 0-42.5-5.5-42.5-26.5 0-20 26-20.5 43.2-20.5 49.8 0 64.8 58.4 68.1 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        values="443.13;0"
                        dur={duration}
                        begin="0s"
                        calcMode="spline" keyTimes="0;1" keySplines={cubicBezier}
                        repeatCount="1" />
                </path>
                <animateMotion
                    xlinkHref="#arrowhead"
                    dur={duration}
                    begin="0s"
                    fill="freeze"
                    calcMode="spline" keyTimes="0;1" keySplines={cubicBezier}
                    repeatCount="1"
                    rotate="auto"
                >
                    <mpath xlinkHref="#arrowpath" />
                </animateMotion>

            </svg>
        </div>
    );
};

export default SvgArrow;