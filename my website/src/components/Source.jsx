import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import img6 from "./images/image6.jpg";
// import img7 from "./images/image7.jpg";
import img8 from "./images/image8.jpg";
import img9 from "./images/image9.jpg";
import img10 from "./images/image10.jpg";
//
//
import walrus1 from "./images/walrus/walrus1.jpg";
import walrus2 from "./images/walrus/walrus2.jpg";
import walrus3 from "./images/walrus/walrus3.jpg";
import walrus4 from "./images/walrus/walrus4.jpg";
//
import view1 from "./images/view/view1.jpg";
import view2 from "./images/view/view2.jpg";
import view3 from "./images/view/view3.jpg";
import view4 from "./images/view/view4.jpg";
//
import dog1 from "./images/dog/dog1.jpg";
import dog2 from "./images/dog/dog2.jpg";
import dog3 from "./images/dog/dog3.jpg";
import dog4 from "./images/dog/dog4.jpg";
//
import ice1 from "./images/ice/ice1.jpg";
import ice2 from "./images/ice/ice2.jpg";
import ice3 from "./images/ice/ice3.jpg";
import ice4 from "./images/ice/ice4.jpg";
//
import coffee1 from "./images/coffee/coffee1.jpg";
import coffee2 from "./images/coffee/coffee2.jpg";
import coffee3 from "./images/coffee/coffee3.jpg";
import coffee4 from "./images/coffee/coffee4.jpg";
//
import building1 from "./images/building/building1.jpg";
import building2 from "./images/building/building2.jpg";
import building3 from "./images/building/building3.jpg";
import building4 from "./images/building/building4.jpg";
//
import sea1 from "./images/seas/sea1.jpg";
import sea2 from "./images/seas/sea2.jpg";
import sea3 from "./images/seas/sea3.jpg";
import sea4 from "./images/seas/sea4.jpg";
//
import fish1 from "./images/fish/fish1.jpg";
import fish2 from "./images/fish/fish2.jpg";
import fish3 from "./images/fish/fish3.jpg";
import fish4 from "./images/fish/fish4.jpg";
//
import road1 from "./images/road/road1.jpg";
import road2 from "./images/road/road2.jpg";
import road3 from "./images/road/road3.jpg";
import road4 from "./images/road/road4.jpg";
//
import laptop1 from "./images/laptop/laptop1.jpg";
import laptop2 from "./images/laptop/laptop2.jpg";
import laptop3 from "./images/laptop/laptop3.jpg";
import laptop4 from "./images/laptop/laptop4.jpg";

