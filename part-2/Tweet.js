const Tweet = ({username, name, date, message}) => {
    return (
        <ul>
            <div>
                <span>@{username}</span>
                <span>{name}</span>
                <span>posted at: {date}</span>
                <p>{message}</p>
            </div>
        </ul> 
    )
}