import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Center, Flex, Text } from "@mantine/core";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props<T> = {
  data: T[];
  dataColumn: keyof T;
  labelColumn: keyof T;
  description: {
    data: string;
    value: string;
  };
  colors: string[];
};

export default function ChartDoughnut<T extends object>({
  data,
  dataColumn,
  labelColumn,
  description,
  colors,
}: Props<T>) {
  const [hoveredData, setHoveredData] = useState<T | null>(null);

  const chartData = {
    labels: data.map((item) => item[labelColumn]),
    datasets: [
      {
        label: description.value,
        data: data.map((item) => item[dataColumn]),
        backgroundColor: [...colors],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: false,
    offset: 20,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    onHover: (_, elements) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        setHoveredData(data[index]);
      }
    },
  };

  return (
    <Center w="fit-content" pos="relative">
      <Flex pos="absolute" direction="column" align="center">
        {!hoveredData ? (
          <Text size="sm" color="text.2">
            {description.data}
          </Text>
        ) : (
          <>
            <Text size="sm" color="text.2">
              {hoveredData[labelColumn]}
            </Text>
            <Text size="sm" weight="bold" color="text.2">
              {hoveredData["percentage" as keyof T]}%
            </Text>
          </>
        )}
      </Flex>
      <Doughnut data={chartData} options={options} />
    </Center>
  );
}
