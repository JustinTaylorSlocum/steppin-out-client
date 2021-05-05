import React, { useEffect, useState } from "react";
import { Modal, FormGroup, FormControl, Button } from '@material-ui/core';

const NewsPostModal = (props) => {
    const [modal, setModal] = useState(false);

    const handleToggle = () => { setModal(!modal) };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Close modal
         handleToggle();
    }

    return (
        <Modal>
            <FormControl>

                <Button>Create Post</Button>
            </FormControl>
        </Modal>
    )
}

export default NewsPostModal;