import csv

with open('List.csv', 'r') as infile:
    reader=csv.reader(infile)
    with open('new.csv','w') as outfile:
        writer = csv.writer(outfile)
        Diseases = {rows[0]:rows[1] for rows in reader}
with open('List.csv', 'r') as infile:
    reader=csv.reader(infile)
    with open('new.csv','w') as outfile:
        writer = csv.writer(outfile)
        DiseaseWeight = {rows[0]:0 for rows in reader}

test='acid'
for disease in Diseases:
    cur_symps=Diseases[disease]
    if cur_symps.count(test)>0:
        DiseaseWeight[disease]+=1
    #if cur_symps.find(x):
    #    DiseaseWeight[disease]+=1
print(DiseaseWeight)