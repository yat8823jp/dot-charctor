const DOT_SIZE    = 16;
const X_START_POS = 50;
const Y_START_POS = 50;

const dataSet = [
    "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
    "0","0","0","0","1","2","0","0","0","0","3","3","0","0","0","0",
    "0","0","0","4","4","5","0","5","0","3","1","1","0","0","0","0",
    "0","0","0","1","2","2","2","2","5","3","3","3","3","0","0","0",
    "0","0","3","2","2","2","5","2","3","3","3","3","3","0","0","0",
    "0","0","2","2","5","2","2","5","3","3","3","3","3","0","0","0",
    "0","0","2","2","2","6","4","5","3","6","6","3","3","3","0","0",
    "0","0","2","2","2","2","7","8","8","3","3","3","3","3","0","0",
    "0","0","5","8","8","8","8","8","8","8","8","8","8","9","0","0",
    "0","0","8","8","8","8","8","8","8","8","8","8","8","9","0","0",
    "0","0","8","8","8","8","1","4","1","8","8","8","8","0","0","0",
    "0","0","0","8","8","8","8","8","8","8","8","8","A","0","0","0",
    "0","0","0","0","B","8","8","8","8","8","C","0","0","0","0","0",
    "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
    "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"
];

function getRgbColor( colorType )
{
    const colorHash = {
        "0":"#000000",
        "1":"#ce6562",
        "2":"#bd8a52",
        "3":"#734531",
        "4":"#de8a63",
        "5":"#ceaa73",
        "6":"#000021",
        "7":"#ffdfce",
        "8":"#ffffff",
        "9":"#adaaad",
        "A":"#9d9a9c",
        "B":"#8d8a8c",
        "C":"#bdbabd"
    };
    return colorHash[ colorType ];
}

const Picture = ( function() {
    function Picture( width, height ) {
        this.width  = width;
        this.height = height;
        this.canvas = document.getElementById( "canvas" );
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext( "2d" );
        this.rand = 1;
    }
    // Picture.prototype.draw = function() {
    //     console.log( this.rand );
    //     for ( let i = 0; i < dataSet.length; i++ ) {
    //         const x = X_START_POS + ( i % 16 ) * DOT_SIZE * this.rand;
    //         const y = Y_START_POS + Math.floor( i / 16 ) * DOT_SIZE * this.rand;
    //         const color = getRgbColor( dataSet[ i ] );
    //         if ( dataSet[ i ] != "0" ) {
    //             this.ctx.fillStyle = color;
    //             this.ctx.fillRect( x, y, DOT_SIZE * 0.9, DOT_SIZE * 0.9 );
    //         }
    //     }
    // };
    Picture.prototype.draw = function() {
        init( this );
    }
    return Picture;
} )();

function init( picture ) {
    for ( let i = 0; i < dataSet.length; i++ ) {
        const x = X_START_POS + ( i % 16 ) * DOT_SIZE;
        const y = Y_START_POS + Math.floor( i / 16 ) * DOT_SIZE;
        const color = getRgbColor( dataSet[ i ] );
        if ( dataSet[ i ] != "0" ) {
            picture.ctx.fillStyle = color;
            picture.ctx.fillRect( x, y, DOT_SIZE * 0.9, DOT_SIZE * 0.9 );
        }
    }
}

function move( cat ) {
    const canvas = document.getElementById( "canvas" );
    canvas.addEventListener(
        "click",
        () => {
            // const rand = Math.floor( Math.random() * dataSet.length );
            // cat.rand = rand;
            // cat.draw();
            // cat.ctx.clearRect( 100, 100, DOT_SIZE * 0.9, DOT_SIZE * 0.9 );
            for ( let i = 0; i < dataSet.length; i++ ) {
                const randX = Math.floor( Math.random() * dataSet.length );
                const randY = Math.floor( Math.random() * dataSet.length );
                const x = X_START_POS + ( i % 16 ) * DOT_SIZE;
                const y = Y_START_POS + Math.floor( i / 16 ) * DOT_SIZE;
                const color = getRgbColor( dataSet[ i ] );
                if ( dataSet[ i ] != "0" ) {
                    cat.ctx.fillStyle = color;
                    cat.ctx.fillRect( randX, randY, DOT_SIZE * 0.9, DOT_SIZE * 0.9 );
                }        
            }
        }
    );
}

const cat = new Picture( 300, 300 );
cat.draw();
move( cat );