const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Becky" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))