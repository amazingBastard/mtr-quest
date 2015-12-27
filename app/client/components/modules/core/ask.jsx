App.Ask = React.createClass({
    // @TODO: question form into component
    render() {
        return (
            <module className="ask module">
                <form className="ask question form">
                    <div className="input group">
                        <input type="text" className="question input" autofocus />
                        <button type="submit" className="secondary centered submit button">Ask</button>
                    </div>
                </form>
            </module>
        );
    }
});