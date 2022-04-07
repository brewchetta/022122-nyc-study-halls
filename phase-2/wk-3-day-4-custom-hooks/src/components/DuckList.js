import DuckDisplay from "./DuckDisplay"

function DuckList({ducks, favDuck, setFavDuck}) {

  const renderedDucks = ducks.map(duck => <DuckDisplay duck={duck} favDuck={favDuck} setFavDuck={setFavDuck}/>)

  return (
    <div className="flex-row">
      {renderedDucks}
    </div>
  )
}

export default DuckList
