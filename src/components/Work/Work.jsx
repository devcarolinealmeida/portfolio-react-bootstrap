import IconArrow from "../IconArrow/IconArrow";

function Work(props) {
  return (
    <div href={props.link} target="_blank" rel="noreferrer">
      <div className="list-item d-flex flex-column flex-md-row ">
        <div className="workFigure" style={{backgroundColor: props.colorBg}}
       >
          <img 
          className="workImg"
          src={props.img} alt="" />
        </div>
        <div className="workInfo d-flex flex-column justify-content-between">
          <div className="_title">
            <a href={props.link} target="_blank" rel="noreferrer" className="stretched-link">{props.title}</a>
          </div>
          <div className="d-flex justify-content-between align-items-end w-100">
            <span>{props.date}</span>
            <div className="_cta">
              <IconArrow fillColor="hsla(56, 94%, 94%, 1)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
