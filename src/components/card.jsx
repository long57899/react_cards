import PropTypes from 'prop-types'

export const Card = (props) => {

    const { image } = props;

  return (
    <div className="card">
        {image && <img src={image} alt={`card`}></img>}
        <div className="content">{props.children}</div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  children: PropTypes.array.isRequired,
}
