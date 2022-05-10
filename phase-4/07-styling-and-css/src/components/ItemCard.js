import profilePic from '../assets/generic-profile-icon.png'

function ItemCard({item}) {

  return (
    <div className="item-card">

      <img className="profile-pic" src={profilePic} alt="generic profile picture" />

      <span>{item}</span>

    </div>
  )

}

export default ItemCard;
