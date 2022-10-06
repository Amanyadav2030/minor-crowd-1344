import React from 'react'
import { FaGoogle, FaApple } from "react-icons/fa";
import { SimpleGrid, Text, VStack, Button, Box, HStack } from '@chakra-ui/react'
import { GoMail } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Rotate from './Rotate';
import { useUserContext } from '../Context/userContext';
import { useNavigate } from 'react-router-dom';
import { AuthErrorCodes } from 'firebase/auth';
const Signupfree = () => {
  const { signInWithGoogle } = useUserContext();
  const redirect = useNavigate();
  return (
    <VStack
    p={['0rem','0rem','3rem']}
      style={{ color: "snow", backgroundColor: "#422a4c" }}
    >
      <Text mt={'6rem !important'} fontSize={'2.6rem'} display={['none','none',null]} fontWeight={'600'} w={'66%'} >
        Switch to the time tracking tool <Rotate word={'70,000+'} /> teams across the world swear by
      </Text>

      <SimpleGrid
        gridTemplateColumns={['1fr','1fr','1fr 1fr']}
        style={{
          display: "grid",
          padding: "2rem 0rem",
        }}
      >


        <VStack
          align={['center','center','flex-start']}
          ml={['0rem','0rem','3.5rem']}
          w={['100%','100%','105%']}
          fontSize="1.2rem"
          p={'3rem 4rem !important'}
          h={['auto','auto','550px']}
          style={{
            backgroundColor: "#2c1438",
            color: "#fce4d8",            
            position: "relative",
          }}
        >
          <Text
            fontSize={'2.5rem'}
            mb={'1rem !important'}
            style={{
              fontWeight: "bold",
            }}
          >
            Sign up for free
          </Text>
          <Text w={'92%'} fontSize={'1.1rem'} textAlign={['center','center','start']}>
            All plans come with a free, 30-day trial of Toggl Track
            Premium—no credit card required. Upgrade at the end of the
            trial or continue using Track for free.
          </Text>
          <VStack w={'100%'}>

            <SimpleGrid
            gridTemplateColumns={['1fr','1fr','1fr 1fr']}
            w={['82%','83%',null]}
              style={{
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                onClick={signInWithGoogle}
                p={'1.6rem'}
                borderRadius={'6rem'}
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "snow",
                  margin: "1rem 0",
                  alignItems: "center",
                  width: "100%",
                }}
              >

                <FcGoogle
                  style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                />
                <span style={{ fontSize: "1rem" }}>
                  Sign up via Google
                </span>
              </Button>
              <Button
                onClick={signInWithGoogle}
                p={'1.6rem'}
                borderRadius={'6rem'}
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "snow",
                  margin: "1rem 0",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <FaApple
                  style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                />
                <span style={{ fontSize: "1rem" }}>
                  Sign up via Apple
                </span>
              </Button>
            </SimpleGrid>
            <HStack
              w={'89%'}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <Button
                onClick={() => redirect('/signup')}
                p={'1.6rem'}
                borderRadius={'6rem'}
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "snow",
                  margin: "1rem",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >

                <GoMail
                  style={{ fontSize: "1.9rem", marginRight: "1.5rem" }}
                />
                <span>or sign up via email</span>
              </Button>
            </HStack>
          </VStack>
          <Text fontSize={'1rem'} textAlign={['center','center','start']}  width={'95%'}>
            By signing up, you agree to our{" "}
            <a href="#"
              style={{ borderBottom: '0.8px solid #e57cd8' }}
            >
              terms of service
            </a>
            ,{" "}
            <a href="#"
              style={{ borderBottom: '0.8px solid #e57cd8' }}
            >
              privacy policy
            </a>{" "}
            and to{" "}
            <a href="#"
              style={{ borderBottom: '0.8px solid #e57cd8' }}
            >
              receiving
            </a>{" "}
            marketing communication from Toggl Track. You can opt out
            anytime.
          </Text>
        // </VStack >

        <VStack
          p={'3rem'}
          pl={['0rem','0rem','8rem']}
          alignItems={['center','center',null]}
          justifyContent={['center','center',null]}
          fontSize={'1.2rem'}
          mt={['0rem','0rem','17rem']}
          width={['100%','100%','95%']}
          textAlign={['center','center','start']}
          align={'flex-start'}
          style={{
            backgroundColor: "#fce4d8",
            color: "#2c1438",
          }}
        >
          <Text
            fontSize={'2rem'}
            w={['100%','100%','80%']}
            style={{
              fontWeight: "600",
            }}
            mb={['0.5rem','0.5rem','2rem']}
          >
            Prefer a product demo instead?
          </Text>
          <Text mb={'1.5rem !important'} w={['100%','100%','90%']}>
            Teams of 10+ are eligible for a personalized demo to see how Toggl Track can meet your time tracking goals
          </Text>
          <Button  p='1.8rem 2.5rem' fontSize={'1.2rem'} _hover={{
            background: '#7e6e85'
          }} color='white' background={'#e57cd8'} borderRadius={'3rem'} >Book a demo</Button>
        </VStack>

      </SimpleGrid >

    </VStack >
  )
}

export default Signupfree