const data = [
  {
    id: 1,
    title: "Walrus ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus purus vel vehicula congue. Nullam id vestibulum leo. Duis ut luctus augue.",
    image: img1,
    description: {
      imgUrl: [walrus1, walrus2, walrus3, walrus4],
      list: [
        "Lorem ipsum dolor sit amet",
        "posuere eu ante et, mattis euismod libero.",
        "Maecenas placerat ipsum non velit fermentum cursus.",
        "Vestibulum nec elementum ligula.",
      ],
    },
  },
  {
    id: 2,
    title: "views ipsum",
    text: " Mauris ut blandit nulla. Morbi lobortis nisl quis ipsum consequat volutpat. ",
    image: img2,
    description: {
      imgUrl: [view1, view2, view3, view4],
      list: [
        "Vestibulum nec elementum ligula.",
        "Praesent egestas eget arcu nec tempor.",
        "Etiam gravida ex odio.",
        "sollicitudin viverra lectus.",
      ],
    },
  },
  {
    id: 3,
    title: "dog ipsum",
    text: "Quisque efficitur ultrices libero sit amet porta. Aliquam tincidunt, diam eget varius interdum, lacus dui aliquet ante, id sollicitudin quam sapien auctor urna. Donec porttitor libero quam, a facilisis mauris mollis sit amet. In tempus viverra lacus non faucibus. Donec quis risus felis.",
    image: img3,
    description: {
      imgUrl: [dog1, dog2, dog3, dog4],
      list: [
        "Etiam gravida ex odio.",
        "sollicitudin viverra lectus.",
        "Donec interdum maximus magna",
        "Nunc vehicula porttitor libero, vel pellentesque augue tincidunt ",
      ],
    },
  },
  {
    id: 4,
    title: "mountain ice ipsum",
    text: " Curabitur luctus orci semper neque rutrum malesuada.",
    image: img4,
    description: {
      imgUrl: [ice1, ice2, ice3, ice4],
      list: [
        "Nulla id enim ullamcorper sem faucibus eleifend.",
        "Praesent egestas eget arcu nec tempor.",
        "Etiam gravida ex odio.",
        "Maecenas placerat ipsum non velit fermentum cursus.",
      ],
    },
  },
  {
    id: 5,
    title: "coffee ipsum",
    text: "Praesent imperdiet tortor dolor, in accumsan augue feugiat eget.",
    image: img5,
    description: {
      imgUrl: [coffee1, coffee2, coffee3, coffee4],
      list: [
        "Maecenas placerat ipsum non velit fermentum cursus.",
        "sollicitudin viverra lectus.",
        "Donec interdum maximus magna",

        "Nunc vehicula porttitor libero, vel pellentesque augue tincidunt ",
      ],
    },
  },
  {
    id: 6,
    title: "buildings ipsum",
    text: "Aliquam accumsan sodales velit, sed vestibulum arcu fermentum at. Sed mattis vulputate ipsum nec tempor.",
    image: img6,
    description: {
      imgUrl: [building1, building2, building3, building4],
      list: [
        "Lorem ipsum dolor sit amet",
        "posuere eu ante et, mattis euismod libero.",
        "Donec interdum maximus magna",

        "Etiam gravida ex odio.",
      ],
    },
  },
  {
    id: 7,
    title: "fish ipsum",
    text: "Nam luctus nulla et est ullamcorper auctor. Integer dapibus, arcu at ullamcorper commodo, tellus ipsum ullamcorper mauris, non condimentum sapien urna et lorem.",
    image: fish4,
    description: {
      imgUrl: [fish1, fish2, fish3, fish4],
      list: [
        "Etiam gravida ex odio.",
        "sollicitudin viverra lectus.",

        "Nunc vehicula porttitor libero, vel pellentesque augue tincidunt ",
        "Quisque non libero tortor.",
      ],
    },
  },
  {
    id: 8,
    title: "laptop ipsum",
    text: "Aliquam vitae porta nulla, ac dignissim tellus. Ut eget justo porta, imperdiet ipsum sed, vehicula lectus. In laoreet, leo ut porttitor consequat, odio erat facilisis arcu, vel molestie ligula lacus eget libero.",
    image: img8,
    description: {
      imgUrl: [laptop1, laptop2, laptop3, laptop4],
      list: [
        "Quisque non libero tortor.",
        "Praesent egestas eget arcu nec tempor.",

        "Maecenas placerat ipsum non velit fermentum cursus.",
        "Vestibulum nec elementum ligula.",
      ],
    },
  },
  {
    id: 9,
    title: "seas ipsum",
    text: "Nunc maximus magna sed massa imperdiet, nec rhoncus neque euismod. Nunc rhoncus sollicitudin dolor, eu condimentum erat porta vitae. Nunc fringilla iaculis pretium. Praesent at aliquam sem. ",

    image: img9,
    description: {
      imgUrl: [sea1, sea2, sea3, sea4],
      list: [
        "Etiam gravida ex odio.",
        "sollicitudin viverra lectus.",
        "Praesent egestas eget arcu nec tempor.",

        "Vestibulum nec elementum ligula.",
      ],
    },
  },
  {
    id: 10,
    title: "lorem ipsum 10",
    text: "Aenean in malesuada augue. Mauris aliquam lorem ipsum, sed volutpat lectus imperdiet eu.",
    image: img10,
    description: {
      imgUrl: [road1, road2, road3, road4],
      list: [
        "Quisque non libero tortor.",
        "Praesent egestas eget arcu nec tempor.",

        "Maecenas placerat ipsum non velit fermentum cursus.",
        "Vestibulum nec elementum ligula.",
      ],
    },
  },
];

export default data;
