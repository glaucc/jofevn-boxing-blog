'use client';

// PhaserBoxingGame.js

import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PhaserBoxingGame = () => {
  useEffect(() => {
    // Create a Phaser game configuration
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    let player;

    function preload() {
      // Load assets
      this.load.image('boxer', '/pixel-tyson.png');
    }

    function create() {
      // Create the player sprite
      player = this.physics.add.sprite(400, 300, 'boxer');

      // Enable physics for the player sprite
      this.physics.world.setBounds(0, 0, 800, 600);
      this.physics.add.existing(player);

      // Set up cursor keys for player movement
      const cursors = this.input.keyboard.createCursorKeys();

      // Configure player's movements
      player.setCollideWorldBounds(true);
      player.setBounce(0.2);
      player.setInteractive(); // Allow player interaction

      // Add a sample text
      this.add.text(16, 16, 'Use arrow keys to move the boxer.', {
        fontSize: '32px',
        fill: '#fff',
      });

      // Handle player movement
      cursors.left.on('down', () => {
        player.setVelocityX(-160);
      });

      cursors.right.on('down', () => {
        player.setVelocityX(160);
      });

      cursors.up.on('down', () => {
        player.setVelocityY(-160);
      });

      cursors.down.on('down', () => {
        player.setVelocityY(160);
      });

      // Stop player when no keys are pressed
      cursors.left.on('up', () => {
        player.setVelocityX(0);
      });

      cursors.right.on('up', () => {
        player.setVelocityX(0);
      });

      cursors.up.on('up', () => {
        player.setVelocityY(0);
      });

      cursors.down.on('up', () => {
        player.setVelocityY(0);
      });
    }

    function update() {
      // Implement game update logic here
    }

    // Clean up Phaser game when the component unmounts
    return () => {
      game.destroy(true); // Destroy the Phaser game instance
    };
  }, []);

  return <div id="phaser-game"></div>;
};

export default PhaserBoxingGame;
