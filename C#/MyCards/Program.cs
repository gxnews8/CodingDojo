using System;  
using System.Collections.Generic;  
using System.Collections;  
using System.Linq;  
using System.Text;  
using System.Threading.Tasks;  
//用C#模拟实现扑克牌发牌、排序程序。  
//（1）52张扑克牌，四种花色（红桃、黑桃、方块和梅花），随机发牌给四个人。  
//（2）最后将四个人的扑克牌包括花色打印在控制台上。  
//其中：  
//  花色和点数用枚举类型实现  
//  每张扑克牌用结构实现  
//提示：可以用ArrayList初始化52张扑克牌，然后从这个链表中随机取牌发给四个玩家，直到链表为空为止。  
  
namespace MyCards  
{  
    enum Color {HongTao=-1,HeiTao=-2,MeiHua=-3,FangPian=-4}//花色  
    enum Point {A,two,three,four,five,six,seven,eight,nine,ten,J,Q,K}//点数  
    struct Poker  
    {//扑克  
        private string p1;
        private string p2;  
        public Poker(string p1, string p2)  
        {  
            // TODO: Complete member initialization  
            this.p1 = p1;  
            this.p2 = p2;  
        }  
        public void Printp()  
        {  
            Console.Write("({0},{1}) ", this.p1,this.p2);  
        }  
    }  
    class Program  
    {  
          
        static void Main(string[] args)  
        {  
            Poker poker = new Poker();  
            ArrayList myPoker=new ArrayList();//实例化一个ArrayList存放所有的扑克牌  
            ArrayList Person1 = new ArrayList();  
            ArrayList Person2 = new ArrayList();  
            ArrayList Person3 = new ArrayList();  
            ArrayList Person4 = new ArrayList();  
            Random r = new Random();  
            for (int i = -4; i <= -1; i++)  
            {//外循环初始化扑克的花色  
                for (int j = 0; j <= 12; j++)  
                {//外层循环初始化扑克的点数  
                    myPoker.Add(new Poker(  
                        Enum.GetName(typeof(Color),i),  
                        Enum.GetName(typeof(Point),j)  
                        ));  
                }  
            }//for循环结束，52张扑克牌已经生成  
            Console.WriteLine("打印所有的扑克牌：");  
            for (int i = 0; i < 52; i++)  
            {//打印52张生成的扑克牌  
                Poker poAll = (Poker)myPoker[i];  
                poAll.Printp();  
            }  
            //开始发牌，一个人一个人的发，每发一张牌得从myPoker中RemoveAt掉扑克牌，Count数减小；第一个人Add到一张牌。  
            for (int i = 0; i < 13; i++)  
            {  
                int te = r.Next(0,myPoker.Count);  
                Person1.Add(myPoker[te]);  
                myPoker.RemoveAt(te);  
            }  
            for (int i = 0; i < 13; i++)  
            {  
                int te = r.Next(0, myPoker.Count);  
                Person2.Add(myPoker[te]);  
                myPoker.RemoveAt(te);  
            }  
            for (int i = 0; i < 13; i++)  
            {  
                int te = r.Next(0, myPoker.Count);  
                Person3.Add(myPoker[te]);  
                myPoker.RemoveAt(te);  
            }  
            for (int i = 0; i < 13; i++)  
            {  
                int te = r.Next(0, myPoker.Count);  
                Person4.Add(myPoker[te]);  
                myPoker.RemoveAt(te);  
            }  
              
            Console.WriteLine();  
            Console.WriteLine("打印第一个人的扑克牌：");  
            for (int i = 0; i < 13;i++ )  
            {  
                Poker po1 = (Poker)Person1[i];  
                po1.Printp();  
            }  
            Console.WriteLine();  
            Console.WriteLine("打印第二个人的扑克牌：");  
            for (int i = 0; i < 13; i++)  
            {  
                Poker po2 = (Poker)Person2[i];  
                po2.Printp();  
            }  
            Console.WriteLine();  
            Console.WriteLine("打印第三个人的扑克牌：");  
            for (int i = 0; i < 13; i++)  
            {  
                Poker po3 = (Poker)Person3[i];  
                po3.Printp();  
            }  
            Console.WriteLine();  
            Console.WriteLine("打印第四个人的扑克牌：");  
            for (int i = 0; i < 13; i++)  
            {  
                Poker po4 = (Poker)Person4[i];  
                po4.Printp();  
            }  
            Console.WriteLine();  
        }  
    }  
} 