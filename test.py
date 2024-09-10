# This is python code

name = "Aytekin"
print(name)

lastName = "Kaplan"

print(lastName)

fullName = name+" "+lastName

print(fullName)

country = "Turkey"

print(country)

city = "Istanbul"

print(city)

age = 30

print(age)

isMarried = True

print(isMarried)

year=2022

print(year)

is_true = True

print(is_true)
is_false = False

print(is_false)

# Declare multiple variable on one line

first_name, last_name, country, age, is_married = "Aytekin", "Kaplan", "Turkey", 30, True

print(first_name, last_name, country, age, is_married)


def dataTypes(var):
  return type(var)

print(dataTypes(first_name))


for item in [name, lastName, fullName, country, city, age, isMarried, year, is_true, is_false]:
  print(type(item))


# finding length of string with for loop

for item in [name, lastName, fullName, country, city]:
  print(len(item))



help(type)