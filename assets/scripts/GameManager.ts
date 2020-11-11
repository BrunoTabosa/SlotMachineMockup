const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  @property(cc.Node)
  machine = null;

  @property({ type: cc.AudioClip })
  audioClick = null;

  private block = false;

  private result = null;
  private winnersIndex;
  private tileTextures = 29;

  start(): void {
    this.machine.getComponent('Machine').createMachine();
  }

  update(): void {
    if (this.block && this.result != null) {
      this.informStop();
      this.result = null;
    }
  }

  click(): void {
    cc.audioEngine.playEffect(this.audioClick, false);

    if (this.machine.getComponent('Machine').spinning === false) {
      this.block = false;
      this.machine.getComponent('Machine').spin();
      this.requestResult();
    } else if (!this.block) {
      this.block = true;
      this.machine.getComponent('Machine').lock();
    }
  }

  async requestResult(): Promise<void> {
    this.result = null;
    this.result = await this.getAnswer();
  }

  getAnswer(): Promise<Array<Array<number>>> {
    const randomResult = Math.random();
    var slotResult = [];
    
    if(randomResult <= 0.5)
    {
      console.log("Random return");
      this.winnersIndex = [-1];
    }
    else if(randomResult <= 0.83)
    {
      console.log("Single Line");
      this.winnersIndex = this.getUniqueRandomNumbersBetween(0, this.tileTextures, 1);
      slotResult = this.generateMachineResult(-1, this.winnersIndex[0], -1);
    }
    else if(randomResult <= 0.93)
    {
      //Two lines  
      console.log("Two lines");
      this.winnersIndex = this.getUniqueRandomNumbersBetween(0, this.tileTextures, 2);
      slotResult = this.generateMachineResult(this.winnersIndex[0], this.winnersIndex[1], -1);
    }
    else if(randomResult <= 1)
    {
      console.log("three lines");
      this.winnersIndex = this.getUniqueRandomNumbersBetween(0, this.tileTextures, 3);
      slotResult = this.generateMachineResult(this.winnersIndex[0], this.winnersIndex[1], this.winnersIndex[2]);
    }
    
    
    return new Promise<Array<Array<number>>>(resolve => {
      setTimeout(() => {
        resolve(slotResult);
      }, 1000 + 500 * Math.random());
    });
  }

  informStop(): void {
    const resultRelayed = this.result;
    this.machine.getComponent('Machine').stop(resultRelayed, this.winnersIndex);
  }

  generateMachineResult(first, second, third): Array<Array<number>>
  {
    var ret = Array<Array<number>>();

    for (let index = 0; index < 6; index++) {
      ret.push(this.generateReelResult(first, second, third));
    }
    return ret;
  }

  generateReelResult(first, second, third): Array<number>
  {
    var excluding = Array<number>();
    var ret = Array<number>(first,second,third);
    
    excluding.push(first);
    excluding.push(second);
    excluding.push(third);
    var curNum;
    if(first < 0)
    {
      curNum = this.getRandomNumberExcluding(0, this.tileTextures, excluding);
      ret[0] = curNum;
      excluding.push(curNum);
    }
    if(second < 0)
    {
      curNum = this.getRandomNumberExcluding(0, this.tileTextures, excluding);
      ret[1] = curNum;
      excluding.push(curNum);
    }
    if(third < 0)
    {
      curNum = this.getRandomNumberExcluding(0, this.tileTextures, excluding);
      ret[2] = curNum;
      excluding.push(curNum);
    }

    return ret;
  }

  getRandomNumberBetween(min, max): number
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  getUniqueRandomNumbersBetween(min, max, amount): Array<number>
  {
    var ret = Array<number>();
    for (let index = 0; index < amount; index++) {
      var added = false;
      while(!added)
      {
        var curNum = this.getRandomNumberBetween(min, max);
        if(ret.indexOf(curNum) < 0)
        {
          ret.push(curNum);
          added = true;
        }
      }
      
    }
    return ret;
  }

  getRandomNumberExcluding(min, max, excluding): number
  {
    var found = false;
    while(!found)
    {
      var curNum = this.getRandomNumberBetween(min, max);
      if(excluding.indexOf(curNum) <= -1)
        {
          found = true;
          return curNum;
        }
    }
  }
}
