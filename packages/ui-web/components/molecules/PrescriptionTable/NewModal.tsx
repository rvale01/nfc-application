import React, { useRef } from "react";
import { Box } from "../../atoms/Box";
import { Input } from "../../atoms/Input";
import { Text } from "../../atoms/Text";
import { Modal } from "../../atoms/Modal";
import { v4 as uuidv4 } from "uuid";
import { Toggle } from "../../atoms/Toggle";

interface NewModalI {
  showModal: boolean;
  onCancel: () => void;
  onConfirm: (prescription: PrescriptionI) => void;
}

export const NewModal = ({ showModal, onCancel, onConfirm }: NewModalI) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const notesRef = useRef<HTMLInputElement | null>(null);
  const startRef = useRef<HTMLInputElement | null>(null);
  const endRef = useRef<HTMLInputElement | null>(null);
  const recurringRef = useRef<{ getChecked: () => boolean } | null>(null);

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
          recurring: recurringRef.current!.getChecked(),
          id: uuidv4(),
        })
      }
      cancelText="Cancel"
      confirmText="Add prescription"
      title="Add new prescription"
    >
      <Box direction="column" gap="small">
        <Box direction="column">
          <Text text="Name" size="small" color="black" fontWeight="bold" />
          <Input placeholder="Name" ref={nameRef} />
        </Box>

        <Box direction="column">
          <Text text="Notes" size="small" color="black" fontWeight="bold" />
          <Input placeholder="Notes" ref={notesRef} />
        </Box>

        <Box direction="column">
          <Text text="Start" size="small" color="black" fontWeight="bold" />
          <Input type="date" placeholder="Start" ref={startRef} />
        </Box>

        <Box direction="column">
          <Text text="End" size="small" color="black" fontWeight="bold" />
          <Input type="date" placeholder="End" ref={endRef} />
        </Box>

        <Box direction="column">
          <Text text="Recurring" size="small" color="black" fontWeight="bold" />
          <Toggle defaultChecked={false} ref={recurringRef} />
        </Box>
      </Box>
    </Modal>
  );
};
