import time

def dur(func):
    def inner( *args ):
        start = time.time()
        result = func( *args )
        end = time.time()
        print "duration is " + str(end - start)
        return result
    return inner
    
    
def name(func):
    def inner( *args ):
        print ("variables are %s") %(args)
        return func( *args )
    return inner

@dur
@name
def fib(x):
    if x == 0:
        return 0
    if x == 1:
        return 1
    return fib(x - 1) + fib(x - 2)

print fib(7)
