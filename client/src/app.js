const ListFormView = require('./views/list_form_view.js')
const BucketList = require('./models/bucket_list.js')
const ListView = require('./views/list_view.js')

document.addEventListener('DOMContentLoaded', () => {

const listForm = document.querySelector('form#list-form');
const listFormView = new ListFormView(listForm);
listFormView.bindEvents();

const listContainer = document.querySelector('div#bucket-list');
const listView = new ListView(listContainer);
listView.bindEvents();

const bucketList = new BucketList();
bucketList.bindEvents();
bucketList.getData();

});
