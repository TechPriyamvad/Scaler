package Builder_Design_Pattern;

public class Students {
    String name;
    int id;
    double psp;
    int age;
    int gradYear;
    String email;

    public Students(StudentsHelper h){
        this.age = h.age;
        this.id = h.id;
        this.email = h.email;
        this.psp = h.psp;
        if(h.gradYear != 0){
            this.gradYear = h.gradYear;
        }
        this.name = h.name;
    }

}
