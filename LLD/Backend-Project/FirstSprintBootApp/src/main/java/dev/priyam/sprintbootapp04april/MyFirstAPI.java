package dev.priyam.sprintbootapp04april;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MyFirstAPI {

    @RequestMapping("/hello")
    //function which will print hello when above url is entered in url
    public String sayHello(){
        return "Hello";
    }


    @RequestMapping("/hello/{nameComingFromRequest}")
    //function which will print hello <name> when above url is entered
    public String sayName(@PathVariable("nameComingFromRequest") String name){
        return "Hello"+name;
    }
}

/*
* Whenever anyone calls localhost:{MyPort}/hello -> print hello
* localhost:{MyPort}/<name> -> print hello <name>
localhost:1111/abdul -> hello abdul
* localhost:111/priyam -> hello priyam
* */
