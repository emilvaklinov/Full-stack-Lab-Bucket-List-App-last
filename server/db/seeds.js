use bucketList;
db.dropDatabase();

db.list.insertMany([
  {
    activity: "travel",
    location: "everywhere"
  },

  {
    activity: "be happy",
    location: "everywhere"
  }
]);
