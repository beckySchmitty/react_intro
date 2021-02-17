const Person = ({age, name, hobbies}) => {
    return (
        <div>
            <p>Learn some information about {name.length > 8 ? name.splice(6) : name}</p>
            <h3>Age: {age > 18 ? "please go vote!" : "You must be 18" }</h3>
            <h3>{age > 18 ? "please go vote!" : "You must be 18" }</h3>

            <ul> Hobbies
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}