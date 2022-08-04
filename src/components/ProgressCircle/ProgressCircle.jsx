import cls from './ProgressCircle.module.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ percentage, article }) => {
    return (
        <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => {
                return (
                    <div className={cls.root}>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={isVisible ? percentage : 0}
                            duration={2}
                            easingFunction={easeQuadInOut}
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value / 4}
                                        text={`${roundedValue}${article}`}
                                        styles={
                                            buildStyles({
                                                pathTransition: "none",
                                                pathColor: `#3b4ff9`,
                                                textColor: '#0e1eab',
                                                textSize: "22px",
                                                trailColor: 'aliceblue',
                                            })
                                        }
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                )
            }}
        </VisibilitySensor>
    )
}

export default ProgressCircle