import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../../components/atoms/Modal';
import { Button } from '../../components/atoms/Button';
import { Text } from '../../components/atoms/Text';

export default {
  title: 'Atoms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Button label='Click here' onClick={()=> setIsOpen(true)}/>
            <Modal isShowing={isOpen} onCancel={()=> setIsOpen(false)} onConfirm={()=> setIsOpen(false)}>
                <Text text='Title' color='primary' fontWeight='bold' size='large'/>
            </Modal>
        </>
    )
};
export const Default = Template.bind({});