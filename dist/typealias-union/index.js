"use strict";
function log(uuid) { } // Union
function logDetails(uuid, item) {
    console.log("A product with " + uuid + " has a title " + item);
}
function logInfo(uuid, user) {
    console.log("A product with " + uuid + " has a name " + user);
}
logDetails(123, 'Sapato');
logDetails('assda', '123');
logInfo('assda', 'Samuel');
logInfo(1234123, 'Samuel');
function renderPlatform(platform) {
    return platform;
}
console.log(renderPlatform('Windows'));
