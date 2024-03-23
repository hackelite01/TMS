import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
function Home() {

    return <Box bg='#f3f3f3' w={'100%'}>
    <Box bg = '#577b87' h = {{base:'60vh',md:'12v0h',lg:'50vh'}} >
        <Box  w='80%' m='auto' gap={'1rem'} display={{sm:'grid',md:'flex',lg:'flex'}} justifyContent='space-evenly' >
            <Box w={{base:'40%',lg:"30%"}} m='auto'>
                <Image src='https://ichef.bbci.co.uk/images/ic/1280xn/p0252jmf.jpg' alt='Home_page'borderRadius={15}/>
            </Box>
            <Box display='flex' flexDirection='column'>
                <Heading color='white' textAlign='start' mb='1rem' mt='2rem'>Type Faster</Heading>
                <Text mb='1rem' textAlign='start' color='white'>Check your typing speed online. Grow your typing ablity with us</Text>
            </Box>

        </Box>
    </Box>

        <Box display='flex' flexDirection='column' gap={35}>

            <Box bg='white' w='70%' borderRadius='15px' mb='100px' ml='15%' display={{lg: 'flex',md: 'grid'}} justifyContent='space-around'>
                <Box alignSelf={'center'} m='auto' p={'1.8rem'} ml={{base:'none',lg:'7rem'}}>
                <Image src='https://www.pngtosvg.com/gallery/wp-content/uploads/2020/12/1949685070.png'  />
                </Box>
                <Box p={{sm:"2rem"}}>
                    <Box p={4}>
                    <Heading textAlign='start' mb='1rem' color={'black'}>Typing Test</Heading>
                    <Text textAlign='start' color={'black'} mb='1rem'>Take an online typing test to find out your typing speed and impress friends or employers with your personal typing skills.</Text>
                    <Link to="/testspeed" className='pageLink'>Take Typing Test Free </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    
}
export default Home;