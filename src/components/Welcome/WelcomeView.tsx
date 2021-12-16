import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function SplitScreen() {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}
            >
              JurnalSio
            </Text>
            <br />{' '}
            <Text color={'green.400'} as={'span'} fontSize="3xl">
              My Jurnal
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Pegiat pendidikan, tertarik pada bidang fullstack apps development,
            artificial intelligence, UI / UX design enthusiast for mobile and
            web, dan pengembangan aplikasi Mobile secara hibryd. Menyukai dunia
            teknologi, dan perkembangan startup nasional &amp; internasional
            serta aktif pada berbagai organisasi kemahasiswaan, IT, dan kegiatan
            code bootcamp local.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href="/blog">
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Articels
              </Button>
            </Link>
            <Link href="/research">
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Research
              </Button>
            </Link>
            <Link href="/projects">
              <Button rounded={'full'}>Projects</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} p={8}>
        <Skeleton
          isLoaded={imageLoad}
          boxSize="350px"
          borderRadius="2xl"
          m="auto"
        >
          <Image
            flexGrow={3}
            borderRadius="2xl"
            boxSize="350px"
            src="./static/images/jurnalsio.jpeg"
            objectFit="cover"
            alt="JurnalSio"
            onLoad={() => setImageLoad(true)}
          />
        </Skeleton>
      </Flex>
    </Stack>
  );
}
