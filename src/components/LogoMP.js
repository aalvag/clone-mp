import React from "react";
import Svg, { Circle, Path, G } from "react-native-svg";

const LogoMP = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <Circle cy={24} cx={24} fill="#eee" r={24} />
    <Path
      d="M38 23.476c0-5.06-6.266-9.172-14-9.172-7.733 0-13.998 4.112-13.998 9.172L10 24.01c0 5.351 5.477 9.686 14 9.686 8.571 0 14-4.334 14-9.686v-.534z"
      fill="#2a3375"
    />
    <Path
      d="M37.46 23.47c0 4.747-6.02 8.605-13.458 8.605-7.435 0-13.46-3.858-13.46-8.605 0-4.762 6.025-8.62 13.46-8.62 7.439-.001 13.458 3.858 13.458 8.62z"
      fill="#1a97d5"
    />
    <G fill="#fff">
      <Path d="M19.536 20.742c-.01.019-.145.155-.058.28.212.26.871.42 1.536.268.387-.092.898-.49 1.394-.873.532-.44 1.053-.853 1.585-1.03.559-.161.918-.086 1.157-.014.26.08.57.232 1.057.604.92.693 4.625 3.932 5.264 4.482.516-.226 2.81-1.204 5.915-1.895-.26-1.667-1.275-3.184-2.799-4.426-2.142.897-4.748 1.37-7.3.123-.01 0-1.393-.672-2.749-.624-2.027.034-2.907.921-3.829 1.843l-1.173 1.262z" />
      <Path d="M31.321 24.826c-.044-.051-4.351-3.812-5.325-4.55-.57-.433-.884-.525-1.215-.584a1.762 1.762 0 0 0-.573.063c-.454.126-1.043.52-1.575.94-.552.432-1.066.85-1.543.943-.612.133-1.356-.017-1.698-.241a.868.868 0 0 1-.277-.306c-.128-.29.105-.527.14-.579l1.191-1.28c.134-.15.28-.283.422-.413-.387.04-.738.146-1.085.25-.428.113-.844.24-1.264.24-.179 0-1.108-.153-1.299-.217-1.073-.297-2.015-.577-3.43-1.23-1.682 1.252-2.82 2.826-3.143 4.57.237.06.635.164.792.216 3.83.841 5.024 1.728 5.24 1.898.235-.247.574-.418.954-.418.415.004.799.21 1.034.553.216-.184.519-.331.913-.331.177 0 .364.035.546.105.43.145.651.43.769.678.142-.065.327-.101.536-.1.2 0 .42.035.632.135.708.305.819 1.004.756 1.528.046-.006.097-.01.153-.01a1.516 1.516 0 0 1 1.331 2.233c.23.117.81.404 1.324.342.406-.042.555-.178.612-.256.038-.067.079-.132.043-.168l-1.085-1.201s-.17-.175-.12-.235c.058-.065.177.04.254.1a24.04 24.04 0 0 1 1.22 1.139c.01.006.055.1.3.15.214.037.598.006.86-.205a1.856 1.856 0 0 0 .173-.169c.279-.372-.03-.726-.03-.726l-1.26-1.414s-.19-.174-.121-.237c.05-.05.167.04.246.105.403.333.96.9 1.51 1.433.101.079.573.37 1.208-.055.378-.234.455-.546.446-.784-.03-.309-.268-.527-.268-.527l-1.717-1.736s-.179-.157-.118-.24c.044-.062.166.044.245.104.545.466 2.036 1.832 2.036 1.832.017.007.53.378 1.166-.033.224-.143.374-.359.384-.623a.876.876 0 0 0-.29-.689z" />
      <Path d="M22.97 27.007c-.268-.011-.553.157-.599.14-.023-.008.015-.128.046-.182.02-.06.372-1.123-.488-1.487-.652-.275-1.052.026-1.196.175-.034.037-.047.035-.052-.004-.017-.204-.101-.718-.662-.892-.814-.237-1.335.318-1.465.523-.066-.45-.45-.82-.921-.82a.953.953 0 0 0-.946.947c0 .514.428.927.944.927a.894.894 0 0 0 .642-.249c.007.007.008.017.005.017-.038.235-.108 1.088.779 1.42.35.147.653.048.9-.136.074-.045.087-.017.077.054-.03.215.01.677.666.935.487.195.782-.006.977-.182.085-.076.106-.07.108.062.035.607.552 1.128 1.183 1.128.65 0 1.184-.526 1.184-1.19a1.19 1.19 0 0 0-1.182-1.186z" />
    </G>
    <Path
      d="M31.488 24.375c-1.328-1.178-4.4-3.836-5.234-4.47-.468-.35-.792-.526-1.076-.614a1.413 1.413 0 0 0-.53-.087c-.215 0-.44.028-.68.104-.54.175-1.074.598-1.597 1.017l-.02.028c-.48.371-.98.768-1.352.853a2.16 2.16 0 0 1-.507.051c-.426 0-.809-.114-.948-.308-.019-.012-.008-.073.051-.147h.007l1.172-1.27c.912-.897 1.779-1.773 3.764-1.806l.1-.002c1.238.002 2.483.538 2.616.612a8.04 8.04 0 0 0 3.562.853c1.259 0 2.553-.313 3.92-.927a3.667 3.667 0 0 0-.482-.375c-1.196.52-2.332.768-3.437.768a7.479 7.479 0 0 1-3.325-.794c-.062-.04-1.431-.674-2.854-.674-.039 0-.074 0-.113.002-1.667.027-2.613.624-3.244 1.147-.618.01-1.15.16-1.619.298-.426.119-.79.225-1.139.225-.146 0-.411-.015-.436-.015-.414-.016-2.464-.515-4.106-1.145-.161.113-.326.247-.486.364 1.711.714 3.795 1.244 4.451 1.293.182.015.38.024.575.024.43 0 .865-.118 1.284-.225.254-.073.522-.148.82-.223-.082.075-.158.15-.237.233l-1.183 1.29c-.102.1-.298.346-.168.652.05.139.165.252.318.363.275.176.777.3 1.256.3.177 0 .343 0 .497-.046.503-.103 1.025-.528 1.573-.965.439-.342 1.073-.786 1.548-.932.133-.023.301-.056.428-.056.04 0 .078 0 .11.009.324.048.632.146 1.176.57.971.727 5.285 4.486 5.322 4.538a.81.81 0 0 1 .262.616.674.674 0 0 1-.344.56c-.18.113-.373.187-.563.187-.288 0-.489-.15-.502-.15-.01-.008-1.493-1.366-2.03-1.824-.093-.07-.18-.132-.263-.132-.041 0-.084.015-.105.045-.09.118 0 .263.11.344l1.733 1.738c.001.001.21.205.245.47.003.284-.132.534-.416.704-.205.15-.402.223-.61.223-.27 0-.453-.136-.498-.15l-.245-.248c-.451-.445-.916-.912-1.26-1.193-.084-.066-.174-.124-.256-.124-.044 0-.078 0-.119.035-.03.04-.061.113.044.258a.32.32 0 0 0 .082.08l1.263 1.419c.003.011.256.306.024.597l-.044.074c-.04.034-.079.076-.118.107-.215.185-.502.192-.609.192h-.178a.593.593 0 0 1-.246-.117l-.016-.024c-.067-.068-.705-.71-1.231-1.143-.067-.06-.157-.133-.239-.133-.045 0-.087.006-.113.05-.112.103.042.282.113.34l1.079 1.174a.17.17 0 0 1-.046.077c-.037.072-.167.197-.553.233a.822.822 0 0 1-.14.012c-.411 0-.834-.184-1.055-.315.1-.209.155-.445.155-.675 0-.888-.724-1.597-1.605-1.6-.022 0-.036.003-.062.003.031-.411-.025-1.166-.808-1.508a1.538 1.538 0 0 0-.67-.146 1.36 1.36 0 0 0-.491.095 1.29 1.29 0 0 0-.789-.664 1.787 1.787 0 0 0-.572-.113c-.33 0-.632.104-.896.285a1.377 1.377 0 0 0-1.05-.503c-.362 0-.707.14-.963.402-.336-.268-1.654-1.106-5.207-1.922-.172-.024-.564-.155-.814-.22-.033.21-.071.392-.089.589 0 0 .657.148.79.187 3.623.799 4.822 1.646 5.023 1.805a1.37 1.37 0 0 0-.107.522c0 .75.614 1.365 1.366 1.365a.94.94 0 0 0 .245-.03c.113.558.467.966 1.03 1.178.153.06.316.103.478.103a.892.892 0 0 0 .306-.052c.112.27.335.598.85.802.173.072.353.091.532.091.148 0 .281-.002.407-.072a1.63 1.63 0 0 0 1.49 1.006c.428 0 .842-.186 1.145-.485.26.15.8.4 1.362.402.07 0 .132-.007.2-.018.547-.07.8-.278.92-.45.019-.015.036-.054.055-.084.123.034.273.075.432.075.3 0 .588-.11.881-.318.284-.204.49-.503.516-.757l.001-.012c.093.024.2.04.295.04.307 0 .612-.105.898-.296.56-.373.656-.836.656-1.158.088.03.184.036.293.036.286 0 .564-.082.84-.264.349-.222.55-.555.584-.947a1.271 1.271 0 0 0-.19-.78c.94-.397 3.079-1.18 5.596-1.741a5.202 5.202 0 0 0-.072-.6c-3.053.678-5.327 1.668-5.894 1.934zm-8.518 4.923a1.09 1.09 0 0 1-1.095-1.048c-.004-.058-.012-.196-.122-.196-.052 0-.083.036-.13.068-.133.14-.295.249-.539.249a1.02 1.02 0 0 1-.354-.076c-.629-.253-.629-.687-.611-.85.01-.051.012-.093-.018-.142l-.042-.018h-.032a.28.28 0 0 0-.119.032c-.18.128-.351.202-.526.202a.676.676 0 0 1-.295-.074c-.822-.306-.76-1.092-.717-1.33.008-.037-.01-.087-.037-.096l-.061-.062-.052.07a.852.852 0 0 1-.587.224.845.845 0 0 1-.859-.845.86.86 0 0 1 .861-.866c.42 0 .78.33.84.744l.022.232.128-.185c.015-.03.362-.55.992-.55.127 0 .256.028.372.052.509.157.59.618.606.82.014.102.093.112.104.112.043 0 .075-.038.102-.045a.832.832 0 0 1 .63-.28c.149 0 .31.049.467.12.81.333.444 1.363.444 1.363-.075.172-.075.246-.012.297h.048c.038 0 .083 0 .159-.024a1.11 1.11 0 0 1 .432-.102 1.11 1.11 0 0 1 1.095 1.099c-.001.596-.498 1.105-1.094 1.105z"
      fill="#2a3375"
    />
  </Svg>
);

export default LogoMP;
