const PubSub = require('../helpers/pub_sub.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function (){
  PubSub.subscribe('BucketList:data-loaded', (event) =>{
    console.log(`list view received: ${event.detail}`);
    this.renderView(event.detail);
  });
};

ListView.prototype.renderView = function (bucketList){
  this.container.innerHTML = '';
  bucketList.forEach((listItem) => { this.renderItem(listItem)});
}

ListView.prototype.renderItem = function(listItem){

  const listItemContainer = document.createElement('div');
  listItemContainer.id = 'listItem';

  const activity = this.createDetail('Activity', listItem.activity);
  listItemContainer.appendChild(activity);

  const location = this.createDetail('Location', listItem.location);
  listItemContainer.appendChild(location);

  const date = this.createDetail('Date', listItem.date);
  listItemContainer.appendChild(date);

  const deleteButton = this.createDeleteButton(listItem._id);
  listItemContainer.appendChild(deleteButton);

  this.container.appendChild(listItemContainer);
};


ListView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

ListView.prototype.createDeleteButton = function (listItemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = listItemId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('ListFormView:list-delete-clicked', event.target.value);
  });

  return button;

};






module.exports = ListView;
