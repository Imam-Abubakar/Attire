import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const ContactDetails = (props) => {
  return (
    <VStack
      w={'fit-content'}
      alignItems={'flex-start'}
      align={'start'}
      alignSelf={'center'}
    >
      <HStack>
        <HiOutlineLocationMarker color={props.textcolor} />
        <Text
          textColor={props.textcolor}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
        <a href="https://goo.gl/maps/VzsDcTT2CdiyZFLDA" target="_blank">
          34 Station Approach, BR2 7EJ, Hayes
        </a>
        </Text>
      </HStack>
      <HStack>
        <BsTelephone color={props.textcolor} />
        <Text
          textColor={props.textcolor}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
          // prettier-ignore
        <a href="tel:+442084622165">
          020{" "}8462{" "}2165
        </a>
        </Text>
      </HStack>
      <HStack>
        <MdAlternateEmail color={props.textcolor} />
        <Text
          textColor={props.textcolor}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
        <a href="mailto:info@attiredryclean.co.uk" target="_blank">
          info@attiredryclean.co.uk
        </a>
        </Text>
      </HStack>
    </VStack>
  );
};

export default ContactDetails;
