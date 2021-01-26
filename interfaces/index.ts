interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilar?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "it's definaly a game",
  genre: "action",
  platform: ["PC"],
  getSimilar: (title: string) => {
    console.log("Similar title: ", title);
  },
};

console.log("GTA");

interface DLC extends Game {
  originalGame: Game;
  newContet: string;
}

const leftbehind: DLC = {
  title: "The Last of us",
  description: "it's definaly a game",
  genre: "action",
  platform: ["PC"],
  getSimilar: (title: string) => {
    console.log("Similar title: ", title);
  },
  originalGame: tlou,
  newContet: "New history...",
};

console.log(leftbehind);

// usando uma interface dentro de uma classe

class CreateGame implements Game {
  title: string;
  genre: string;
  description: string;
  platform: string[];

  constructor(t: string, g: string, d: string, p: string[]) {
    this.title = t;
    this.genre = g;
    this.description = d;
    this.platform = p;
  }
}
