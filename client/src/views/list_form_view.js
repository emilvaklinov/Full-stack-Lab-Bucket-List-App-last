const PubSub = require('../helpers/pub_sub.js');

const ListFormView = function (form) {
  this.form = form;
}

ListFormView.prototype.bindEvents = function () {

  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

ListFormView.prototype.handleSubmit = function (event) {
    event.preventDefault();
    console.log(`list submit form event: ${event.target}`);
    const newListItem = this.createList(event.target);
    PubSub.publish('ListFormView:list-submitted', newListItem);
    console.log(`list form view event published: ${newListItem}`);
    event.target.reset();
  };

  ListFormView.prototype.createList = function (form) {
    const newList = {
      activity: form.activity.value,
      location: form.location.value,
      date: form.date.value
    };

    return newList;
  };


module.exports = ListFormView;
