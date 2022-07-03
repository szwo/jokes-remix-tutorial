const NewJokes = () => {
    return (
        <div>
            <p>Add a new joke here!</p>
            <form method="post">
                <div>
                <label>
                    Name: <input type="text" name="name"></input>
                </label>
                </div>
                <div>
                <label>
                    Content: <textarea name="content" />
                </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewJokes;