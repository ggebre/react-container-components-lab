import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchForm from './SearchForm'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL+"&query="+this.state.searchTerm)
            .then(resp => resp.json())
            .then(movieReviews => this.setState({reviews: movieReviews.results, searchTerm: ""}))
            
    }
    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    render() {
        
        return (
            <div className="searchable-movie-reviews">
                <SearchForm 
                    handleChange={this.handleChange} 
                    searchTerm={this.state.searchTerm} 
                    handleSubmit={this.handleSubmit}/>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
    
}