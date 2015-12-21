Meteor.methods({
    insertQuestion(question) {
        check(question, String);

        //@TODO: refactor this

        let quest = {
            question: question,
            created: now
        }, questionId = Questions.insert(quest);

        return {
            _id: questionId
        };
    }
});