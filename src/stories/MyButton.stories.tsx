import React from 'react';
import { action } from '@storybook/addon-actions';
import { MyButton } from "components/MyButton";

export default {
    component: MyButton,
    title: 'MyComponent'
};

export const firstButton = () => <>
    <MyButton disabled={true} width="fluid" >Hello, MyButton</MyButton>
    <br />
    <MyButton onClick={action('clicked')} >Hello, MyButton</MyButton>
    <br />
    <MyButton>Hello, MyButton</MyButton>
</>

export const secondButton = () => <MyButton variant="second" >Hello, MyButton</MyButton>