import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import carolinePhoto from "../../assets/caroline-almeida-dev.jpg";
import "./About.css";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-200vh", "0vh"],
  });

  const rotateIcon = useTransform(scrollYProgress, [0, 1], ["0deg", "-360deg"]);
  const transScroll = ' type: "inertia", velocity: 50';

  return (
    <div className="bg-black position-relative py-5" id="about" ref={ref}>
      <motion.div
        ref={ref}
        className="_about position-relative d-flex align-items-center"
        style={{
          scale: scrollYProgress,
          backgroundColor: "var(--darkGreen)",
          minHeight: "100vh",
          transition: transScroll,
        }}
      >
        <div className="container p-4 py-5 p-md-5">
          <div className="row gap-4 gap-md-0 ">
            <div className="col-12 col-md-6">
              <h4
                style={{
                  fontSize: "clamp(2rem, 0.598rem + 5.7516vw, 7.5rem)",
                  fontWeight: "600",
                  lineHeight: "80%",
                  marginBottom: "3rem",
                  position: "relative",
                }}
              >
                <span className="d-flex align-items-center z-2 position-relative ">Get to</span>
                <span className="z-2 position-relative ">know me</span>
                <span className="figSvg z-0">
                  <motion.svg
                    style={{
                      rotate: rotateIcon,
                      transition: transScroll,
                    }}
                    width="125"
                    height="125"
                    viewBox="0 0 125 125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_276_548)">
                      <path
                        d="M71.3271 62.5C71.3271 57.6254 67.375 53.6733 62.5 53.6733C57.625 53.6733 53.6733 57.6254 53.6733 62.5C53.6733 67.375 57.625 71.3271 62.5 71.3271C67.375 71.3271 71.3271 67.375 71.3271 62.5ZM55.6108 62.5C55.6108 58.695 58.695 55.6108 62.5 55.6108C66.305 55.6108 69.3896 58.695 69.3896 62.5C69.3896 66.305 66.305 69.3896 62.5 69.3896C58.695 69.3896 55.6108 66.305 55.6108 62.5Z"
                        fill="#08F678"
                      />
                      <path
                        d="M65.1304 62.5001C65.1304 61.0476 63.9529 59.8701 62.5004 59.8701C61.0475 59.8701 59.87 61.0476 59.87 62.5001C59.87 63.9526 61.0475 65.1305 62.5004 65.1305C63.9529 65.1305 65.1304 63.9526 65.1304 62.5001Z"
                        fill="#08F678"
                      />
                      <path
                        d="M125 62.5C125 27.9829 97.0179 0 62.5004 0C27.9821 0 0 27.9829 0 62.5C0 97.0179 27.9821 125 62.5004 125C97.0179 125 125 97.0179 125 62.5ZM3.84208 62.5C3.84208 30.1046 30.1046 3.84208 62.5004 3.84208C94.8954 3.84208 121.158 30.1046 121.158 62.5C121.158 94.8954 94.8954 121.158 62.5004 121.158C30.1046 121.158 3.84208 94.8954 3.84208 62.5Z"
                        fill="#08F678"
                      />
                      <path
                        d="M120.096 62.4999C120.096 30.6911 94.3091 4.90405 62.5004 4.90405C30.6908 4.90405 4.90454 30.6911 4.90454 62.4999C4.90454 94.3095 30.6908 120.096 62.5004 120.096C94.3091 120.096 120.096 94.3095 120.096 62.4999ZM6.46914 62.4999C6.46914 31.5553 31.5554 6.46945 62.5004 6.46945C93.4454 6.46945 118.531 31.5553 118.531 62.4999C118.531 93.4453 93.4454 118.531 62.5004 118.531C31.5554 118.531 6.46914 93.4453 6.46914 62.4999Z"
                        fill="#08F678"
                      />
                      <path
                        d="M57.8933 56.9687L57.9424 56.5471L8.02786 50.2583L7.97827 50.6808L57.8933 56.9687Z"
                        fill="#08F678"
                      />
                      <path
                        d="M10.5467 51.1254L10.6296 50.4208C10.5896 50.3696 10.5662 50.3404 10.5262 50.2896L7.53082 49.9375C7.47998 49.9775 7.4504 50.0008 7.39957 50.0408L7.31665 50.7458C7.35707 50.7971 7.3804 50.8263 7.4204 50.8771L10.4158 51.2292C10.4667 51.1892 10.4954 51.1662 10.5467 51.1254Z"
                        fill="#08F678"
                      />
                      <path
                        d="M57.8933 68.0317L57.9424 68.4534L8.02786 74.7417L7.97827 74.3196L57.8933 68.0317Z"
                        fill="#08F678"
                      />
                      <path
                        d="M10.5467 73.8743L10.6296 74.5797C10.5896 74.6306 10.5662 74.6597 10.5262 74.7106L7.53082 75.0627C7.47998 75.0227 7.4504 74.9997 7.39957 74.9593L7.31665 74.2543C7.35707 74.2031 7.3804 74.1743 7.4204 74.1231L10.4158 73.771C10.4667 73.8114 10.4954 73.8343 10.5467 73.8743Z"
                        fill="#08F678"
                      />
                      <path
                        d="M67.1071 68.0317L67.0575 68.4534L116.972 74.7417L117.022 74.3196L67.1071 68.0317Z"
                        fill="#08F678"
                      />
                      <path
                        d="M114.454 73.8743L114.371 74.5797C114.411 74.6306 114.434 74.6597 114.474 74.7106L117.47 75.0627C117.52 75.0227 117.55 74.9997 117.601 74.9593L117.683 74.2543C117.643 74.2031 117.62 74.1743 117.58 74.1231L114.585 73.771C114.534 73.8114 114.505 73.8343 114.454 73.8743Z"
                        fill="#08F678"
                      />
                      <path
                        d="M67.1071 56.9687L67.0575 56.5471L116.972 50.2583L117.022 50.6808L67.1071 56.9687Z"
                        fill="#08F678"
                      />
                      <path
                        d="M114.454 51.1254L114.371 50.4208C114.411 50.3696 114.434 50.3404 114.474 50.2896L117.47 49.9375C117.52 49.9775 117.55 50.0008 117.601 50.0408L117.683 50.7458C117.643 50.7971 117.62 50.8263 117.58 50.8771L114.585 51.2292C114.534 51.1892 114.505 51.1662 114.454 51.1254Z"
                        fill="#08F678"
                      />
                      <path
                        d="M68.0317 57.8933L68.4534 57.9424L74.7417 8.02784L74.3196 7.97827L68.0317 57.8933Z"
                        fill="#08F678"
                      />
                      <path
                        d="M73.8742 10.5462L74.5796 10.6296C74.6305 10.5892 74.6596 10.5662 74.7109 10.5258L75.063 7.53082C75.0225 7.47957 74.9996 7.4504 74.9592 7.39957L74.2542 7.31665C74.2034 7.35705 74.1742 7.37998 74.1225 7.4204L73.7709 10.4158C73.8113 10.4667 73.8342 10.4954 73.8742 10.5462Z"
                        fill="#08F678"
                      />
                      <path
                        d="M56.9687 57.8933L56.5471 57.9424L50.2583 8.02784L50.6808 7.97827L56.9687 57.8933Z"
                        fill="#08F678"
                      />
                      <path
                        d="M51.1258 10.5462L50.4208 10.6296C50.37 10.5892 50.3404 10.5662 50.2896 10.5258L49.9375 7.53082C49.9779 7.47957 50.0008 7.4504 50.0408 7.39957L50.7463 7.31665C50.7971 7.35705 50.8263 7.37998 50.8771 7.4204L51.2292 10.4158C51.1892 10.4667 51.1663 10.4954 51.1258 10.5462Z"
                        fill="#08F678"
                      />
                      <path
                        d="M56.9687 67.1069L56.5471 67.0574L50.2583 116.972L50.6808 117.022L56.9687 67.1069Z"
                        fill="#08F678"
                      />
                      <path
                        d="M51.1258 114.454L50.4208 114.371C50.37 114.411 50.3404 114.434 50.2896 114.474L49.9375 117.469C49.9779 117.52 50.0008 117.549 50.0408 117.601L50.7463 117.683C50.7971 117.643 50.8263 117.62 50.8771 117.579L51.2292 114.584C51.1892 114.534 51.1663 114.504 51.1258 114.454Z"
                        fill="#08F678"
                      />
                      <path
                        d="M68.0317 67.1069L68.4534 67.0574L74.7417 116.972L74.3196 117.022L68.0317 67.1069Z"
                        fill="#08F678"
                      />
                      <path
                        d="M73.8742 114.454L74.5796 114.371C74.6305 114.411 74.6596 114.434 74.7109 114.474L75.063 117.469C75.0225 117.52 74.9996 117.549 74.9592 117.601L74.2542 117.683C74.2034 117.643 74.1742 117.62 74.1225 117.579L73.7709 114.584C73.8113 114.534 73.8342 114.504 73.8742 114.454Z"
                        fill="#08F678"
                      />
                      <path
                        d="M63.1541 55.3312L63.4874 55.0678L32.6387 15.3262L32.3049 15.5895L63.1541 55.3312Z"
                        fill="#08F678"
                      />
                      <path
                        d="M33.8062 17.7203L34.3633 17.2803C34.3712 17.2157 34.3754 17.1791 34.3829 17.1145L32.5142 14.7474C32.4496 14.7399 32.4125 14.7357 32.3483 14.7278L31.7912 15.1678C31.7833 15.2324 31.7792 15.2694 31.7712 15.3341L33.6404 17.7007C33.705 17.7086 33.7417 17.7128 33.8062 17.7203Z"
                        fill="#08F678"
                      />
                      <path
                        d="M55.3313 63.1541L55.068 63.4874L15.3263 32.6383L15.5901 32.3049L55.3313 63.1541Z"
                        fill="#08F678"
                      />
                      <path
                        d="M17.7204 33.8058L17.2804 34.3633C17.2158 34.3712 17.1792 34.3754 17.115 34.3829L14.7479 32.5142C14.74 32.4496 14.7358 32.4125 14.7279 32.3483L15.1683 31.7908C15.2329 31.7833 15.2696 31.7792 15.3342 31.7712L17.7008 33.6404C17.7087 33.705 17.7129 33.7417 17.7204 33.8058Z"
                        fill="#08F678"
                      />
                      <path
                        d="M61.8463 69.6685L61.5129 69.9318L92.3617 109.673L92.6954 109.41L61.8463 69.6685Z"
                        fill="#08F678"
                      />
                      <path
                        d="M91.1942 107.279L90.6371 107.72C90.6291 107.784 90.625 107.821 90.6171 107.885L92.4862 110.252C92.5508 110.26 92.5875 110.264 92.6521 110.271L93.2091 109.832C93.2171 109.767 93.2212 109.73 93.2291 109.665L91.36 107.299C91.2954 107.291 91.2587 107.287 91.1942 107.279Z"
                        fill="#08F678"
                      />
                      <path
                        d="M69.6688 61.846L69.9322 61.5127L109.674 92.3614L109.41 92.6952L69.6688 61.846Z"
                        fill="#08F678"
                      />
                      <path
                        d="M107.28 91.1936L107.72 90.6365C107.784 90.629 107.821 90.6249 107.886 90.6169L110.253 92.4861C110.26 92.5507 110.265 92.5874 110.272 92.6519L109.832 93.209C109.768 93.2169 109.73 93.2211 109.666 93.2286L107.3 91.3594C107.292 91.2953 107.288 91.2586 107.28 91.1936Z"
                        fill="#08F678"
                      />
                      <path
                        d="M69.6688 63.1541L69.9322 63.4874L109.674 32.6383L109.41 32.3049L69.6688 63.1541Z"
                        fill="#08F678"
                      />
                      <path
                        d="M107.28 33.8058L107.72 34.3633C107.784 34.3712 107.821 34.3754 107.886 34.3829L110.253 32.5142C110.26 32.4496 110.265 32.4125 110.272 32.3483L109.832 31.7908C109.768 31.7833 109.73 31.7792 109.666 31.7712L107.3 33.6404C107.292 33.705 107.288 33.7417 107.28 33.8058Z"
                        fill="#08F678"
                      />
                      <path
                        d="M61.8463 55.3312L61.5129 55.0678L92.3617 15.3262L92.6954 15.5895L61.8463 55.3312Z"
                        fill="#08F678"
                      />
                      <path
                        d="M91.1942 17.7203L90.6371 17.2803C90.6291 17.2157 90.625 17.1791 90.6171 17.1145L92.4862 14.7474C92.5508 14.7399 92.5875 14.7357 92.6521 14.7278L93.2091 15.1678C93.2171 15.2324 93.2212 15.2694 93.2291 15.3341L91.36 17.7007C91.2954 17.7086 91.2587 17.7128 91.1942 17.7203Z"
                        fill="#08F678"
                      />
                      <path
                        d="M55.3313 61.846L55.068 61.5127L15.3263 92.3614L15.5901 92.6952L55.3313 61.846Z"
                        fill="#08F678"
                      />
                      <path
                        d="M17.7204 91.1936L17.2804 90.6365C17.2158 90.629 17.1792 90.6249 17.115 90.6169L14.7479 92.4861C14.74 92.5507 14.7358 92.5874 14.7279 92.6519L15.1683 93.209C15.2329 93.2169 15.2696 93.2211 15.3342 93.2286L17.7008 91.3594C17.7087 91.2953 17.7129 91.2586 17.7204 91.1936Z"
                        fill="#08F678"
                      />
                      <path
                        d="M63.1541 69.6685L63.4874 69.9318L32.6387 109.673L32.3049 109.41L63.1541 69.6685Z"
                        fill="#08F678"
                      />
                      <path
                        d="M33.8062 107.279L34.3633 107.72C34.3712 107.784 34.3754 107.821 34.3829 107.885L32.5142 110.252C32.4496 110.26 32.4125 110.264 32.3483 110.271L31.7912 109.832C31.7833 109.767 31.7792 109.73 31.7712 109.665L33.6404 107.299C33.705 107.291 33.7417 107.287 33.8062 107.279Z"
                        fill="#08F678"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_276_548">
                        <rect width="125" height="125" fill="white" />
                      </clipPath>
                    </defs>
                  </motion.svg>
                </span>
              </h4>

              <p
                style={{
                  fontSize: "clamp(1rem, 0.9082rem + 0.3765vw, 1.36rem)",
                  lineHeight:'140%'
                }}
              >
                Oi, my name is Caroline! <br></br>
                <br></br>I enjoy building new and immersive things. My
                motivation at work is to develop, piece by piece, useful,
                beautiful, and functional elements. In Brazil, I worked
                alongside design and development teams to plan websites and
                digital platforms. In April 2021, I moved to Italy, and decided
                to change my career path to become a Web Developer and create my
                own applications.
              </p>
            </div>
            <div className="_fotoWrap col-12 col-md-6 d-grid">
              <img
                src={carolinePhoto}
                alt=""
                style={{
                  width: "clamp(14rem, 30vw, 25rem)",
                  borderRadius: ".5rem"
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
