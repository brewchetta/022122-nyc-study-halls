import ItemCard from './ItemCard'

function ItemList() {

  const items = ["Hello", "What's Up", "Buenos Dias", "Konichiwa", "Bonjiorno", "Howdy Howdy", "WAZZZUUUUUP", "Top o' the mornin'"]

  return (

    <>

    <h3>Common Greetings</h3>

    <div className="flex">

      { items.map( item => <ItemCard item={item} /> ) }

    </div>

    </>
  )

}

export default ItemList;
