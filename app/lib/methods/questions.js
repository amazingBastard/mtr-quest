Meteor.methods({
    insertQuestion(question) {
        check(question, String);

        let question = _.extend(question, {
            created: now
        }), questionId = Questions.insert(question);

        return {
            _id: questionId
        };
    }
});