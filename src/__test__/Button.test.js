/* eslint no-undef: 0 */
import Button from '../objects/Button';

test('Button is a subclass of Phaser.GameObjects.Container', () => {
  expect(Button).toBeSubclassOf(Phaser.GameObjects.Container);
});