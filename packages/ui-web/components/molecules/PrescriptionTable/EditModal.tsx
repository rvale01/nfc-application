import React, { useRef } from "react";
import { Box } from "../../atoms/Box";
import { Input } from "../../atoms/Input";
import { Text } from "../../atoms/Text";
import { Modal } from "../../atoms/Modal";
import { Toggle } from "../../atoms/Toggle";

interface EditModalI {
    showModal: boolean,
    onCancel: () => void, 
    onConfirm: (prescription: PrescriptionI) => void;
    prescription: PrescriptionI
}
export const EditModal = ({showModal, onCancel, onConfirm, prescription}:EditModalI) => {
    const nameRef = useRef<HTMLInputElement | null>(null)
    const notesRef = useRef<HTMLInputElement | null>(null)
    const startRef = useRef<HTMLInputElement | null>(null)
    const endRef = useRef<HTMLInputElement | null>(null)
    const recurringRef = useRef<HTMLInputElement | null>(null)

    return (
        <Modal
              isShowing={showModal}
              onCancel={() => onCancel()}
              onConfirm={() =>
                onConfirm({
                  name: nameRef.current!.value,
                  notes: notesRef.current!.value,
                  start: startRef.current!.value,
                  end: endRef.current!.value,
                    // @ts-ignore
                  recurring: recurringRef.current!.getChecked(),
                  id: prescription.id,
                })}
                cancelText="Cancel"
                confirmText="Update prescription"
                title="Update prescription"
            >
                <Box direction="column" gap="small">
                    <Box direction="column">
                        <Text text="Name" size="small" color="black" fontWeight="bold"/>
                        <Input placeholder="Name" defaultValue={prescription.name} ref={nameRef}/>
                    </Box>

                    <Box direction="column">
                        <Text text="Notes" size="small" color="black" fontWeight="bold"/>
                        <Input placeholder="Notes" defaultValue={prescription.notes} ref={notesRef}/>
                    </Box>

                    <Box direction="column">
                        <Text text="Start" size="small" color="black" fontWeight="bold"/>
                        <Input type="date" placeholder="Start" defaultValue={prescription.start} ref={startRef}/>
                    </Box>

                    <Box direction="column">
                        <Text text="End" size="small" color="black" fontWeight="bold"/>
                        <Input type="date" placeholder="End" defaultValue={prescription.start} ref={endRef}/>
                    </Box>

                    <Box direction="column">
                        <Text text="Start" size="small" color="black" fontWeight="bold"/>
                        <Toggle defaultChecked={false} ref={recurringRef}/>
                    </Box>
                </Box>
            </Modal>
    )
}