def union(a,b):
    return [x for x in a] + [y for y in b if y not in a]

def intersection(a,b):
    return [x for x in a if x in b]

def setDiff(a,b):
    return [x for x in a if x not in b]

def symDiff(a,b):
    return union(setDiff(a,b),setDiff(b,a))

def cart(a,b):
    return [(x,y) for x in a for y in b]

a = [1,2,3,4,5]
b = [2,3,4,6]

print "should be 1,2,3,4,5,6"
print union(a,b)
print "should be 2,3,4"
print intersection(a,b)
print "should be 1,5"
print setDiff(a,b)
print "should be 1,5,6"
print symDiff(a,b)
print cart(a,b)
