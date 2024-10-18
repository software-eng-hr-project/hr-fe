import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    primary: [
      "#666CFF",
      "#787EFF",
      "#5A5FE0",
      "#5459D1",
      "#666CFF0D",
      "#666CFF80",
    ],
    secondary: [
      "#6D788D",
      "#7F889B",
      "#606A7C",
      "#596274",
      "#6D788D0D",
      "#6D788D80",
    ],
    info: [
      "#26C6F9",
      "#40CDFA",
      "#21AEDB",
      "#1FA2CC",
      "#26C6F90D",
      "#26C6F980",
    ],
    success: [
      "#83E542",
      "#72E128",
      "#64C623",
      "#5DB921",
      "#72E1280D",
      "#72E12880",
    ],
    warning: [
      "#FDBE42",
      "#FDB528",
      "#DF9F23",
      "#CF9421",
      "#FDB5280D",
      "#FDB52880",
    ],
    error: [
      "#FF625F",
      "#FF4D49",
      "#E04440",
      "#D13F3C",
      "#FF4D490D",
      "#FF4D4980",
    ],
    text: ["#4C4E64DE", "#4C4E6499", "#4C4E6461", "#4C4E640D", "#4C4E641F"],
    white: ["#fff"],
  },
  headings: {
    sizes: {
      h1: { fontWeight: 300, fontSize: "96px", lineHeight: "112px" },
      h2: { fontWeight: 300, fontSize: "60px", lineHeight: "72px" },
      h3: { fontWeight: 400, fontSize: "48px", lineHeight: "56px" },
      h4: { fontWeight: 400, fontSize: "34px", lineHeight: "42px" },
      h5: { fontWeight: 400, fontSize: "24px", lineHeight: "32px" },
      h6: { fontWeight: 500, fontSize: "20px", lineHeight: "32px" },
    },
  },
};

export default theme;
