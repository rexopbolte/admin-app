import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux';
import Layout from '../../components/layout'
import Input from '../../components/layout/UI/Input'
import { login } from '../../actions';
import { Redirect } from 'react-router';


function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();



    const userLogin = (e) => {



        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SignIn
