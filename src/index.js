import Phaser from 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PlayerInfoScene from './scenes/PlayerInfoScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import EndScene from './scenes/EndScene';
import LeaderboardScene from './scenes/LeaderBoardScene';
import Model from './model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('End', EndScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.add('PlayerInfo', PlayerInfoScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();