

/// CRUD operation
/// C - CREATE / INSERT ONE DOC
db.users.insertOne({
    name: "ma",
    email: "ma@dev.com",
    followers:20,
    following:90,
    accountType:"admin",
    interest : ["art","technology","music"],
});

/// C - CREATE / INSERT MANY DOCS
db.users.insertMany([
    {
        name: "solid",
        email: "solid@dev.com",
        followers:5,
        following:20,
        accountType:"user",
        interest : ["art","technology","music"],
    },
    {
        name: "mongodb",
        email: "mongodb@dev.com",
        followers:50,
        following:90,
        accountType:"admin",
        interest : ["art","technology","travel"],
    },
    {
        name: "dart",
        email: "dart@google.com",
        followers:100,
        following:200,
        accountType:"user",
        interest : ["art","technology","blog"],
    },
    {
        name: "node",
        email: "node@dev.com",
        followers:10,
        following:0,
        accountType:"user",
        interest : ["art","technology","travel"],
    },
    {
        name: "typescript",
        email: "typescript@dev.com",
        followers:20,
        following:90,
        accountType:"user",
        interest : ["art","technology","reels"],
    },
    {
        name: "flutter",
        email: "flutter@dev.com",
        followers:20,
        following:90,
        accountType:"user",
        interest : ["art","technology",],
    }
]);

/// R - READ DOCS

db.users.find({})

// Filter Conditions
db.users.find({accountType:"admin"})

/// WHERE IN OPERATOR
db.users.find({interest: {$in :["music"]}})

///Specify AND Conditions
db.users.find({accountType:"user",following : {$lt : 90}})

///Specify OR Conditions
db.users.find({
    $or: [{ accountType: 'admin' }, { following: { $lt: 30 } }]
});

//Specify AND as well as OR Conditions

db.users.find({
    accountType: 'user',
    $or: [{ following: { $lt: 30 } }, { followers: { $gt: 50 } }]
});


/// U - UPDATE DOCS

