def inc(x):
    return x + 1

f = inc

f(10)

def h(x):
    return lambda y: x + y

h(1)
h(2)
h(1)(3)
h(2)(5)

b=h(1)

def f(x):
    def g(y):
        return x + y
    return g

f(1)
f(2)
f(1)(3)
f(2)(5)

a=f(1)
b=h(1)

def repeat(x):
    def g(y):
        str = ""
        for i in range (y):
            str += x
        return str
    
    return g

print r1(2)
print r2(2)
print repeat('cool')(3)
