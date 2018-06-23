 import java.util.*;
import java.io.*;

 public class GetWordsasList
{
   public static void main(String[] args) throws IOException
   {
 // variables
      String line; // the current line
         
      // declare array list 
      ArrayList<String> wordsArray = new ArrayList<String>();  
      
      // open file
       Scanner inputsc = new Scanner (new File("txt/message.txt"));
       
      // read file into ArrayList
      while ( inputsc.hasNext() )
      {
         // get word from file
         line = inputsc.nextLine();
         // add word to array
         wordsArray.add("* " + line+ " *");
      }
      
      // close file
      inputsc.close();
      
      
      // return a random word
      System.out.print(wordsArray);
      
   }
}