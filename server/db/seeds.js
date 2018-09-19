use bucketList;
db.dropDatabase();

db.list.insertMany([
  {
    activity: "travel",
    location: "everywhere",
    date: ""
  },

  {
    activity: "be happy",
    location: "everywhere",
    date: ""
  }
]);
