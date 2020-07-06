import React , {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import IdeaForm from '../components/form'
import { Container } from 'react-grid-system';
import styled from "styled-components";

class CreateList extends Component {

    state = {

    }

    render() {
        return (
            <span>
            <Header />

            <IdeaForm />
            {/* <Footer /> */}
            </span>
        )
    }
}

export default CreateList;