import * as PIXI from 'pixi.js';
import { Application, Assets, Sprite, AnimatedSprite} from 'pixi.js'

import Dog, {dogData} from './spritesheets/dog';

// create PIXI app object
const app = new Application();

// Creates a canvas & insert to DOM
document.body.appendChild(app.view); 
//Create animated sprite from Dog spritesheet
Dog.animationSpeed = 0.12777;
Dog.height = 400;
Dog.width = 400;

Dog.play()
// add sprite to stage
app.stage.addChild(Dog);

