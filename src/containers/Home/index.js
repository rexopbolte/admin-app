import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/layout/index'

function Home() {
    return (
        <Layout>
            <Jumbotron style={{ margin: '6rem', background: 'white' }} className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
            </Jumbotron>

        </Layout>
    )
}

export default Home
