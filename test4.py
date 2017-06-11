string = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."
words_list = string.replace(",","").replace(".","").split(" ")
index = [0,4,5,6,7,8,9,14,15,18]
result_dict = {}
i = 0
for word in words_list:
    if i in index:
        head = word[0:1]
    else:
        head = word[0:2]

    result_dict[head] = i 
    i += 1

print(result_dict)
