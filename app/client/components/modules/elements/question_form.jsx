App.QuestionForm = React.createClass({
    render() {
        return (
            <form className="ask question form">
                <div className="input group">
                    <input type="text" className="question input" autofocus />
                    <button type="submit" className="secondary centered submit button">Ask</button>
                </div>
            </form>
        );
    }
});