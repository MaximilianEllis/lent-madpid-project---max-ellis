// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020000000000000000000000000000020200020202020202020202020202020202000000000000000000000000000002020202020202020200020202020200020200000000000000000200020002000202000202020202020202000200020002020002000000000000000002000200020200020002020202020202020002000202000200020000000000000000020002020002000200020202020202020200020200020002000200000000000000000202000200020002020202020202020002020002020200000000000000000200020200000302000000000000000000010202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . . . . . . . . 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 
2 . 2 . . . . . . . . 2 . 2 . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . 2 . 2 
2 . 2 . 2 . . . . . . . . 2 . 2 
2 . 2 . 2 . 2 2 2 2 2 2 2 2 . 2 
2 . 2 . 2 . 2 . . . . . . . . 2 
2 . 2 . 2 . 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 . . . . . . . . 2 . 2 
2 . . . 2 . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010101010101010101010101010101000101000100000001000000000000000001010001000100010001010101010101010100010001000100000000000000000101000100010001010101010101010001010001000100010000000000000000010100010001000100010000010101010101000100010001000100000100000001010001000100010001000001000100010100010001000100010000010001000101000100010001000100000100010001010001000100010001000001000100010100000001000000010000010001000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . . . 2 . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 . . . . . . . . 2 
2 . 2 . 2 . 2 2 2 2 2 2 2 2 . 2 
2 . 2 . 2 . 2 . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 . . 2 2 2 2 2 
2 . 2 . 2 . 2 . 2 . . 2 . . . 2 
2 . 2 . 2 . 2 . 2 . . 2 . 2 . 2 
2 . 2 . 2 . 2 . 2 . . 2 . 2 . 2 
2 . 2 . 2 . 2 . 2 . . 2 . 2 . 2 
2 . 2 . 2 . 2 . 2 . . 2 . 2 . 2 
2 . . . 2 . . . 2 . . 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
            case "tile0":
            case "tile2":return tile2;
            case "tile4":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
