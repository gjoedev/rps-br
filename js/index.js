var config = {
    type: Phaser.AUTO,
    width: getPageSize("w"),
    height: getPageSize("h")*.523,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
}

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', '')
}

function create ()
{
    this.add.image(0, 0, 'sky')
}

function getPageSize(type){
    if(type= "w"){
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    )}else{
        Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        )}
}