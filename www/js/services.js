angular.module('starter.services', []).factory('socket', function (socketFactory) {
   
    var myIoSocket = io.connect('http://ionic-chat.azurewebsites.net');

    mySocket = socketFactory({
        ioSocket: myIoSocket
    });

    return mySocket;
})