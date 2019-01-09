export default [
  {
    title: "Welcome to the Java Quiz",
    questionlist: [
      {
        question: "What's the meaning of JVM",

        answers: [
          "Java Virtual Machine",

          "Java Vortex Mechanism",

          "Jumper Virtual Model",

          "Java Vortex Machine"
        ],
        correct: 1
      },

      {
        question: "Which are the access modifiers?",

        answers: [
          "public, static, void, main",

          "String, Integer, char, Boolean",

          "public, private, protected, default",

          "final, static, finally, extends"
        ],
        correct: 3
      },

      {
        question: "What are constructors in Java?",

        answers: [
          "Components needed to start the JVM.",

          "Batch of logs generated per compilation.",

          "Block of code dedicated to encapsulation.",

          "Block of code which is used to initialize an object."
        ],
        correct: 4
      },

      {
        question:
          "What is the difference between ArrayList and Vector regarding size increasing?",

        answers: [
          "Vector increases its size by 50%, ArrayList defaults to doubling size of its array.",

          "Array List increases its size by 50%, Vector defaults to doubling size of its array.",

          "Array List increases its size by 50%, Vector increases its size by 50% then 75% then 100%.",

          "None of the options."
        ],
        correct: 2
      },

      {
        question: "What is the best definition of Polymorphism?",

        answers: [
          "One interface, many implementations.",

          "Pseudo inheritance using at least 2 interfaces.",

          "One implementation, many interfaces.",

          "None of the options."
        ],
        correct: 1
      },

      {
        question:
          "What is the difference between abstract classes and interfaces?",

        answers: [
          "An interface can have instance variables, abstract class cannot have instance variables.",

          "An interface must be private, abstract class must be protected.",

          "An abstract class can have instance variables, interface cannot have instance variables.",

          "An interface needs admin access, abstract class is totally public."
        ],
        correct: 3
      },

      {
        question: "An interface class cannot contain",

        answers: [
          "All options.",

          "final keyword",

          "Inherited objects",

          "Constructors"
        ],
        correct: 4
      },

      {
        question: "What is method overloading?",

        answers: [
          "Overloading method extends from another parent class.",

          "Methods shares the same name but each method have different parameters or parameters having different types.",

          "Overloading method calls the garbage collector.",

          "Overloading does not exists, the real name is Overriding."
        ],
        correct: 2
      },

      {
        question: "What is method overriding?",

        answers: [
          "Method Overriding is to Change existing name of method.",

          "Method Overriding is to Change existing return type of method.",

          "Method Overriding is to Change existing exceptions of method.",

          "Method Overriding is to Change existing behavior of method."
        ],
        correct: 4
      },

      {
        question: "is multiple inheritance supported by Java?",

        answers: ["Yes", "Yes, up from 1.7 jre", "No", "Depends of every IDE"],
        correct: 3
      },

      {
        question: "Which of the following is not OOPS concept in Java?",

        answers: [
          "Inheritance",

          "Encapsulation",

          "Polymorphism",

          "Compilation"
        ],
        correct: 4
      },

      {
        question: "What do you mean by aggregation?",

        answers: [
          "Objects have their own lifecycle but there's ownership and child object can't belongs to another parent object.",

          "Action of declare a new variable in a class.",

          "None of the options.",

          "Is a relationship where all object have their own lifecycle and there is no owner."
        ],
        correct: 1
      },

      {
        question: "What is composition in Java?",

        answers: [
          "Child object don't have their lifecycle and if parent object deletes all child object will also be deleted.",

          "Child object have their lifecycle and if parent object deletes all child object will also be deleted too.",

          "Parent object don't have their lifecycle and if child object deletes all parent object will also be deleted.",

          "Child object don't have their lifecycle and if parent object renames all child object will also be renamed."
        ],
        correct: 1
      },

      {
        question:
          "Which of these method of class String is used to compare two String objects for their equality?",

        answers: ["equals()", "Equals()", "isequal()", "Isequal()"],
        correct: 1
      },

      {
        question: "Which are the types of memory areas used by JVM?",

        answers: ["Stack, HDD", "Heap, RAM", "RAM, HDD", "Heap, Stack"],
        correct: 4
      },

      {
        question: "What is Heap Memory in Java?",

        answers: [
          "Runtime data area where media files like images or audios are allocated.",

          "Runtime data area in which the memory is allocated to the objects.",

          "None of the options.",

          "Runtime data area in wich database sessions are allocated"
        ],
        correct: 2
      },

      {
        question: "Is '.java' file name a valid source file name?",

        answers: [
          "Yes, if the name is '(blank space).java'",

          "Yes, Java allows to save our java file by '.java' only",

          "No, all files must have a name, at least 'asdf.java'",

          "Yes, Java allows to save it, but after compile, files will be renamed e.g. 'Class1.java'"
        ],
        correct: 2
      },

      {
        question: "Is delete, next, main, exit or null keyword in java?",

        answers: ["No", "Only delete", "Only main", "All options are correct"],
        correct: 1
      },

      {
        question:
          "What if you write static public void instead of public static void?",

        answers: [
          "The program will throw an exception but it will not stop",

          "The program can be executed normally, but it will fail when you call the method.",

          "The program compiles and runs correctly because the order of specifiers doesn't matter in Java.",

          "None of the options."
        ],
        correct: 3
      },

      {
        question: "What is the purpose of static methods and variables?",

        answers: [
          "All options.",

          "Just to identify all of them and avoid to lose them.",

          "The methods or variables defined as static will be executed first.",

          "The methods or variables defined as static are shared among all the objects of the class."
        ],
        correct: 4
      },

      {
        question: "What is a servlet?",

        answers: [
          "None of the options.",

          "Server side technology to extend the capability of web servers supporting dynamic response and data persistence.",

          "Client side technology to extend the capability of web servers supporting dynamic response and data persistence.",

          "Main class that will be searched as default index on server side."
        ],
        correct: 2
      },

      {
        question: "Which of the following is a type of polymorphism in Java?",

        answers: [
          "Compile time polymorphism",

          "Execution time polymorphism",

          "Multiple polymorphism",

          "Multilevel polymorphism"
        ],
        correct: 1
      },

      {
        question: "What is the life-cycle of a servlet?",

        answers: [
          "Started-Run-Holded-Dead",

          "Started-Loaded-Executed-Dead",

          "Born-Growth-Reproduce-Dead",

          "Loaded-Instantiated-Initialized-Destroyed"
        ],
        correct: 4
      },

      {
        question:
          "Which of these modules is correct if your project has spring configured?",

        answers: [
          "Aspects: AOP, Instrumentation, Messaging Service, Queues Management",

          "Web: Beans, Messaging, Context, SpEL",

          "Data Access/Integration: JDBC, ORM, OXM, JMS, Transactions",

          "Core Container: WebSocket, Servlet, Web, Portlet"
        ],
        correct: 3
      },

      {
        question:
          "Which of these method of class String is used to check whether a given object starts with a particular string literal?",

        answers: ["startsWith()", "endsWith()", "Starts()", "ends()"],
        correct: 1
      },

      {
        question:
          "Factory Methods for Immutable List, Set, Map and Map.Entry are some features of: ",

        answers: ["Spring", "Scala", "Java 9", "Java Server Faces"],
        correct: 3
      },

      {
        question: "java.lang.Object is the fully classified name of: ",

        answers: [
          "Java Util Library",

          "Lang Object Collection",

          "None of the options.",

          "Object Class"
        ],
        correct: 4
      },

      {
        question:
          "If you have to use any static variable or method from other class, you have to use: ",

        answers: ["final import", "static import", "import", "extends"],
        correct: 2
      },

      {
        question: "How you can separate a multi-catch block in java?",

        answers: ["All options", "pipe: | ", "plus: + ", "comma: , "],
        correct: 2
      },

      {
        question: "What is the purpose of multi-catch block in java?",

        answers: [
          "All options",

          "To catch all exceptions of all catch blocks in a class.",

          "To create a unique try/catch block that manages all methos in a class.",

          "To catch multiple exceptions in a single catch block."
        ],
        correct: 4
      },

      {
        question: "What is Java Reflection API?",

        answers: [
          "This API provides the ability to inspect and modify the runtime behavior of java application.",

          "This API provides information about the code and they have no direct effect on the code they annotate.",

          "This API specify annotation availability to either compile time only or till runtime also.",

          "None of the options."
        ],
        correct: 1
      },

      {
        question:
          "This classloader loads JDK internal classes, typically loads rt.jar and other core classes.",

        answers: [
          "Extensions Class Loader",

          "System Class Loader",

          "Bootstrap Class Loader",

          "JDK/JRE"
        ],
        correct: 3
      },

      {
        question:
          "This classloader loads classes from the JDK extensions directory, usually $JAVA_HOME/lib/ext directory.",

        answers: [
          "Extensions Class Loader",

          "JDK/JRE",

          "Bootstrap Class Loader",

          "System Class Loader"
        ],
        correct: 1
      },

      {
        question:
          "This classloader loads classes from current classpath that can be set invoking a program using -cp/-classpath command.",

        answers: [
          "JDK/JRE",

          "Extensions Class Loader",

          "Bootstrap Class Loader",

          "System Class Loader"
        ],
        correct: 4
      },

      {
        question: "What is the purpose of Just-In-Time(JIT) compiler?",

        answers: [
          "Allows you to make little changes in real time.",

          "Improve the performance, reduces the time needed for compilation.",

          "Deploy apps skipping test cases.",

          "JIT compiler is not for Java, is for .Net"
        ],
        correct: 2
      },

      {
        question: "How many types of constructors are used in Java?",

        answers: [
          "Parameterized Constructor",

          "Default Constructor - Parameterized Constructor",

          "Parameterized Constructor - Dynamic Constructor",

          "Default Constructor - Dynamic Constructor"
        ],
        correct: 2
      },

      {
        question: "What's the function of parameterized constructor?",

        answers: [
          "Initialize the instance variables with the given values or arguments.",

          "Is invoked when the class is instantiated.",

          "Initialize the instance variable with the default values.",

          "Parameterized Constructor does not exist, it's real name is Dynamic Constructor."
        ],
        correct: 1
      },

      {
        question:
          "What are the performance implications of Interfaces over abstract classes?",

        answers: [
          "Interfaces are faster in performance as compared to abstract classes as extra indirections are required for interfaces.",

          "Interfaces are slower consuming memory as compared to abstract classes as extra indirections are required for interfaces.",

          "Interfaces are slower in performance as compared to abstract classes as extra indirections are required for interfaces.",

          "There's no difference"
        ],
        correct: 3
      },

      {
        question: "When a package is imported, its sub-packages: ",

        answers: [
          "All options",

          "extends from package ",

          "need to be declared",

          "aren't imported"
        ],
        correct: 4
      },

      {
        question:
          "The constructor of a class is invoked every time an object is created: ",

        answers: [
          "with new keyword",

          "with same name",

          "without access modifier",

          "All options"
        ],
        correct: 1
      },

      {
        question:
          'What\'s the output of this code? public class Test { public static String foo(){ System.out.println("Test foo called"); return ""; } public static void main(String args[]){ Test obj = null; System.out.println(obj.foo()); } }',

        answers: [
          '""',

          "NullPointerException",

          '"Test foo called"',

          'obj.foo("Test foo called")'
        ],
        correct: 2
      },

      {
        question:
          'What is the output of the following program? class Test{ public static void main (String args[]){ System.out.println(10 + 20 + "JavaSum"); System.out.println("JavaSum" + 10 + 20); } }',

        answers: [
          "1020JavaSum JavaSum30",

          "1020JavaSum JavaSum1020",

          "IndexOutOfBoundsException",

          "30JavaSum JavaSum1020"
        ],
        correct: 4
      },

      {
        question: "When does method overloading is determined?",

        answers: [
          "At run time",

          "At compile time",

          "At coding time",

          "At execution time"
        ],
        correct: 2
      },

      {
        question:
          'What is the output of the following program? class Test{ public static void main (String args[]){ System.out.println(10 * 20 + "JavaOper"); System.out.println("JavaOper" + 10 * 20); } }',

        answers: [
          "1020JavaOper JavaOper1020",

          "200JavaOper JavaOper200",

          "ArithmeticException",

          "2000JavaOper JavaOper2000"
        ],
        correct: 3
      },

      {
        question:
          'What is the output of the following program? class Test{ public static void main (String args[]){ for(int i=0; 0; i++){ System.out.println("Hello For Loop"); } } }',

        answers: [
          "compile-time error",

          "RuntimeException",

          '"Hello For Loop"',

          '""'
        ],
        correct: 1
      },

      {
        question:
          'What is the output of this program? class output{ public static void main(String args[]){ String c = "Hello i love java"; boolean var; var = c.startsWith("hello"); System.out.println(var); } } ',

        answers: ["true", "false", "0", "1"],
        correct: 2
      },

      {
        question:
          'What is the output of this program? \nclass Student3{ \nint id; \nString name; \nvoid display(){\nSystem.out.println(id+" "+name);} \npublic static void main(String args[]){ \nStudent3 s1=new Student3(); Student3 s2=new Student3(); s1.display(); s2.display(); } }',

        answers: [
          "null null",

          "NullPointerException",

          '0 "" 0 ""',

          "0 null 0 null"
        ],
        correct: 4
      },

      {
        question:
          'What is the output of this program? public class subclass extends superclass { public void displayResult() { system.out.println("Displaying from subClass"); super.displayResult(); }',

        answers: [
          '"Displaying from subclass"',

          '"Displaying from subclass" "Displaying from subclass"',

          "NullPointerException",

          "RuntimeException"
        ],
        correct: 2
      },

      {
        question: "What are the types of exceptions in Java?",

        answers: [
          "String, Numeric",

          "unchecked, Arithmetic",

          "checked, unchecked",

          "Pointer, Runtime, Arithmetic, Compile"
        ],
        correct: 3
      },

      {
        question:
          'How many String Objects will be created? String s1="I am s1 Object"; String s2="I am s2 Object"; String s3="I am s1 Object"; ',
        answers: ["1", "2", "3", "4"],
        correct: 2
      },

      {
        question: "In java, string objects are called immutable as once: ",

        answers: [
          "value has been assigned to a string.",

          "instance has been assigned to a string.",

          "program have been compiled.",

          "get an access modifier before its name"
        ],
        correct: 1
      },

      {
        question:
          "What are the two ways of implementing multi-threading in Java?",

        answers: [
          "None of the options.",

          "Using Java.Lang.Runnable Class and Java.Lang.Thread Interface.",

          "Using Java.Lang.Thread Interface and Java.Lang.Runnable class.",

          "Using Java.Lang.Runnable Interface and Java.Lang.Thread Class."
        ],
        correct: 4
      },

      {
        question: "Clone() is a method of: ",

        answers: [
          "Thread class",

          "Cloneable collection",

          "Cloneable interface",

          "Cloneable API"
        ],
        correct: 2
      },

      {
        question: "how you can disallow serialization of variables?",

        answers: [
          "Using transient keyword",

          "Using protected keyword",

          "Using final keyword",

          "None of the options"
        ],
        correct: 1
      },

      {
        question:
          "What will be the output of following piece of code? public class operatorExample{ public static void main(String args[]) { int x = 4; system.out.println(x++); } }",

        answers: ["6", "ArithmeticException", "4++", "4"],
        correct: 4
      },

      {
        question:
          "Java programs can be executed in a machine once environment variables have been set: ",

        answers: [
          "PATH, JAVAHOME",

          "PATH, CLASSPATH",

          "JAVAHOME, CLASSPATH",

          "SYSTEM, PATH"
        ],
        correct: 2
      },

      {
        question: "What will be the output of Round(3.7) and Ceil(3.7)?",

        answers: ["4, 4", "3.5, 4", "4, 3.5", "4, 3"],
        correct: 1
      },

      {
        question:
          "What's wrong with this next code block? public abstract final class testClass { // Class methods and variables } ",

        answers: [
          "Any Java class must be named with capital letter.",

          "Nothing is wrong, the code is correct.",

          "Abstract class can't be declared as final.",

          "There's not code inside, is dead code."
        ],
        correct: 3
      },

      {
        question:
          "Which return type specifies that the return type may vary in the same direction as the subclass?",

        answers: ["return", "covariant", "bool", "set()"],
        correct: 2
      },

      {
        question: "How can you find the actual size of an object on the heap?",

        answers: [
          "Using Jmeter tool",

          "Generating logs",

          "Using debug tool",

          "None of the options."
        ],
        correct: 4
      }
    ]
  }
];
