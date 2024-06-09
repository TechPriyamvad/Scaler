package Constructor;

public class Main {
    public static void main(String[] args){
//        Person p1 = new Person();
//        Person p2 = new Person();
//        Point pt1 = new Point(10,20);
//        Point pt2 = new Point();
////      we need to store data of pt1 into object refer by pt3
//        Point pt3 =  new Point(pt1);
//        System.out.println("pt1 data->" + pt1.x + " " + pt1.y);
//        System.out.println("pt2 data->" + pt2.x + " " + pt2.y);
//        System.out.println("pt3 data->"+pt3.x + " "+pt3.y);
        Point tL = new Point(10,20);
        Point bR  = new Point(30,40);
        Rectangle r = new Rectangle(tL,bR);
        r.display();
        tL.x = 1;
        tL.y = 2;
        r.display();

//        p1.age = 29;
//        p1.name = "Priyam";
//        p2.age = 31;
//        p2.name = "Shilpi";
//        System.out.println("Before swap");
//        swap(p1,p2);
//        System.out.println("After swap");
//        p1.printAgeName();
//        p2.printAgeName();

    }

    public static void swap(Person p1,Person p2){
        Person temp = p1;
        p1 = p2;
        p2 = temp;
        p1.printAgeName();
        p2.printAgeName();
    }
}
