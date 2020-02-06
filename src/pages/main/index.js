import React, {Component} from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default class Main extends Component{
    state = {
        event: [],
        eventInfo: {},
        page: 1
    }
    componentDidMount() {
        this.loadEvent()
    }

    loadEvent = async (page = 1) => {

    }
}