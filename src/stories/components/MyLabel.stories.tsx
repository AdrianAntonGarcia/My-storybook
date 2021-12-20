import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  component: MyLabel,
  title: 'Ui/Etiquetas/MyLabel',
  // Personalizacion control
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    // No hace falta si la propiedad tiene de nombre color
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = { size: 'normal', allCaps: false };

export const AllCaps = Template.bind({});
AllCaps.args = { size: 'normal', allCaps: true };

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  fontColor: '#754877',
  size: 'h1',
};
