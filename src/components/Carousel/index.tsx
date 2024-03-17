import { useState } from "react";
import './index.css';

interface Props {
    slides: string[]
}

import ProjectImages from '../../utils/projectImages';

const Carousel = ({ slides } : Props) => {

    let [current, setCurrent] = useState(0);

    /*
    let previousSlide = () => {
        const newIndex = current === 0 ? slides.length - 1 : current - 1;
        setCurrent(newIndex);
    }

    let nextSlide = () => {
        const newIndex = current === slides.length - 1 ? 0 : current + 1;
        setCurrent(newIndex);
    }
    */

    return (
        <>
            {/*
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-purple-600 text-3xl z-50 px-3">
                <button onClick={previousSlide}>
                    <i className="bi bi-arrow-left-square-fill"></i>
                </button>
                <button onClick={nextSlide}>
                    <i className="bi bi-arrow-right-square-fill"></i>
                </button>
            </div>
            */}
            <div className="overflow-hidden relative rounded-md">
                <div 
                    className={`flex translate ease-out duration-500`}
                    style={{
                        transform: `translateX(-${current * 100}%)`
                    }}
                >
                    {slides.map((s, index) => {
                        return <ProjectImages key={index} image={s} />;
                    })}
                </div>
            </div>
            <div className="absolute bottom-0 flex justify-center gap-3 w-full -mb-7  z-50">
                {slides.map((_, index) => {
                    return (
                        <div 
                            onClick={() => {
                                setCurrent(index);
                            }}
                            key={"circle_" + index}
                            className={`rounded-full cursor-pointer border border-blue-500 slider-dot  ${
                                index === current ? "bg-purple-600 active" : "bg-neutral-400"
                            }`}
                        ></div>
                    )
                })}
            </div>
        </>
    )
}

export default Carousel;