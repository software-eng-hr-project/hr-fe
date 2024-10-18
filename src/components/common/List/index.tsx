import { ReactNode } from "react";
import {
  List as MantineList,
  Flex,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core";

export type ListProps<T> = {
  title: string;
  actionIcon?: ReactNode;
  actionButton?: ReactNode;
  data: T[];
  renderItem: (item: T) => JSX.Element;
  onIconClick?: () => void;
  onButtonClick?: () => void;
};

export default function List<T>({
  title,
  actionIcon,
  data,
  actionButton,
  renderItem,
  onIconClick,
  onButtonClick,
}: ListProps<T>) {
  return (
    <Flex direction="column">
      <Paper shadow="md" radius="xs" p="sm" withBorder>
        <Flex justify="space-between" direction="row">
          <Text size={20}>{title}</Text>
          <UnstyledButton type="button" onClick={onIconClick}>
            {actionIcon}
          </UnstyledButton>
        </Flex>
        <Flex direction="column">
          <MantineList type="unordered">{data.map(renderItem)}</MantineList>
          <Flex justify="center">
            <UnstyledButton type="button" onClick={onButtonClick}>
              {actionButton}
            </UnstyledButton>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  );
}
