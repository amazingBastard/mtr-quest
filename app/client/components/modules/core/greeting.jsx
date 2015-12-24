App.Greeting = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        let selector = {type: 'casual'},
            subscription = Meteor.subscribe('greetings', selector);

        return {
            isLoading: !subscription.ready(),
            greeting: Greetings.find({}, {sort: {createdAt: -1}, limit: 1}).fetch()
        };
    },

    render() {
        if (this.data.isLoading) {
            return <App.Loading />;
        } else {
            return (
                <module className="centered greeting module">
                    <p className="greeting">Hello! What's on your mind?</p>
                </module>
            );
        }
    }
});