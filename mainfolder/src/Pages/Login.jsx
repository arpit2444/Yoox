import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from "axios";
export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [tok,setTok] = useState(false)
  const handleSubmit=()=>{
    const newObj={email,password}
    axios.post(`https://reqres.in/api/login`,newObj)
    .then((res)=>setTok(true))
    .catch((e)=>setTok(false))
  }


  return (
    <div>
      {tok?<h1 style={{fontWeight:"bold",fontSize:"40px",marginTop:"50px"}} >You are Logged in Now</h1>:
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login </Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          // bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'black'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handleSubmit}
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>}
    </div>
  );
}