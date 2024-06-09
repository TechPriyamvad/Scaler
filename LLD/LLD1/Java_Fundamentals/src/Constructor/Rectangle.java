package Constructor;

public class Rectangle {
    Point topLeft;
    Point bottomRight;

//    shallow copy: original mein jo changes kiye h voh copy wale mein bhi reflect karte h
    /*Rectangle(Point topLeft,Point bottomRight){
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }*/

//    deep copy: original mein jo changes kiye h voh copy wale mein reflect nahi karte
    Rectangle(Point topLeft,Point bottomRight){
        this.topLeft = new Point(topLeft);
        this.bottomRight = new Point(bottomRight);
    }
    void display(){
        System.out.println("Rectangle Top left coordinates: " + "[" +this.topLeft.x + ","+this.topLeft.y+"]");
        System.out.println("Rectangle Bottom right coordinates: " + "[" +this.bottomRight.x + ","+this.bottomRight.y+"]");
    }
}
