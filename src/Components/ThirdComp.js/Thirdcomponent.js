import './three3.css'
import './three1.css';
import './three2.css';
import './three4.css';
import './three5.css';
import img1 from '../../images/OFAC.png';
import img2 from '../../images/UN.png';
function Thirdcomponent()
{
    return (
        <div>
            <div className="o7 o6 o5  o4 o1">
                <h3 className="text-3.5xl font-bold text-navyBlue text-center o10 font-notoSans">Reliable,global data sources</h3><h4
                className="o12 text-lg font-normal text-center text-navyBlue font-notoSans">We support and frequently update our data data sources from global lists including OFAC, HM Treasury,UN, and EU to deliver your relevant and up-to-date information.</h4>
            </div>
            <div className="grid w-5/6 gc4 g8 m-auto lg:grid-cols-4 lg:gap-10">
                <div className="f fc ic jc">
                    <img src={img1}/>
                </div>
                <div className="f fc ic jc">
                    <img src={img2}/>
                </div>
                <div className="f fc ic jc">
                    <img src={img1}/>
                </div>
                <div className="f fc ic jc">
                    <img src={img2}/>
                </div>
            </div>
        </div>

    )
}
export default Thirdcomponent;