Responses = new Mongo.Collection('responses');

Responses.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Responses.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});

let ResponsesSchema = new SimpleSchema({
    'response': {
        type: String,
        label: 'The response string that is sent to the client'
    },
    'owner': {
        type: String,
        label: 'The owner id of the response object'
    },
    'type': {
        type: String,
        label: 'The type of response in relation to the question',
        optional: true
    },
    'createdAt': {
        type: Date,
        label: 'The date the response object was created'
    }
});

Responses.attachSchema(ResponsesSchema);