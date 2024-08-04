    //LEFT OFF AT CREATING DIFFERENT LISTS FOR BODY PARTS 6/23 

//function to create a list of the items which will be used to generate a random image upon loading website


window.onload = function () {

    //BACKGROUNDS LIST

    var BgList = [
        'blue50.png',
        'green50.png',
    ];

        //EARS LIST

        var EarList = [
            'tilt-backward.png',
            'tilt-forward.png',
        ];
    
        //EYES LIST

        var EyeList = [
            'angry.png',
            'naughty.png',
        ];

        var noselist = [
            'nose.png'
        ];

        var Hairlist = [
            'bang.png',
            'quiff.png',
        ];

        var Leglist = [
            'cookie.png',
            'bubble-tea.png'
        ];


        var Mouthlist = [
            'laugh.png',
            'eating.png',
        ];


        var Necklist = [
            'thick.png',
            'default.png',
        ];

        var Accessorieslist = [
            'earings.png',
            'glasses.png',
        ];


        //ACCESSORY CATEGORY IS LEFT
        
    //FUNCTION TO SELECT A RANDOM PICTURE OUT OF THE LISTS CREATED

    //BACKGROUND GENERATOR

    function getRandomBgImage() {
        var randomBG = Math.floor(Math.random() * BgList.length);
        return BgList[randomBG];
    }

    //EARS GENERATOR

    function getRandomEarImage() {
        var randomEar = Math.floor(Math.random() * EarList.length);
        return EarList[randomEar];
    }

    //EYES GENERATOR

    function getRandomEyeImage() {
        var randomEye = Math.floor(Math.random() * EyeList.length);
        return EyeList[randomEye];
    }

    //NOSE GENERATOR

    function getRandomNoseImage() {
        var randomNose = Math.floor(Math.random() * noselist.length);
        return noselist[randomNose];
    }

    //HAIR GENERATOR

    function getRandomHairImage() {
        var randomHair = Math.floor(Math.random() * Hairlist.length);
        return Hairlist[randomHair];
    }

    //MOUTH GENERATOR

    function getRandomMouthImage() {
        var randomMouth = Math.floor(Math.random() * Mouthlist.length);
        return Mouthlist[randomMouth];
    }

    //LEG GENERATOR

    function getRandomLegImage() {
        var randomLeg = Math.floor(Math.random() * Leglist.length);
        return Leglist[randomLeg];
    }

    //NECK GENERATOR

    function getRandomNeckImage() {
        var randomNeck = Math.floor(Math.random() * Necklist.length);
        return Necklist[randomNeck];
    }

    //THE FUNCTION TO CREATE THE CANVASE AND START PUTTING PICTURES IN IT

    function buildAlpaca() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d'); // Fixed '2nd' to '2d'
        canvas.width = 400;
        canvas.height = 400;


        // Draw grid
        function drawGrid() {
            var gridSize = 100;  // Size of the grid cells
            var gridColor = 'black';  // Color of the grid lines

            context.strokeStyle = gridColor;
            context.lineWidth = 1.0;

            for (var x = 0; x <= canvas.width; x += gridSize) {
                context.beginPath();
                context.moveTo(x, 0);
                context.lineTo(x, canvas.height);
                context.stroke();
            }

            for (var y = 0; y <= canvas.height; y += gridSize) {
                context.beginPath();
                context.moveTo(0, y);
                context.lineTo(canvas.width, y);
                context.stroke();
            }
        }

        //THIS IS WHERE IMAGES ARE PUT ON THE CANVAS

        //BACKGROUND

        var AlpacaBg = new Image();
        AlpacaBg.onload = function () {
            context.drawImage(AlpacaBg, (400 - AlpacaBg.width) / 2, 0);
        };

        //EYES

        var AlpacaEyes = new Image();
        AlpacaEyes.onload = function () {
            var eyeWidth = AlpacaEyes.width * 0.5; // Scale to 50% of the original width
            var eyeHeight = AlpacaEyes.height * 0.5; // Scale to 50% of the original height
            context.drawImage(AlpacaEyes, 50, 50, eyeWidth, eyeHeight);
        };
    

        //EARS

        var AlpacaEars = new Image();
        AlpacaEars.onload = function () {
            var earsWidth = AlpacaEars.width * 0.5; // Scale to 50% of the original width
            var earsHeight = AlpacaEars.height * 0.5; // Scale to 50% of the original height
            context.drawImage(AlpacaEars, 50, 40, earsWidth, earsHeight);
        };
            
        //NOSE

        var AlpacaNose = new Image();
        AlpacaNose.onload = function () {
            var noseWidth = AlpacaNose.width * 0.5; // Scale to 50% of the original width
            var noseHeight = AlpacaNose.height * 0.5; // Scale to 50% of the original height
            context.drawImage(AlpacaNose, 50, 55, noseWidth, noseHeight);
        };
    

        //HAIR

        var AlpacaHair = new Image();
        AlpacaHair.onload = function () {
            var hairWidth = AlpacaHair.width * 0.5; // Scale to 50% of the original width
            var hairHeight = AlpacaHair.height * 0.5; // Scale to 50% of the original height
            context.drawImage(AlpacaHair, 65, 40, hairWidth, hairHeight);
        };
            

        //MOUTH

        var AlpacaMouth = new Image();
        AlpacaMouth.onload = function () {
            var mouthWidth = AlpacaMouth.width * 0.5; // Scale to 50% of the original width
            var mouthHeight = AlpacaMouth.height * 0.5; // Scale to 50% of the original height
            context.drawImage(AlpacaMouth, 50, 40, mouthWidth, mouthHeight);
        };

        //LEG

        var AlpacaLeg = new Image();
        AlpacaLeg.onload = function () {
            context.drawImage(AlpacaLeg, 100, 100,);
        };

        //NECK

        var AlpacaNeck = new Image();
        AlpacaNeck.onload = function () {
            var neckWidth = AlpacaNeck.width * 0.5; // Scale to 50% of the original width
            var neckHeight = AlpacaNeck.height * 0.5; // Scale to 50% of the original height
            context.drawImage(AlpacaNeck, 50, 40, neckWidth, neckHeight);
        };

        //CALLING THE FUNCTION

       AlpacaBg.src = getRandomBgImage();

       AlpacaEars.src = getRandomEarImage();

       AlpacaHair.src = getRandomHairImage()

        AlpacaNeck.src = getRandomNeckImage();

        AlpacaNose.src = getRandomNoseImage();

        AlpacaEyes.src = getRandomEyeImage();

        AlpacaLeg.src = getRandomLegImage();

        AlpacaMouth.src = getRandomMouthImage();
    }

    buildAlpaca();
};