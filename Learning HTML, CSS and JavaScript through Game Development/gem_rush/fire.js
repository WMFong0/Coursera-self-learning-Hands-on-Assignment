const Fire = function(ctx, x, y, type = "fire0") {

    const sequences = {

        fire0: { x: 0, y: 160, width: 16, height: 16, count: 8, timing: 100, loop: true }
    };

    const sprite = Sprite(ctx, x, y);

    sprite.setSequence(sequences.fire0)
          .setScale(2)
          .setShadowScale({ x: 0.75, y: 0.2 })
          .useSheet("object_sprites.png");

    return {
        getXY: sprite.getXY,
        setXY: sprite.setXY,
        draw: sprite.draw,
        update: sprite.update
    }

}
