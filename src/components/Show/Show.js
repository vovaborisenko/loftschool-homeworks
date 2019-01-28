import React, { Component } from 'react';
import { getShowInfo } from '../../api.js';

class Show extends Component {
    state = {
        showId: '',
        data: ''
    };

    static getDerivedStateFromProps = (props, state) => {
        return state = { showId : props.showId };
    }

    componentDidUpdate = (prevProps) => {
        const { showId } = this.state;
        if (prevProps.showId !== showId) {
            getShowInfo(showId)
                .then(data => { this.setState({ data : data })});
        }
    }

    render() {
        const { data: { image, summary, name, genres } } = this.state;
        const { data } = this.state;

        return data
            ? (<div className="show">
                <img className="show-image" src={image.medium} alt="{name}"/>
                <h2 className="show-label t-show-name">{name}</h2>
                <p className="show-text t-show-genre">
                    <b>Жанр: </b>
                    {genres.join(', ')}
                </p>
                <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html: summary}}></p>
            </div>)
            : <p className="show-inforation t-show-info">Шоу не выбрано</p>
    }
}

export default Show;