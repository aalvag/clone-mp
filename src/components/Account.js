import * as React from "react";
import Svg, { G, Use, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props) => (
  <Svg
    width={50}
    height={50}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Use
        fill="#0DB578"
        fillOpacity={0.1}
        stroke="#0DB578"
        strokeWidth={2.6}
        mask="url(#ui-avatar__svg-mask)"
        xlinkHref="#ui-avatar__svg-circle"
      />
      <G transform="translate(12 12)">
        <Path
          fill="#0DB578"
          d="M1.005 24.762H.973a.607.607 0 0 1-.573-.637 5.428 5.428 0 0 1 5.424-5.144H20.95a5.435 5.435 0 0 1 5.42 5.11.605.605 0 1 1-1.207.07 4.223 4.223 0 0 0-4.213-3.97H5.824a4.217 4.217 0 0 0-4.215 4 .61.61 0 0 1-.606.573"
        />
        <Circle
          cx={13.363}
          cy={8.573}
          r={8.266}
          fill="#FFF"
          stroke="#0DB578"
          strokeWidth={1.21}
        />
        <Path
          fill="#0DB578"
          fillOpacity={0.4}
          d="M21.322 7.213a7.983 7.983 0 0 0-1.855-3.96 8.132 8.132 0 0 0-1.83-1.573A8.075 8.075 0 0 0 13.354.455a8.07 8.07 0 0 0-7.935 6.572c.853.12 1.732.186 2.62.186 3.515 0 6.805-.976 9.596-2.678v2.678h3.685z"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
