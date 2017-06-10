import collections

string = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."
string = (string.replace(",","").split(" "))
result = []
i = 0
for word in string:
    result.append(len(word))

print(sorted(result,reverse=True))

