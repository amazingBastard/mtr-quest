App.Ask = React.createClass({
    render() {
        return (
            <module className="ask module">
                <form className="ask question form">
                    <input type="text" className="question input"/>
                    <button type="submit" className="primary centered submit button">Ask</button>
                </form>
            </module>
        );
    }
});