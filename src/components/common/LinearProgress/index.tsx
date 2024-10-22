import { useEffect, useState } from "react";
import { Flex, Progress } from "@mantine/core";
import dayjs from "dayjs";

type Props = {
  type: "date" | "number";
  minValue: string;
  maxValue: string;
  percentagePosition?: "top" | "left" | "right" | "bottom";
};

export default function LinearProgress({
  type,
  minValue,
  maxValue,
  percentagePosition = "right",
}: Props) {
  const [color, setColor] = useState<string>("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (type === "date") {
      if (value < 100) setColor("yellow");
      else setColor("green");
    }
    if (type === "number") {
      if (value < 20) setColor("red");
      else if (value < 50) setColor("orange");
      else if (value < 75) setColor("blue");
      else if (value < 100) setColor("yellow");
    }
  }, [value, type]);

  useEffect(() => {
    if (type === "date") {
      const date = dayjs(maxValue);
      const today = dayjs();
      const allTime = date.diff(minValue, "days");

      if (today > dayjs(maxValue)) setValue(100);
      else {
        const diffBetweenToday = today.diff(minValue, "days");
        setValue(+((diffBetweenToday / allTime) * 100).toFixed(0));
      }
    }

    if (type === "number")
      setValue(+((+minValue / +maxValue) * 100).toFixed(0));
  }, [maxValue, minValue, type]);

  const getPercentagePosition = () => {
    if (percentagePosition === "top") return "column-reverse";
    if (percentagePosition === "bottom") return "column";
    if (percentagePosition === "right") return "row";
    return "row-reverse";
  };

  return (
    <Flex
      justify="center"
      gap={["right", "left"].includes(percentagePosition) ? "lg" : 0}
      align={
        ["right", "left"].includes(percentagePosition) ? "center" : "flex-start"
      }
      direction={getPercentagePosition()}
    >
      <div style={{ width: "100%" }}>
        <Progress value={value} color={color} />
      </div>
      <span>{value}%</span>
    </Flex>
  );
}
