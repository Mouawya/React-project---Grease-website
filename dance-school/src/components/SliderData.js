import { v4 as uuidv4 } from "uuid";

const images = [
  {
    id: uuidv4(),
    image: require("../images/image1.jpg").default,
  },
  {
    id: uuidv4(),
    image: require("../images/image2.jpeg").default,
  },
  {
    id: uuidv4(),
    image: require("../images/image3.jpg").default,
  },
  {
    id: uuidv4(),
    image: require("../images/image4.jpg").default,
  },
  {
    id: uuidv4(),
    image: require("../images/image5.jpg").default,
  },
];

export default images;
