import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

const FullWidth = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Photo = styled.img`
  width: ${(props) => props.scale * 368}px;
  height: ${(props) => props.scale * 200}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: contain;
  object-position: top;
  margin-left: ${(props) =>
    props.offset === "true" ? props.scale * 7 : props.scale * 87}px;
  margin-right: ${(props) =>
    props.offset === "true" ? props.scale * 80 : 0}px;
`;

const photos = [
  // "../../Assets/Image/aboutproject/js.png",
  "https://abusaid.netlify.app/static/media/react.2b6a0717.svg",
  "https://www.webapparchitect.com/static/media/8.5a3a9ca294db0539884810b6e6eafedd.svg",
  "https://www.webapparchitect.com/static/media/5.470b16769e85256575dc92ab57c844f4.svg",
  "https://www.webapparchitect.com/static/media/10.61be078e0d449065aefaf9f506ba9283.svg",
  "https://www.webapparchitect.com/static/media/13.4e47c3122b8d2476a02f97dcfcb28640.svg",
  "https://abusaid.netlify.app/static/media/react.2b6a0717.svg",
  "https://abusaid.netlify.app/static/media/react.2b6a0717.svg",
  "https://abusaid.netlify.app/static/media/react.2b6a0717.svg",
];

const Technology = ({ size }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      <div style={{}}>
        <Marquee key={key} velocity={25}>
          {times(7, Number).map((id) => (
            <Photo
              style={{
                width: "150px", height: "150px", padding: "40px 5px", borderRadius: "50%", display: "flex", alignItems: "center"
              }}
              src={photos[id]}
              alt=""
              key={`marquee-example-people-${id}`}
              scale={scale}
            />
          ))}
        </Marquee>
      </div>

      <div style={{ height: scale * 60 }} />
    </FullWidth>
  );
};

export default withSize()(Technology);
