const App = () => {
    return (
        <div>
            <Person name="BoJack" age="56" hobbies={["Acting", "Being hilarious", "Yelling at Todd"]}/>
            <Person name="Homer" age="44" hobbies={["bowling", "drinking beer", "watching tv"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))