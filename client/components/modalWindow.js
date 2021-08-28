/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function ModalWindow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: '1',
      bottom: '1',
      marginRight: '-50%',
      width: '60%',
      transform: 'translate(-40%, -10%)',
    },
  };
  return (
    <>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default ModalWindow;
