import { useState } from "react";
import { MantineNumberSize, TextInput, ActionIcon } from "@mantine/core";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import useInputStyles from "./input.styles";

type Props = {
  type?: "text" | "password";
  label?: string;
  placeholder?: string;
  margin?: MantineNumberSize;
  onChange?: (text: string) => void;
};

export default function Input({
  type = "text",
  label,
  placeholder,
  margin = "sm",
  onChange,
}: Props) {
  const [value, setValue] = useState("");

  const [focused, setFocused] = useState<boolean>(false);
  const [typeOfInput, setTypeOfInput] = useState<string>("password");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { classes } = useInputStyles({
    floating: value.trim().length !== 0 || focused,
  });

  const checkTheEyeButton = () => {
    if (isClicked) setTypeOfInput("text");
    else setTypeOfInput("password");
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {type === "text" ? (
        <TextInput
          label={label}
          placeholder={placeholder}
          classNames={classes}
          value={value}
          onChange={(event) => {
            if (typeof onChange === "function")
              onChange(event.currentTarget.value);
            setValue(event.currentTarget.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          m={margin}
          autoComplete="nope"
        />
      ) : (
        <TextInput
          label={label}
          placeholder={placeholder}
          type={typeOfInput}
          onChange={(event) => {
            if (typeof onChange === "function")
              onChange(event.currentTarget.value);
            setValue(event.currentTarget.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
          classNames={classes}
          m={margin}
          autoComplete="nope"
          rightSection={
            <ActionIcon color="gray.5">
              {isClicked ? (
                <IconEyeOff onClick={checkTheEyeButton} />
              ) : (
                <IconEye onClick={checkTheEyeButton} />
              )}
            </ActionIcon>
          }
        />
      )}
    </div>
  );
}
