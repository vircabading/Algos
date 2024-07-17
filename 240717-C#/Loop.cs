// Origin: https://www.codingame.com/ide/puzzle/the-descent

using System;
using System.Collections.Generic;
using System.Linq;

class Player
{
    static void Main(string[] args)
    {
        while (true)
        {
            List<int> mountainHeights = new List<int>();
            for (int i=0; i<8; i++)
            {
                mountainHeights.Add(int.Parse(Console.ReadLine()));
            }
            int maxHeight = mountainHeights.Max();
            Console.WriteLine(mountainHeights.IndexOf(maxHeight));
        }
    }
}