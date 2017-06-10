string = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."
string = (string.replace(" ","").replace(",",""))
s_dict = {}

for s in string:
    if s in s_dict:
        s_dict[s] += 1
    else:
        s_dict[s] = 1
s_dict_sorted = sorted(s_dict.items(),key=lambda alphabet:alphabet[1],reverse=True)
print(s_dict_sorted)

