import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Text } from "../../components/atoms/Text/index";
import { View } from "react-native";

const TextMeta: ComponentMeta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  argTypes: {},
  args: {
    color: 'primary'
  },
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

export const First: TextStory = (args) => <Text {...args} text="helol"/>;
