import './four1.css';
import './four2.css';
import './four3.css';
import './four4.css';
import './four5.css';
import './four6.css';
import './four7.css';
import './four8.css';
import img3 from '../images/modal.png'
import Child1 from "./Child1";
function Fourthcomponent()
{
    const s = 'Streamline screening & case management';
    let arr=[{d:'Automatically screen all new customers'},{d:'Get a complete,unified picture of risky customers and transactions'},{d:'Flexible configuration options to minimize false positives'},{d:'Enable ongoing monitoring and let Flagright inform you on evolving customer risks automatically'}];
    return(
        <div className="bg-[#F8FAFE] font-notoSans text-center py-8 md:py-16">
            <div className="flex flex-col px-4 md:flex-row md:justify-center md:px-4 ">
                <div className="max-w-screen-sm pt-6 text-center md:ml-10 sm:p-10 md:p-8 md:pr-3 lg:p-14 lg:pt-6"><h1
                    className="pb-3 text-3xl font-bold text-left md:px-0 ">{s}</h1>
                    {arr.map((items)=>(<Child1 title={items.d}/>))}
                </div>
                <div className="text-left md:min-w-[55%] lg:min-w-[0]">
                    <div className="relative">
                        <span>
                            <span
                        style={{boxSizing:'border-box',display:'inline-block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:'1',border:'0',margin:'0',padding:'0',position:'relative',maxWidth:'100%'}}>
                                <span style={{boxSizing:'border-box',display:'block',width:'initial',height:'initial',background:'none',opacity:'1',border:'0',margin:'0',padding:'0',maxWidth:'100%'}}><img style={{display:'block',maxWidth:'100%',width:'initial',height:'initial',background:'none',opacity:'1',border:'0',margin:'0',padding:'0'}} alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27760%27%20height=%27526%27/%3e"/>
                                </span>
                                <img alt="Picture 1" src="https://www.flagright.com/_next/static/media/fincrime_3.a7cb4741.svg?imwidth=640"
                        data-nimg="intrinsic"
                        style={{position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',padding:'0',border:'none',margin:'auto',display:'block',width:'0',height:'0',minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%'}}/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Fourthcomponent;