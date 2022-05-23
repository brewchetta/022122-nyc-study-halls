function Numbers({items}) {

    return (
      <div>
        {
          items.map(number => (
            <p key={number}>{number}</p>
          ))
        }
      </div>
    )

}

export default Numbers;
