import * as PIXI from 'pixi.js';

 export const dogData = {
	frames: {
		idle_1: {
			frame: { x: 0, y:0, w:48, h:48 },
			sourceSize: { w: 48, h: 48},
			spriteSourceSize: { x: 0, y: 0, w: 48, h: 48}
		},
		idle_2: {
			frame: { x: 48, y:0, w:48, h:48 },
			sourceSize: { w: 48, h: 48},
			spriteSourceSize: { x: 0, y: 0, w: 48, h: 48}
		},
		idle_3: {
			frame: { x: 96, y:0, w:48, h:48 },
			sourceSize: { w: 48, h: 48},
			spriteSourceSize: { x: 0, y: 0, w: 48, h: 48}
		},
		idle_4: {
			frame: { x: 144, y:0, w:48, h:48 },
			sourceSize: { w: 48, h: 48},
			spriteSourceSize: { x: 0, y: 0, w: 48, h: 48}
		},
	},
	meta: {
		image: 'assets/sprites/idle_dog.png',
		format: 'RGBA8888',
		size: { w:192, h: 48 },
		scale: 1
	}, 
	animations: {
		idle: ['idle_1', 'idle_2', 'idle_3', 'idle_4']
	}
}
var baseTexture;
const dog = new PIXI.Spritesheet(
    PIXI.BaseTexture.from(dogData.meta.image), 
	dogData
);
await dog.parse();

const Dog = new PIXI.AnimatedSprite(dog.animations.idle);

export default Dog;