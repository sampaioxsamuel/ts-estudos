class UserAccount {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  /**
   * show user data
   */
  public logDetails(): string {
    return `Name: ${this.name} and Age: ${this.age}`;
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
    console.log(`Nick: ${this.nickname} and Level: ${this.level}. \n${this.logDetails()}`); 
  }
}

const user = new UserAccount("samuel", 19);
const char2 = new CharAccount("samuel", 19, 'samuelnog', 99);

console.log(char2.CharInfo(), 'Char');
console.log(char2.CharInfo(), 'Char');
