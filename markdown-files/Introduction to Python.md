````markdown
# Introduction

In this session, we'll go over some basic Python operations and check various data types in Python.

### Basic Arithmetic Operations in Python

Python supports several arithmetic operators, which you can use to perform common mathematical operations. Let's explore them:

```python
print(2 + 3)   # addition(+)
print(3 - 1)   # subtraction(-)
print(2 * 3)   # multiplication(*)
print(3 / 2)   # division(/)
print(3 ** 2)  # exponential(**)
print(3 % 2)   # modulus(%)
print(3 // 2)  # floor division operator(//)
```
````

- **Addition (+)**: Adds two numbers.
  - Example: `2 + 3` results in `5`.
- **Subtraction (-)**: Subtracts one number from another.
  - Example: `3 - 1` results in `2`.
- **Multiplication (\*)**: Multiplies two numbers.
  - Example: `2 * 3` results in `6`.
- **Division (/)**: Divides one number by another.
  - Example: `3 / 2` results in `1.5`.
- **Exponential (**)\*\*: Raises one number to the power of another.
  - Example: `3 ** 2` results in `9` (3 raised to the power of 2).
- **Modulus (%)**: Returns the remainder of the division.
  - Example: `3 % 2` results in `1` (remainder when dividing 3 by 2).
- **Floor Division (//)**: Returns the integer part of the division (no remainder).
  - Example: `3 // 2` results in `1`.

### Checking Data Types in Python

Python has several built-in data types. You can check the data type of any value or variable using the `type()` function. Below are some common data types in Python:

```python
print(type(10))                  # Int
print(type(3.14))                # Float
print(type(1 + 3j))              # Complex
print(type('Aytekin'))          # String
print(type([1, 2, 3]))           # List
print(type({'name':'Aytekin'})) # Dictionary
print(type({9.8, 3.14, 2.7}))    # Set
print(type((9.8, 3.14, 2.7)))    # Tuple
```

#### Data Types Explained:

- **Integer (int)**: Whole numbers, positive or negative (e.g., `10`, `-5`).
- **Float (float)**: Decimal numbers (e.g., `3.14`, `-2.7`).
- **Complex (complex)**: Numbers with a real and imaginary part (e.g., `1 + 3j`).
- **String (str)**: A sequence of characters enclosed in single or double quotes (e.g., `'Aytekin'`).
- **List (list)**: An ordered, mutable collection of items (e.g., `[1, 2, 3]`).
- **Dictionary (dict)**: An unordered collection of key-value pairs (e.g., `{'name': 'Aytekin'}`).
- **Set (set)**: An unordered collection of unique items (e.g., `{9.8, 3.14, 2.7}`).
- **Tuple (tuple)**: An ordered, immutable collection of items (e.g., `(9.8, 3.14, 2.7)`).

Python is a dynamically typed language, meaning you don't have to declare the data type explicitly. The interpreter infers the type based on the value assigned.

---

This concludes the basic introduction. Continue exploring more features in Python as you progress in the challenge!

```

This file includes explanations for arithmetic operations and data types, suitable for Python beginners. You can add it to your `python introduction.md` file.
```
