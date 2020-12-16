import { Link } from 'react-router-dom';

function BountyLink(props) {
  const linkTo = `/show/${props.bountyId}`
  return (
    <Link to={linkTo}></Link>
  )
}

export default BountyLink;
