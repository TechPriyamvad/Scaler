package Builder_Design_Pattern;

import Access_modifier.A;

import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        Students h = new StudentsHelper().setAge(11).setEmail("priyam@gmail.com").setPsp(11.23).build();

        System.out.println("break");
    }
}
