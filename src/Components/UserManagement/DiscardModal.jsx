import React from 'react'
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

import Modal from "@common/UI/Modal";
import FlexBox from '../common/UI/Flexbox';

const Cross = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const Wrapper = styled(FlexBox)`
    position: relative;

`
const DiscardModal = ({closeModal}) => {
  return (
      <Modal
      M3
      onClose={closeModal}
      height="fit-content"
      width="50vw"
      borderRadius="1rem"
      >
      <Wrapper>
      <Cross onClick={closeModal}>
        <TfiClose />
      </Cross>
    <div>
      hello
    </div>
    </Wrapper>
    </Modal>
  )
}

export default DiscardModal;
