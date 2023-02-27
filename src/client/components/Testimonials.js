import React from 'react';
import { Box, Heading, Text, Avatar, Center, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ImQuotesLeft } from 'react-icons/im';
import '../styles/slick.css';

const settings = {
  dots: false,
  autoScroll: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      },
    },
  ],
};

export default function CaptionCarousel() {
  const cards = [
    {
      name: 'Madelyn Randolph',
      body: 'Excellent customer service! Very fast turnaround on tailoring when we needed trousers shortened.',
      url: '',
    },
    {
      name: 'Mark Brown',
      body: 'Best dry cleaners in the area, very helpful and polite, excellent at what they do. Friendly people.',
      url: '',
    },
    {
      name: 'Ben A',
      body: ' Such a great shop to have in Hayes. Helpful and they actually give good service unlike the previous owner.',
      url: '',
    },
    {
      name: 'Sarah Ouellet',
      body: 'Staff is friendly and the perfumes are highly recommend.',
      url: 'https://lh3.googleusercontent.com/a-/AD5-WCluFMwHL5MvspoWmZThw65qlfKSAAgQzS4K4RWV=w60-h60-p-rp-mo-ba3-br100',
    },
    {
      name: 'Ayden Bryan',
      body: 'Great service along with great prices.',
      url: '',
    },
    {
      name: 'Sevim Mustafa',
      body: 'Excellent cleaning and repairs of my trousers and jeans. Thank you',
      url: '',
    },
    {
      name: 'James White',
      body: ' Good prices, good service. Very helpful.',
      url: '',
    },
    {
      name: 'Tina',
      body: 'A very welcome addition to Hayes. Service with a smile.',
      url: '',
    },
    {
      name: 'Hamzah H',
      body: '⭐️⭐️⭐️⭐️⭐️ great people, better dry cleaning. Highly recommend!',
      url: '',
    },
    {
      name: 'Victoria Coll',
      body: 'Lovely addition to Hayes. Completed a huge order for me in good time and there was no compromise on quality due to the shorter time. Very good at what they do.',
      url: 'https://lh3.googleusercontent.com/a-/AD5-WCmWDXmtu14o5rItxap6Sl8JUjG-QfYXWR1n6yKq=w60-h60-p-rp-mo-br100',
    },
    {
      name: 'Angela Rodney',
      body: ' Use this place regularly for alterations and cleaning. Work is always completed to a high standard.',
      url: '',
    },
    {
      name: 'Suzan Brown',
      body: 'Have been going to them since they opened and safe to say have not been disappointed at all. Clothes are always cleaned to a high standard and they are brilliant with alterations. Turnaround is good as well would definitely recommend.',
      url: '',
    },
    {
      name: 'Albin A',
      body: 'I use their service regularly and they always do a great job, even get all the stains out my tops. Thanks guys!',
      url: '',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={['400px', '440px', '600px']}
      width={'99vw'}
      overflow={'hidden'}
      mt={['64px', '64px', '80px']}
    >
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <Slider {...settings}>
        {cards.map((item, index) => (
          <Center p={'0.5rem'} bgColor={'attire.1'}>
            <Center
              key={index}
              overflow={'hidden'}
              maxW={['70vw', '40vw', '30vw']}
              bg={'attire.2'}
            >
              <Center
                position={'absolute'}
                zIndex={'0'}
                w={['5rem', '10rem']}
                h={['5rem', '10rem']}
                transform={'translateY(-30px)'}
              >
                <ImQuotesLeft
                  size={'20rem'}
                  color='rgb(255, 255, 255,  0.08)'
                />
              </Center>
              <VStack m={{ base: '1rem', lg: '2rem' }} zIndex={'2'}>
                <Avatar
                  name={item.name}
                  src={item.url}
                  m={['1rem', '2rem']}
                  size={'lg'}
                />
                <Text
                  textColor={'attire.1'}
                  textAlign={'center'}
                  fontSize={{ base: '10px', lg: 'md' }}
                  h={{ base: '5rem', lg: '6.5rem' }}
                >
                  "{item.body}"
                </Text>
                <Heading
                  fontSize={{ base: 'xs', lg: 'lg' }}
                  py={'1rem'}
                  textColor={'attire.1'}
                >
                  {item.name}
                </Heading>
              </VStack>
            </Center>
          </Center>
        ))}
      </Slider>
    </Box>
  );
}
