const App = () => {
    return (
        <div>
            <Tweet username="BJH" name="Bojack" date="2/16/2021" message="hello"/>
            <Tweet username="Taylor" name="Taylor Swift" date="2/16/2021" message="Did you listen to my album?"/>
            <Tweet username="46" name="Joe Biden" date="2/16/2021" message="C'mon Man"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))