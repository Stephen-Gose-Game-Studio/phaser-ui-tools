let exportObject;

if (Phaser.Sprite === undefined) {
    class Phaser3Sprite extends Phaser.GameObjects.Sprite {}

    exportObject = Phaser3Sprite;
} else {
    class PhaserCESprite extends Phaser.Sprite {
        /** Immitate the API of Phaser3.
        * The current displayed height of the Object.
        * @type {number}
        * @private
        */
        get displayHeight() {
            return this.height;
        }

        set displayHeight(newValue) {
            this.height = newValue;
        }

        /** Immitate the API of Phaser3.
        * The current displayed width of the Object.
        * @type {number}
        * @private
        */
        get displayWidth() {
            return this.width;
        }

        set displayWidth(newValue) {
            this.width = newValue;
        }
    }

    exportObject = PhaserCESprite;
}

export const Sprite = exportObject;
