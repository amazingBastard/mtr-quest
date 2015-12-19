const privateRedirect = () => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        FlowRouter.go('login');
    }
};

const pageView = () => {
    GAnalytics.pageview();
};

const privateRoutes = FlowRouter.group({
    name: 'private',
    triggersEnter: [privateRedirect, pageView]
});

// @TODO: give this route a better name

privateRoutes.route('/confirm', {
    name: 'confirm',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Confirm />});
    }
});