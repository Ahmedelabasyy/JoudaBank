import React from 'react'
import { Container, FormWrap, Icon , FormContent , Form , FormH2 , FormLabel , FormInput, FormButton, Text  } from './sign' 


const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>JOUDA</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH2>Sign in to your account</FormH2>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
