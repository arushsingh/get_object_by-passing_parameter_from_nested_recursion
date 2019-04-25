function findObjects(obj, targetProp, targetValue, finalResults) {

  function getObject(theObject) {
    let result = null;
    if (theObject instanceof Array) {
      for (let i = 0; i < theObject.length; i++) {
        getObject(theObject[i]);
      }
    } else {
      for (let prop in theObject) {
        if (theObject.hasOwnProperty(prop)) {
          console.log(prop + ': ' + theObject[prop]);
          if (prop === targetProp) {
            console.log('--found id');
            if (theObject[prop] === targetValue) {
              console.log('----found porop', prop, ', ', theObject[prop]);
              finalResults.push(theObject);
            }
          }
          if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
            getObject(theObject[prop]);
          }
        }
      }
    }
  }

  getObject(obj);

}

var myObject = [{
  'title': 'some title',
  'channel_id': '123we',
  'options': [{
    'channel_id': 'abc',
    'image': 'http://asdasd.com/all-inclusive-block-img.jpg',
    'title': 'All-Inclusive',
    'options': [{
      'channel_id': 'dsa2',
      'title': 'Some Recommends',
      'options': {
        'image': 'http://www.asdasd.com',
        'title': 'Sandals',
        'id': '2',
      },
    }, {
      'channel_id': 'xxx',
      'title': 'Some Recommends',
      'options': {
        'image': 'www.hupu.com',
        'title': 'alex',
        'id': '2',
      },
    }, {
      'channel_id': 'dsa3',
      'title': 'Some Recommends',
      'options': {
        'image': 'http://www.badasd.com',
        'title': 'Boots',
        'id': '2',
      },
    }],
  }],
}];

var finalResults = [];
var result = findObjects(myObject, 'id', '2', finalResults);

console.log('=================================');

console.log('finalResults: ', finalResults);
