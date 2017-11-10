(function() {
  function Room($firebaseArray) {
     //Create object Room.
    var Room = {};
    //firebase.database().ref(). Reference the firebase database service.
    //.child("rooms") Reference specifically the "rooms" and its children.
    var ref = firebase.database().ref().child("rooms");
    //Turn the "rooms" database info into an array.
    var rooms = $firebaseArray(ref);

    //Assign a property "all" to Room and set the value to the rooms array
    //from Firebase.
    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
