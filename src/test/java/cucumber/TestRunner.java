package cucumber;



import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/",tags= {},monochrome=true,dryRun=false,glue="cucumber",plugin="html:target4")

public class TestRunner {
	

}
