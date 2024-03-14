import TitleScroll from "../TitleScroll/TitleScroll";
import { worksData } from "../../data/Works"; 
import './Works.css';
import Work from "../Work/Work";


function Works() {

    return (
        <div id="works" className="_works position-relative bg-black">
            <TitleScroll title='Works'/>
            <div className="works-container container bg-black">
                <div className="row">
                    {worksData.map((work)=> {
                        return (
                            <Work link={work.link} title={work.name} date={work.date} img={work.img} colorBg={work.colorBg}/>
                        );
                    })}
                </div>
            </div>
         </div>
    )
}

export default Works;