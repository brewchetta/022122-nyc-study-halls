function PlanetForm() {

    function handleSubmit() {
        // write something here to persist the new planet...
        // you'll also have to do something to make the planet appear in the list...
    }

    return (
        <form onSubmit={handleSubmit}>

            <h3>List a New Planet</h3>

            <label htmlFor="name">Name: </label>
            <input name="name" value="Name goes here"/>

            <label htmlFor="orbital_period_in_earth_days">Orbital Period: </label>
            <input name="orbital_period_in_earth_days" type="number" step="0.01" value="0"/>

            <label htmlFor="fun_fact">Fun Fact: </label>
            <input name="fun_fact" value="Name goes here"/>

            <label htmlFor="is_planet">Is It A Real Planet: </label>
            <input name="is_planet" type="checkbox" checked={false} />

            <input type="submit" value="List your planet" />

        </form>        
    )

}

export default PlanetForm