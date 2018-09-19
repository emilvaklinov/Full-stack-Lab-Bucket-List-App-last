const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const BucketList = function(url) {
  this.url = 'http://localhost:3000/api/list';
  this.request = new Request(this.url);
};

BucketList.prototype.bindEvents = function(){
  PubSub.subscribe('ListFormView:list-submitted', (event) => {
    this.postList(event.detail);
    console.log(`bucket list received event: ${event}`);
  })

  PubSub.subscribe('ListFormView:list-delete-clicked', (evt) => {
    this.deleteListItem(evt.detail);
  });

};

BucketList.prototype.getData = function(){
  this.request.get()
    .then((bucketList)=>{
      PubSub.publish('BucketList:data-loaded', bucketList);
    })
    .catch(console.error);
};

BucketList.prototype.postList = function(list){
  this.request.post(list)
  .then((bucketList) => {
    PubSub.publish('BucketList:data-loaded', bucketList);
  })
  .catch(console.error);
};

BucketList.prototype.deleteListItem = function (listItemId) {
  this.request.delete(listItemId)
    .then((bucketList) => {
      PubSub.publish('BucketList:data-loaded', bucketList);
    })
    .catch(console.error);
};


module.exports = BucketList;
