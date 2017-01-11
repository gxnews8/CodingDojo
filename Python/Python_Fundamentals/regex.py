import re

# str = 'an example word:cat!!'
# match = re.search(r'word:\w\w\w', str)
# if match:
#     print 'found', match.group()
# else:
#     print 'did not find'
#
# str2 = 'purple alice-b@google.com monkey dishwasher'
# match = re.search(r'\w+@\w+', str2)
# if match:
#     print match.group()
#
# match = re.search('([\w.-]+)@([\w.-]+)', str2)
# if match:
#     print match.group()
#     print match.group(1)
#     print match.group(2)
#
# str3 = 'purple alice@google.com, blah monkey bob@abc.com blah dishwasher'
#
# emails = re.findall(r'[\w\.-]+@[\w\.-]+', str3)
# for email in emails:
#     print email

def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]

    print [word for word in words if re.search(regex, word)]

# get_matching_words('v')#1
# get_matching_words('ss')#2
#get_matching_words('e$')#3
# get_matching_words('b.b')#4
#get_matching_words('b.+b')#5
# get_matching_words('b.*b')#6
# get_matching_words('a.*e.*i.*o.*u')#7
# get_matching_words('[\u\l]+')#8
get_matching_words(r'([\w])(\1+)')#9
