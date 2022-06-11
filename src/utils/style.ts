import { ViewStyle } from "react-native";

export const sizes = {
  text: {
    h1: 25,
    xl: 21,
    lg: 18,
    md: 16,
    sm: 14,
    xs: 12,
  },
  padding: 24,
  margin: 24,
  radius: 12,
};

export type SizeType = "h1" | "xl" | "lg" | "md" | "sm" | "xs";

export type fontWeightType =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

export type Space = {
  m?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  mh?: number;
  mv?: number;

  p?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  ph?: number;
  pv?: number;
};

export const getSpace = (p: Space) => {
  const space: ViewStyle = {};
  if (p.hasOwnProperty("m")) {
    space.margin = p.m;
  }
  if (p.hasOwnProperty("mt")) {
    space.marginTop = p.mt;
  }
  if (p.hasOwnProperty("mb")) {
    space.marginBottom = p.mb;
  }
  if (p.hasOwnProperty("mr")) {
    space.marginRight = p.mr;
  }
  if (p.hasOwnProperty("ml")) {
    space.marginLeft = p.ml;
  }
  if (p.hasOwnProperty("mv")) {
    space.marginVertical = p.mv;
  }
  if (p.hasOwnProperty("mh")) {
    space.marginHorizontal = p.mh;
  }
  if (p.hasOwnProperty("m")) {
    space.padding = p.m;
  }
  //padding
  if (p.hasOwnProperty("p")) {
    space.padding = p.p;
  }
  if (p.hasOwnProperty("pt")) {
    space.paddingTop = p.pt;
  }
  if (p.hasOwnProperty("pb")) {
    space.paddingBottom = p.pb;
  }
  if (p.hasOwnProperty("pr")) {
    space.paddingRight = p.pr;
  }
  if (p.hasOwnProperty("pl")) {
    space.paddingLeft = p.pl;
  }
  if (p.hasOwnProperty("pv")) {
    space.paddingVertical = p.pv;
  }
  if (p.hasOwnProperty("ph")) {
    space.paddingHorizontal = p.ph;
  }
  return space;
};
