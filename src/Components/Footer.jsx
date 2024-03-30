import {Box,Text} from "@chakra-ui/react";

function Footer() {
     
    return (
        <Box w={"full"}  h={10}  margin={'1rem auto'} textAlign="center">
            <hr color="green" />
            <Box display={'flex'} width={{base:'auto',md:'60%'}} gap={9} textAlign='center' flexWrap='wrap' m={'auto'} p='1rem'>
                <Text fontSize="xl">Contact Us at </Text> <Text color="blue" fontSize="xl"> help@typingmaster.com</Text>
            </Box>
        </Box>
    )
}
export default Footer;