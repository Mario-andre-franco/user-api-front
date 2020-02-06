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
        const response = await api.get(`/nextEvent?page=${page}`)
        const {docs, ...eventInfo} = response.data
        this.setState({event: docs, eventInfo, page})
    }

    prevPage = () => {
        const {page, eventInfo} = this.state

        if (page === 1 ) return

        const pageNumber = page - 1

        this.loadEvent(pageNumber)
    }

    nextPage = () => {
        const {page, eventInfo} = this.state

        if (page === eventInfo.page) return

        const pageNumber = page + 1

        this.loadEvent(pageNumber)
    }

    render() {
        const { event, page, eventInfo } = this.state
        return (
            <div className="event-list">
                {event.map(event => (
                    <article key={event._id}>
                        <strong> {event.title}</strong>
                        <p> {event.description}</p>

                        <Link to={`/nextEvent/${event._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === eventInfo.page} onClick={this.nextPage}>Proximo</button>
                </div>

            </div>
        )

    }
}