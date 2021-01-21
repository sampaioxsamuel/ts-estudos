type UID = number | string // Type alias

function log(uuid: string | number) {} // Union

function logDetails(uuid: UID, item: string) {
    console.log(`A product with ${uuid} has a title ${item}`);
}

function logInfo(uuid: UID, user: string) {
    console.log(`A product with ${uuid} has a name ${user}`);
}

logDetails(123, 'Sapato')
logDetails('assda', '123')


logInfo('assda', 'Samuel')
logInfo(1234123, 'Samuel')



type Platform = 'Windows' | 'Linux' | 'macOS'

function renderPlatform(platform: Platform): string {
    return platform
}

console.log(renderPlatform('Windows'));
