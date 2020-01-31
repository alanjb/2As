import React, { Component } from 'react'; 
import { Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Input, Button, FormGroup } from 'reactstrap';

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
            {/* Image Selector Here */}
          </div>
          <br></br>
          <h6>Alignment</h6>
          <div className="alignment-area">
      
            <FormGroup check>
              <Label check  defaultChecked>
                <Input type="radio" name="none" />{' '}
                None
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="radio" name="left" />{' '}
                Left
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="radio" name="left" />{' '}
                Center
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="radio" name="left" />{' '}
                Right
              </Label>
            </FormGroup>

          </div>

          <br></br>
          <FormGroup check className="captioned-image-checkbox">
            <Label check>
            <Input  type="checkbox" />{' '}
              Captioned Image
            </Label>
          </FormGroup>
          
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