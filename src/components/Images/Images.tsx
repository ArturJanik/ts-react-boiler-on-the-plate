import ArrowSVG from './arrow.svg';
import ArrowJPG from './arrow.jpg';
import ArrowPNG from './arrow.png';

export const Images = (): JSX.Element => {
    return (
        <div>
            <p>SVG</p>
            <img src={ArrowSVG} alt="SVG arrow" width="100px" />
            <p>JPG</p>
            <img src={ArrowJPG} alt="JPG arrow" width="100px" />
            <p>PNG</p>
            <img src={ArrowPNG} alt="PNG arrow" width="100px" />
        </div>
    )
};
