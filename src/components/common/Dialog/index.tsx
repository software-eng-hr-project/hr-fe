import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  UnstyledButton,
  Group,
  GroupPosition as MantineGroupPosition,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { ReactNode } from "react";
import useDialogStyles from "./index.styles";

type ModalButtonProps = MantineButtonProps;

type DialogProps = {
  title: string;
  okButtonProps?: ModalButtonProps;
  cancelButtonProps?: ModalButtonProps;
  buttonPositions: MantineGroupPosition;
  okText?: string;
  cancelText?: string;
  onSubmit: () => void;
  onCancel: () => void;
  triggerItem: JSX.Element;
  children: ReactNode;
};

export default function Dialog({
  title,
  onSubmit,
  onCancel,
  triggerItem,
  buttonPositions,
  okButtonProps,
  cancelButtonProps,
  okText,
  cancelText,
  children,
}: DialogProps) {
  const { classes } = useDialogStyles();
  const [opened, { close, open }] = useDisclosure(false);

  const handleCancel = () => {
    onCancel();
    close();
  };

  return (
    <div>
      <Modal
        classNames={classes}
        title={title}
        opened={opened}
        withCloseButton
        onClose={handleCancel}
        size="lg"
        radius="md"
      >
        <Group my="md">{children}</Group>

        <Group position={buttonPositions}>
          <Button {...okButtonProps} type="submit" onClick={onSubmit}>
            {okText}
          </Button>
          {cancelText && (
            <Button {...cancelButtonProps} onClick={handleCancel}>
              {cancelText}
            </Button>
          )}
        </Group>
      </Modal>
      <UnstyledButton onClick={open}>{triggerItem}</UnstyledButton>
    </div>
  );
}
