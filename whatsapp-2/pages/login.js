import styled from 'styled-components';
import Head from 'next/head';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Log in</title>
            </Head>
            <LoginContainer>
                <Logo src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'/>
                <SigninButton onClick={signIn}>Sign in with Google</SigninButton>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
display: grid;
place-items: center;
height: 60vh;
background-color: whitesmoke;
`;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Logo = styled.img`
height: 15rem;
width: 15rem;
margin-bottom: 10px;
`;

const SigninButton = styled(Button)`
&&& {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}
`;
