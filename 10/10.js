import { GlowParticle } from "./glowparticle.js";

const COLORS = [
    {r:45, g:74, b:227},//blue
    {r:250, g:255, b:89},//yellow
    {r:255, g:104, b:248},//pupple
    {r:44, g:209, b:252},//skyblue
    {r:54, g:233, b:84},//green

];

class App{
    constructor(){
        this.canvas = document.createElement('canvas'); //<canvas></canvas>
        this.ctx = this.canvas.getContext('2d');    
        
        document.body.appendChild(this.canvas); //<body><canvas></canvas></body>
        //append

        this.pixelRatio = (window.devicePixelRatio > 1)? 2 : 1; 
        console.log(this.pixelRatio);
        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 400;

        window.addEventListener('resize', this.resize(), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        

        this.canvas.width = this.stageWidth *this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.ctx.globalCompositeOperation='saturation'; //컨버스 흐리게

        this.createParticles();
    }

    createParticles(){
        let curColor =0;
        this.particles = [];

        for(let i = 0; i<this.totalParticles; i++){
            let item = new GlowParticle(
                Math.random() * this.stageWidth,
                
                Math.random() * this.stageHeight,
                Math.random() * 
                (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );
            
            

            if(++curColor >= COLORS.length){
                curColor = 0;
            }

            this.particles[i] = item;
        }
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));


         this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);

         for(let i =0; i<this.totalParticles; i++){
            // const item1 = this.particles[i];
            // console.log(this.particles[i]);
             //console.log(this.ctx, this.stageWidth, this.stageHeight);
             this.particles[i].animate(this.ctx, this.stageWidth, this.stageHeight);
             
         }
    }
}

window.onload = () => {
    alert("출처 : https://www.youtube.com/watch?v=D6EiRSRhsbQ&t=245s")
    new App();
}



















