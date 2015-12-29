App.QuestionForm = React.createClass({
    handleSubmit(event) {
        event.preventDefault();
    },

    render() {
        return (
            <form className="ask question form" onSubmit={this.handleSubmit}>
                <div className="input group">
                    <input type="text" className="question input" autofocus />
                    <button type="submit" className="secondary centered submit button">Ask</button>
                </div>
            </form>
        );
    }
});