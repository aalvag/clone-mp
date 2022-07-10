import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";

const ShoppingBag = (props) => (
  <Svg height={50} width={50} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Rect
        fill="#68c998"
        fillOpacity={0.1}
        height={48.7}
        rx={24.35}
        stroke="#68c998"
        strokeWidth={1.3}
        width={48.7}
        x={0.65}
        y={0.65}
      />
      <Path
        d="m16.532 15.323 16.936.403 1.613 19.758-20.565.403z"
        fill="#fff"
      />
      <G fill="#68c998">
        <Path d="M31.676 32.922H17.515l.597-7.516h12.967z" fillOpacity={0.4} />
        <Path d="m15.118 35.143 1.517-19.204h2.479v2.453a.605.605 0 0 0 1.21 0V15.94h8.546v2.453a.605.605 0 0 0 1.21 0V15.94h2.478l1.518 19.204zm5.205-21.514c0-2.357 1.917-4.274 4.274-4.274s4.273 1.917 4.273 4.274v1.1h-8.547zm20.925 21.514h-5.96L33.72 15.287a.604.604 0 0 0-.602-.558H30.08v-1.1c0-3.024-2.46-5.483-5.483-5.483s-5.483 2.46-5.483 5.483v1.1h-3.038a.604.604 0 0 0-.603.558l-1.568 19.856h-5.96a.605.605 0 0 0 0 1.21h33.303a.605.605 0 0 0 0-1.21z" />
      </G>
    </G>
  </Svg>
);

export default ShoppingBag;
