public class Range{
	
public static int findRange(int[] array){
  int max = array[0];
  int min = array[0];
  int range = 0;
for(int count=0; count < array.length;count++){
       if(array[count] < max){
		max =array[count];
		}
	if(array[count] > min){
		min = array[count];
  		}	
	range =  min - max;
       }
return range;
 }

public static void main(String[] args){
int[] array = {7,4,2,3,4};
int result = findRange(array);

System.out.print(result);


}	
}


