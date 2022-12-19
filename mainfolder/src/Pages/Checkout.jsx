import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Button
  } from '@chakra-ui/react'

export default function Checkout() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
          Some other content that'll receive focus on close.
        </Box>
  
        <Button mt={4} onClick={onOpen}>
          Open Modal
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Hurrey! Your Order is on Your Way.</ModalHeader>
            <ModalCloseButton />
         <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }