import React, { Component } from 'react'; 
import { Modal, ModalBody, ModalFooter, ModalHeader, Input, Button } from 'reactstrap';


class PhotoPickerModal extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }
  state = {
    modalOpen: false, 
  }

  render() {
    const { isOpen, toggle } = this.props;
    return (
      <Modal isOpen={isOpen} className="photoPicker-modal">
        <ModalHeader>Image Gallery</ModalHeader>
        <ModalBody>
          <Input className="modal-input" placeholder="Search for images in this section" />
          <div className="image-selection-area">

          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary insert-button" onClick={toggle}>Insert</Button>{' '}
          <a className="cancel-link" onClick={toggle}>Cancel</a>
        </ModalFooter>
      </Modal>
    )
  }
}

type MyProps = {
  isOpen: boolean;
  toggle: () => any;
};

type Props = MyProps;

type State = {
  modalOpen: boolean;
};

export default PhotoPickerModal;