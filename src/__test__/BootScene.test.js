/* eslint no-undef: 0 */
import BootScene from '../scenes/TitleScene';

test('Bootscene is a subclass of Phaser.SCENE', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});