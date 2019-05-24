package cucumber;



import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/",tags= {},monochrome=true,dryRun=false,glue="cucumber",plugin={"json:src/test/java/cucumber/report.json"})

public class TestRunner {
	

}
