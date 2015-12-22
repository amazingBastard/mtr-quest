Questions = new Mongo.Collection('questions');

Questions.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Questions.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});

let QuestionsSchema = new SimpleSchema({
    'question': {
        type: String,
        label: 'A question to be asked'
    },
    'owner': {
        type: String,
        label: 'The owner id of the question object'
    },
    // @TODO: sorting algorithm that sets a question type to user question.
    'type': {
        type: String,
        label: 'The type of question in relation to the response',
        optional: true
    },
    'createdAt': {
        type: Date,
        label: 'The date the question object was created'
    }
});

Questions.attachSchema(QuestionsSchema);