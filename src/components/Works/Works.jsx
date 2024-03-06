import TitleScroll from "../TitleScroll/TitleScroll";
import { worksData } from "../../data/Works"; 
import './Works.css';
import Work from "../Work/Work";


function Works() {

    return (
        <div id="works">
            <TitleScroll title='Works'/>
            <div className="works-container container bg-black">
                <div className="row">
                    {worksData.map((work)=> {
                        return (
                            <Work link={work.link} title={work.name} category={work.category}/>
                        );
                    })}
                </div>
            </div>
         </div>
    )
}

export default Works;