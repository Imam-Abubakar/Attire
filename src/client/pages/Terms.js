import { Center, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/HOC/Layout.HOC';

const About = () => {
  return (
    <>
      <Layout
        img='https://images.unsplash.com/photo-1574269910231-bc508bcb68ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80'
        title='Terms & Conditions'
      />

      <VStack fontSize={'3xl'}>Hello</VStack>
      <Center w={'full'} padding={'4'} bg={'white'}>
        <VStack
          alignItems={'flex-start'}
          textColor={'attire.2'}
          py={['1rem', '2rem']}
        >
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            1. Information About us
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            We are a family business located in Hayes. Our aim is to provide Hayes with the best dry cleaning/ laundry and alterations experience. You can drop off your item(s) and have them ready at a time convenient to you.
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            2. Information About The Terms & Condiotions
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            2.1 - By placing an order with us you agree to all the terms and
            conditions
            <br /> 2.2 - Us is reffering to ATTIREDRYCLEANING LTD
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            3. Payment{' '}
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            3.1 - The customer understands that if an order total is below £20,
            they will be charged a fee to meet the minimum delivery point.
            <br/>
             3.2 -  The customer understands that payment for deliveries will not be able to be made on card as we have no portable card payment available, payment will be made via cash. 
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            4 . Liability
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            4.1 - The customer is responsible for removing collar stiffeners and
            cuff links from shirts. <br />
            4.2 - The customer is reponsible for ensuring pockets are empty.
            <br />
            4.3 - The customer is responsible for ensuring all items given for a
            service wash can be washed and tumble dried.
            <br />
            4.4 - The customers Item's - will be held for no longer than 3
            months; once this period is over the items will be disposed off.{' '}
            <br />
            4.5 - The customer understands that there is a risk in getting thier
            items cleaned and there is a risk of their items getting damaged, we
            will try our best to make sure this does not occur. We will cover 5
            times the cost of cleaning the item in case of any damage.
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            5. Complaints
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            5.1 - Complaints must be recieved within 48 hours of delivery.
            Before any claim for compensation can be made the clothes must be
            given a chance to collect the item's - repair the damage and then
            deliver it back. If you have any complaints, please contact us via
            the contact details shown on our Website
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            6. Prices
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            6.1 - Prices include any applicable VAT or other sales tax unless
            otherwise stated. We reserve the right to change our prices at any
            time.
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default About;
