import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Input } from "../../components/atoms/Input/index";

const InputMeta: ComponentMeta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
//   argTypes: {
//     onPress: { action: "pressed the Input" },
//   },
  args: {
    
  },
};

export default InputMeta;

type MyInputStory = ComponentStory<typeof Input>;

export const Primary: MyInputStory = (args) => <Input {...args} />;
