export default function IconArrow({ fillColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="60"
      viewBox="0 0 100 60"
      fill={fillColor}
    >
      <rect
        x="1"
        y="1"
        width="98"
        height="58"
        rx="29"
        stroke="#FEFCE1"
        stroke-width="2"
      />
      <path d="M56 19L67 30L56 41" stroke="#FEFCE1" stroke-width="2.5" />
      <path d="M67 30H33" stroke="#FEFCE1" stroke-width="2.5" />
    </svg>
  );
}
