abstract class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  /**
   * show user data
   */
  public logDetails(): void {
    console.log(`the player ${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  /**
   * CharInfo
   */
  public CharInfo(): void {
    console.log(`The player ${this.nickname} has the level: ${this.level}`);
  }

  // metodos getters e setters
  get getLevel() {
    return this.level;
  }
  set setLevel(level: number) {
    this.level = level;
  }
}

// A classe UserAccount agora é abstract então não pode ser instanciada
/*
  const sam = new UserAccount("samuel", 20);
  console.log(sam);
  console.log(sam.age);
  sam.logDetails();
*/

const char2 = new CharAccount("samuel", 20, "samuelnog", 99);
console.log(char2.getLevel);

char2.setLevel = 120;

console.log(char2.getLevel);
