import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class RangeTest{

        @Test
	public void testThatcheckfindRange(){
        int range = Range.findRange(7,4,2,3,4);
      
        int expectedrange = 5;
        assertEquals(expectedrange,range);
          }
