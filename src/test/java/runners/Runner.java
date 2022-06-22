package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "steps",
        tags = "@Google", // if your want to execute the code, dryRun must be false
        dryRun = false, // when true, it does not execute the code. it only checks if we have any missing steps
        monochrome = false,
        plugin = {"html:target/cucumber-reports",
                "json:target/cucumber-reports/Cucumber.json",
                "pretty"
        }
)

public class Runner {
}