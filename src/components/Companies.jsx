import { SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CompaniesBox from './CompaniesBox'
import Rotate from './Rotate'
import sweat from '../Images/sweat.avif'
import software from '../Images/software.avif'
import perception from '../Images/perception.avif';
import OnBoarding from './OnBoarding'
const companies=[
    { 
          head:'20% increase in profitability',
          desc:'at Sweat+Co PR agency, with accurate billable hours tracking.',
          Img:sweat
        },
        {
        head:'100% time tracking adoption',
        desc:'at software consultancy Newlogic for accurate reporting.',
        Img:software
    },
    {
        head:'40+ hours saved per month',
        desc:'at Perception Engineering with simple, one-click time tracking and invoicing.',
        Img:perception
    }
]

const Companies = () => {
    return (
        <VStack background={'#fdf1ec'} w={'100%'} p={'0.5rem 3.5rem'} pb={'5rem'}>

            <Text mt={['2rem',null,'6rem !important']}  fontSize={['1.5rem',null,'2.6rem']} color='#2c1338' fontWeight={'600'} w={['100%',null,'66%']} >
                Companies that use Toggl Track see <Rotate word={'results'} Color={'#2c1338'} /> in profit and productivity
            </Text>
            <SimpleGrid columns={[1, 2, 2,3]} spacing={['5',null,'20']} mt={'3rem'}>
                {
                    companies.map((el)=> <CompaniesBox Img={el.Img} desc={el.desc} head={el.head} />)
                }      
        </SimpleGrid>
        <OnBoarding/>
        </VStack>
    )
}

export default Companies