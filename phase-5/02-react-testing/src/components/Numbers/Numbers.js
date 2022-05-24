function Numbers({items}) {

    return (
      <div>
        {
          items.map(number => (
            <li key={number}>{number}</li>
          ))
        }
      </div>
    )

}

export default Numbers;
