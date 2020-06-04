/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @license      {@link https://github.com/digitsensitive/phaser3-typescript/blob/master/LICENSE.md | MIT License}
 */

export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("myImage", "../assets/phaser.png");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(400, 300, "myImage");
    let gr = this.add.compo;
    
    let t = this.add.text(0, 0, 'Hello World', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
    gr.add(t);
    let r = this.physics.add.group(gr)
r.setGravity(11,111)
  }
}
