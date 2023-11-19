import './Card.css';
function Card () {
    const classes = 'card' +props.className;
    return <div className='card'> {props.childeren}</div>

}
export default Card;