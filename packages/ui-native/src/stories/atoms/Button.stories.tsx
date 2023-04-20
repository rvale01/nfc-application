import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "../../components/atoms/Button/index";

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    label: 'Hello here!'
  },
};

export default ButtonMeta;

type MyButtonStory = ComponentStory<typeof Button>;

export const Primary: MyButtonStory = (args) => <Button {...args} />;

export const Secondary: MyButtonStory = (args) => <Button {...args} />;
Secondary.args ={
  type: 'secondary'
}

export const Danger: MyButtonStory = (args) => <Button {...args} />;
Danger.args ={
  type: 'danger'
}

export const Link: MyButtonStory = (args) => <Button {...args} />;
Link.args ={
  type: 'link'
}