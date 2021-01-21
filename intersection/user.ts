// accountInfo
// charInfo
// PlayerInfo


type AccountInfo = {
    id: number,
    name: string,
    email?: string,
}

type CharInfo = {
    nickname: string,
    level: number,
}

const account: AccountInfo = {
    id: 1,
    name: 'Samuel',
    email: 'samuelnog@gmail.com'
}

const account2: AccountInfo = {
    id: 2,
    name: 'Samuel 2',
}

const char: CharInfo = {
    nickname: 'Samuel',
    level: 2
}

type PlayerInfo = AccountInfo & CharInfo // interseção(intersection) entre AccountInfo e CharInfo


const samuel: PlayerInfo = {
    id: 0,
    level: 99,
    name: 'Samuel',
    nickname: 'sam',
}

const showPlayer = (player: PlayerInfo) => {
    console.log(player);
}

showPlayer(samuel)