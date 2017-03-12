
(function() {
    
    function cutoutName (idOfWrapper) {

        var timeBeforeAnimate = 200;
        var color = 'rgb(179,179,179)';
        
        window.requestAnimFrame = (function (callback) {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();
        var canvas = document.getElementById(idOfWrapper).children[0];
        var ctx = canvas.getContext('2d');


        var middlePoint = canvas.width / 2.5;
        var targetHeight = middlePoint * 2;
        var cShape = [[0, middlePoint], [middlePoint, middlePoint], [middlePoint, middlePoint]];

        var bShape = {
            x: middlePoint * 1.4,
            y: middlePoint,
            width: middlePoint * 0.75,
            height: 0
        }

        function drawShape(ctx, shape) {
            var path = new Path2D();
            path.moveTo(shape[0][0], shape[0][1])
            for (var i = 1; i < shape.length; i++) {
                path.lineTo(shape[i][0], shape[i][1]);
            }
            path.closePath();
            ctx.fill(path);
        }

        function drawCanvasShapes() {
            if (canvas.getContext) {
                ctx.fillStyle = color;
                drawShape(ctx, cShape);
                ctx.fillRect(bShape.x, bShape.y, bShape.width, bShape.height);
            }
        }

        setTimeout(function () {
            animate(ctx, new Date().getTime(), 100);
        }, timeBeforeAnimate);



        var forwardAnimation = true;
        function animate(context, startTime, linearSpeed) {
            // update
            var time = (new Date()).getTime() - startTime;

            // pixels / second
            var amountToMove = linearSpeed * time / 10000;


            bShape.height = bShape.height < targetHeight ? bShape.height + 2 * amountToMove : targetHeight;

            var targetYB = 0;
            bShape.y = bShape.y > targetYB ? bShape.y - amountToMove : targetYB;

            var animateComplete = true;

            var targetY = targetHeight;
            cShape[1][1] += amountToMove;
            cShape[1][1] = cShape[1][1] < targetY ? cShape[1][1] : targetY;

            var targetYSecond = 0;
            cShape[2][1] -= amountToMove;
            if (cShape[2][1] > targetYSecond) {
                animateComplete = false;
            } else {
                cShape[2][1] = targetYSecond;
            }


            // clear
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawCanvasShapes();

            if (!animateComplete) {
                requestAnimFrame(function () {
                    animate(context, startTime, linearSpeed);
                });
            }
        }

    }    
    

    cutoutName('cb-name-cutout');
    cutoutName('cb-name-cutout-footer')

})();