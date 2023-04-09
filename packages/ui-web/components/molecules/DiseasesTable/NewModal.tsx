import React, { useRef } from "react";
import { Box } from "../../atoms/Box";
import { Input } from "../../atoms/Input";
import { Text } from "../../atoms/Text";
import { Modal } from "../../atoms/Modal";
import { v4 as uuidv4 } from 'uuid';

interface NewModalI {
    showModal: boolean,
    onCancel: () => void, 
    onConfirm: (disease: DiseasesI) => void
}
export const NewModal = ({showModal, onCancel, onConfirm}:NewModalI) => {
    const nameRef = useRef<HTMLInputElement | null>(null)
    const notesRef = useRef<HTMLInputElement | null>(null)

    return (
        <Modal 
                isShowing={showModal} 
                onCancel={() => onCancel()} 
                onConfirm={() => onConfirm({name: nameRef.current!.value, notes: notesRef.current!.value, id: uuidv4()})}
                cancelText="Cancel"
                confirmText="Add disease"
                title="Add new disease"
            >
                <Box direction="column" gap="small">
                    <Box direction="column">
                        <Text text="Name" size="small" color="black" fontWeight="bold"/>
                        <Input placeholder="Name" ref={nameRef}/>
                    </Box>

                    <Box direction="column">
                        <Text text="Notes" size="small" color="black" fontWeight="bold"/>
                        <Input placeholder="Notes" ref={notesRef}/>
                    </Box>
                </Box>
            </Modal>
    )
}