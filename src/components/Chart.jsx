import { HStack, Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsCheckLg, BsFillCaretRightFill } from 'react-icons/bs'

const Chart = ({ Img, head, para1, para2 }) => {


    return (
        <HStack align={'flex-start'}  flexDirection={['column','column','row']} borderRadius={'1rem'} background={'#412a4c'} pt={['0rem','0rem','2rem']} pb={'2rem'} color='white'>
            <VStack textAlign={'start'} align={'flex-start'} p={'3rem 2.5rem'} w={['100%','100%','45rem']} >
                <Text fontSize={'2.4rem'} fontWeight={'600'}>{head}</Text>
                <Text position={'relative'} fontSize={'1.2rem'} w={'89%'}><BsCheckLg style={{
                    display: 'inline',
                }} fill={'#e57cd8'} />&nbsp;&nbsp; {para1}</Text>
                <Text fontSize={'1.2rem'} w={'89%'}><BsCheckLg style={{
                    display: 'inline',
                }} fill={'#e57cd8'} /> &nbsp; &nbsp;{para2}</Text>
                <HStack mt={'2.5rem !important'} >
                    <Button p='1.8rem 2.8rem' fontWeight={'700'} _hover={{
                        background: '#7e6e85'
                    }} color='white' background={'#e57cd8'} borderRadius={'3rem'} >Learn More</Button>
                    <Text fontWeight={'600'}><a href="#">Or sign up for free <BsFillCaretRightFill style={{
                        display: 'inline',
                        width: '11px',
                        height: '11px',
                    }} /></a></Text>
                </HStack>
            </VStack>
            <VStack w={['100%','100%','66%']} mt={'1.8rem !important'}>
                <Image src={Img} w={['100%','100%','94%']} />
            </VStack>
        </HStack >
    )
}

export default Chart