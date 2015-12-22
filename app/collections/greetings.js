Greetings = new Mongo.Collection('greetings');

Greetings.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Greetings.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});

let GreetingsSchema = new SimpleSchema({
    'greeting': {
        type: String,
        label: 'The greeting string that is sent to the client'
    },
    'type': {
        type: String,
        label: 'The type of greeting in relation to the user',
        optional: true
    },
    'created': {
        type: Date,
        label: 'The date the greeting object was created'
    }
});

Greetings.attachSchema(GreetingsSchema);