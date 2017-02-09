using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            // 1
            for (int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
            // 2;
            for (int i = 1; i < 100; i++)
            {
                if (i %3 == 0)
                {
                    Console.WriteLine(i);
                }
                if (i %5 == 0)
                {
                    Console.WriteLine(i);
                }
            }
            // 3;
            for (int i = 1; i < 100; i++)
            {
                if (i %3 == 0)
                {
                    Console.WriteLine(i+". Fizz");
                }
                if (i %5 == 0)
                {
                    Console.WriteLine(i+". Buzz");
                }
                if (i %3 == 0 && i %5 == 0)
                {
                    Console.WriteLine(i+". FizzBuzz");
                }
            }
        }
    }
}
