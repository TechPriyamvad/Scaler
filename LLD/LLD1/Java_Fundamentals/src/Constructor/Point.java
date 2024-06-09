package Constructor;

public class Point {
    int x;
    int y;

//    default constructor
    Point(){
        this(30,40);//telescoping
    }
//    parameterised constructor
    Point(int px,int py){
        this.x = px;
        this.y = py;
    }

//    copy constructor
//    copy old object data into new object data
    Point(Point pt){
        this(pt.x,pt.y); //telescoping: ek constructor dussre constructor ko data member initialisation ka kaam de raha h
    }
}
