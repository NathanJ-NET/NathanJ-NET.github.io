# **Control Structures in Programming**

Programming relies on three fundamental control structures that dictate how instructions are executed. These structures form the foundation of logical programming flow: **Sequence, Selection, and Looping.**

## **1. Sequence Structure (Linear Execution)**
### **Definition:**
The sequence structure executes statements in order, one after another. Every instruction runs in a top-down approach unless modified by another control structure.

### **Example:**
A program that takes a user’s name and displays a greeting:
```plaintext
Begin
    Declare Name as String
    Output "Enter your name: "
    Input Name
    Output "Hello, " + Name + "!"
End
```
### **Purpose:**
- Ensures step-by-step execution.
- Used when instructions must follow a strict order.

---

## **2. Selection Structure (Decision-Making)**
### **Definition:**
The selection structure makes decisions based on conditions. It allows a program to choose different execution paths depending on the situation.

### **Types of Selection:**
1. **Simple IF:** Executes a block of code if the condition is true.
2. **IF-ELSE:** Executes one block if the condition is true, another if false.
3. **Nested IF:** Multiple IF statements embedded inside each other.

### **Example (IF-ELSE):**
```plaintext
Begin
    Declare Number as Integer
    Output "Enter a number: "
    Input Number
    If Number MOD 2 == 0 Then
        Output "The number is even."
    Else
        Output "The number is odd."
    End If
End
```
### **Purpose:**
- Allows decision-making in programs.
- Used in authentication, validation, and conditional logic.

---

## **3. Loop Structure (Iteration)**
### **Definition:**
Loops allow a set of instructions to execute repeatedly based on a condition.

### **Types of Loops:**
1. **WHILE Loop:** Runs while the condition remains true.
2. **FOR Loop:** Executes a fixed number of times.
3. **DO-WHILE Loop:** Runs at least once, then checks the condition.

### **Example (WHILE Loop):**
```plaintext
Begin
    Declare Counter as Integer
    Set Counter = 1
    While Counter <= 5 Do
        Output Counter
        Counter = Counter + 1
    End While
End
```
### **Purpose:**
- Reduces redundancy by automating repetitive tasks.
- Used for data processing, input validation, and automation.



## **Concepts Demonstrated in This Tutorial**

### **Variable Declaration:**
- Declaring variables is necessary for storing input and performing operations.
- Example: `Declare Name as String`, `Declare Age as Integer`

### **Concatenation:**
- Combining strings and variables to form a meaningful message.
- Example: `Output "Hello, " + Name + "!"`

### **Conditional Logic:**
- Using `IF-ELSE` structures to make decisions.
- Example: Checking if a number is even or odd using `MOD` operator.

### **Looping and Iteration:**
- Repeating a process using `WHILE` and `FOR` loops.
- Example: Counting from `1 to 5` or `1 to N` dynamically.

### **Input/Output Operations:**
- Accepting user input and displaying results.
- Example: `Input Age`, `Output "You are " + Age + " years old."`

---



