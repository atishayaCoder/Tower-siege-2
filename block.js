class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.visibility = 255
        
        

        World.add(world,this.body)

    }
    display()  {
        rectMode(CENTER)
        fill(171,247,247)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
     
        if (this.body.speed > 5) {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 15;
            tint(255, this.visibility);
            pop();
        }
    }
}