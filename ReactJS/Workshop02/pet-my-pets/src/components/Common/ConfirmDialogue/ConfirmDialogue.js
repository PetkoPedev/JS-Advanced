import { Button, Modal } from 'react-bootstrap';

export default function ConfirmDialogue ({
    show,
    onClose,
    onSave,
}) {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onSave}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}