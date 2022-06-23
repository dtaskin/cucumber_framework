package steps;

import com.github.javafaker.Faker;
import org.junit.Test;

public class RandomSteps {
    @Test
    public void getRandomDate(){
        Faker faker = new Faker();

        System.out.println(faker.lordOfTheRings().character());
        System.out.println(faker.lordOfTheRings().location());


    }
}
