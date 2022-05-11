function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div id={id} className='card movie'>
      <div className='card-image waves-effect waves-block waves-light'>
        {poster === 'N/A' ? (
          <img
            className='activator'
            src={'https://via.placeholder.com/300.png/09f/fff'}
            alt='Movie'
          />
        ) : (
          <img className='activator' src={poster} alt='Movie' />
        )}
      </div>
      <div className='card-content'>
        <div className='card-title activator grey-text text-darken-4'>
          {title}
        </div>
        <div >
            <div className="year">{year}</div>
           <div className='right'>{type}</div>
        </div>
      </div>
    </div>
  );
}

export { Movie };
