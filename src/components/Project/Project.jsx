import IconArrow from '../IconArrow/IconArrow'

function Project(props) {
  return (
    <div href={props.link} target="_blank" rel="noreferrer">
        <div className="list-group-item d-flex justify-content-between align-items-center gap-4 ">
          <div className="_title me-auto d-flex flex-wrap align-items-center">
            <h2 className="fs-3 fw-bold mb-0">{props.title}</h2>
            <span
              className="badge rounded-pill ms-2"
              style={{ backgroundColor: "var(--bg-" + props.category + ")" }}
            >
              &#123; {props.category} &#125;
            </span>
          </div>
          <div className="_cta">
            <IconArrow fillColor="transparent" />
          </div>
        </div>
    </div>
  );
}

export default Project;
