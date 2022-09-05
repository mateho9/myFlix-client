import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        {_id: 1, Title: 'Inception', Description: 'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.', ImagePath: '.img/inception.png'},
        {_id: 2, Title: 'The Shawshank Redemption', Description: 'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption.', Imagepath: '.img/shawshank.png'},
        {_id: 3, Title: 'Gladiator', Description: 'Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson. The film was co-produced and released by DreamWorks Pictures and Universal Pictures.', ImagePath: '.img/gladiator.png'},
        {_id: 4, Title: 'Everything Everywhere All At Once', Description: 'Everything Everywhere All at Once is a 2022 American absurdist comedy-drama film written and directed by Daniel Kwan and Daniel Scheinert, who produced it with the Russo brothers.', ImagePath: '.img/EEAO.png'}
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if(movies.length === 0) return <div className='main-view'>The list is empty!</div>;

    return (
      <div className='main-view'>
        {selectedMovie
        ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
        : movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
        ))
      }
      </div>
    );
  }
}