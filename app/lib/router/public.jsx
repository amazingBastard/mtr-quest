
const pageView = () => {
    GAnalytics.pageview();
};

const publicRoutes = FlowRouter.group({
    name: 'public',
    triggersEnter: [pageView]
});

publicRoutes.route('/', {
    name: 'root',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Root />});
    }
});

// @TODO: create better names for these routes

publicRoutes.route('/question', {
    name: 'question',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Question />});
    }
});

publicRoutes.route('/login', {
    name: 'login',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Login />});
    }
});