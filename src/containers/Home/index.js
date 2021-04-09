import React, { useEffect } from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/layout/index'
import { isUserLoggedIn } from '../../actions/auth.actions'
import './style.css'

function Home() {



    return (
        <Layout>
            {/*<Jumbotron style={{ margin: '6rem', background: 'white' }} className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
    </Jumbotron>*/}
            <Container fluid>
                <Row>
                    <Col md={2} className='sidebar'>
                        Dashboard
        </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}>
                        Container
        </Col>
                </Row>

            </Container>


        </Layout>
    )
}

export default Home
