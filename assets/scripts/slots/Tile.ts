const { ccclass, property } = cc._decorator;

@ccclass
export default class Tile extends cc.Component {
  @property({ type: [cc.SpriteFrame], visible: true })
  private textures = [];

  @property({type: [cc.Node], visible: true})
  private animation;
  private curIndex;

  start(): void {
    
  }

  async onLoad(): Promise<void> {
    await this.loadTextures();
  }

  async resetInEditor(): Promise<void> {
    await this.loadTextures();
    this.setRandom();
  }

  async loadTextures(): Promise<boolean> {
    const self = this;
    return new Promise<boolean>(resolve => {
      cc.loader.loadResDir('gfx/Square', cc.SpriteFrame, function afterLoad(err, loadedTextures) {
        self.textures = loadedTextures;
        resolve(true);
      });
    });
  }

  setTile(index: number): void {
    this.curIndex = index;
    this.node.getComponent(cc.Sprite).spriteFrame = this.textures[index];
  }

  setRandom(): void {
    const randomIndex = Math.floor(Math.random() * this.textures.length);
    this.setTile(randomIndex);
  }

  toggleAnimation(winnersIndexes: Array<number>): void {
    if(this.animation == null)
    {
      this.animation = this.node.children[0];
    }
    console.log(this.node.getComponent(cc.Sprite).spriteFrame.name);
    this.animation.active = winnersIndexes.indexOf(this.curIndex) >= 0;    
  }

  setAnimation(value): void{
    if(this.animation == null)
    {
      this.animation = this.node.children[0];
    }
    this.animation.active = value;
    
  }
}
