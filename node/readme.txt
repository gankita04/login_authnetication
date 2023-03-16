mongodb://localhost:27017
db.createCollection("users");
show collections
db.users.insert({username:"ankita", userage:20})
db.users.insert([
    {username:"sneha", userage:19},
    {username:"unnati", userage:20},
    {username:"mamta", userage:21}

]);
db.users.find();
db.users.find().pretty();


