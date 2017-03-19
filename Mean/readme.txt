…or create a new repository on the command line

echo "# King" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/CDSeattleMEAN032017/King.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/CDSeattleMEAN032017/King.git
git push -u origin master

Create a new project

Step 1
mkdir projectName
cd projectName

Step 2
npm init -y

Step 3
npm install express --save
npm install ejs --save
npm install body-parser --save
npm install cookie-parser --save
npm install mongoose --save

npm install -S express angular ejs body-parser cookie-parser mongoose mongodb-clients mongodb-server

sudo npm install -g nodemon
npm config get prefix
npm install forever -g

npm install json-server --save-dev
npm install faker

$ sudo npm install forever -g   #install
$ forever start app.js          #start
$ forever stop app.js           #stop
$ forever start -l forever.log -o out.log -e err.log app.js   #log

sudo apt install mongodb-clients
sudo apt install mongodb-server
./mongod --dbpath="c:\data\db" --rest
use dbName
db.createCollection("COLLECTION_NAME")
db.COLLECTION_NAME.drop()
db.dropDatabase()
db.collection.drop()
db.COLLECTION_NAME.insert(document) or db.col.save(document)
db.col.find()

db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );
db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );
db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );
db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );
db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );
db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );

db.collection.remove(
   <query>,
   <justOne>
)
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
db.COLLECTION_NAME.find()
db.col.find().pretty()
AND:
db.col.find({key1:value1, key2:value2}).pretty()
OR:
db.col.find(
   {
      $or: [
	     {key1: value1}, {key2:value2}
      ]
   }
).pretty()
db.COLLECTION_NAME.find().limit(NUMBER)
db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)

db.COLLECTION_NAME.find().sort({KEY:1})
db.COLLECTION_NAME.ensureIndex({KEY:1})
db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
mongod --port 27017 --dbpath "D:\set up\mongodb\data" --replSet rs0
rs.initiate()
rs.conf()
rs.status()
rs.add(HOST_NAME:PORT)
db.isMaster()

Shard Server 1：27020
Shard Server 2：27021
Shard Server 3：27022
Shard Server 4：27023
Config Server ：27100
Route Process：40000

mongodump -h dbhost -d dbname -o dbdirectory
mongorestore -h <hostname><:port> -d dbname <path>
mongostat
mongotop
mongotop 10
mongotop --locks
newObjectId = ObjectId()
ObjectId("58c3341e791876a957146e34").getTimestamp()
new ObjectId().str
db.collection.mapReduce(
   function() {emit(key,value);},
   function(key,values) {return reduceFunction},
   {
      out: collection,
      query: document,
      sort: document,
      limit: number
   }
)
db.adminCommand({setParameter:true,textSearchEnabled:true})
./mongod --setParameter textSearchEnabled=true
db.posts.ensureIndex({post_text:"text"})
db.posts.getIndexes()

CLIENT_ID=784321585050489 CLIENT_SECRET=f0ab34f86bc0f7fe3eda50f2fa815fba node server.js
$ npm install passport-facebook

git push --force origin
git push --all origin
git push origin --delete master