import plotly.graph_objects as go
import csv

invoices = open('CupcakeInvoices.csv')

for invoice in invoices:
    print(invoice)

invoices.close()

with open('CupcakeInvoices.csv') as invoices:
    reader = csv.reader(invoices)
    for row in reader:
        print(row[2])

with open('CupcakeInvoices.csv') as invoices:
    reader = csv.reader(invoices)
    for row in reader:
        print(round(int(row[3]) * float(row[4]), 2))

total = 0

with open('CupcakeInvoices.csv') as invoices:
    reader = csv.reader(invoices)
    for row in reader:
        total = round(total + int(row[3]) * float(row[4]), 2)

print(total)

chocolateTotal = 0
vanillaTotal = 0
strawberryTotal = 0

with open('CupcakeInvoices.csv') as invoices:
    reader = csv.reader(invoices)
    for row in reader:
        if(row[2] == 'Chocolate'):
            chocolateTotal = round(
                chocolateTotal + int(row[3]) * float(row[4]), 2)
        elif(row[2] == 'Vanilla'):
            vanillaTotal = round(vanillaTotal + int(row[3]) * float(row[4]), 2)
        else:
            strawberryTotal = round(
                strawberryTotal + int(row[3]) * float(row[4]), 2)

print(chocolateTotal, vanillaTotal, strawberryTotal)

fig = go.Figure(
    data=[go.Bar(y=[chocolateTotal, vanillaTotal, strawberryTotal])],
    layout_title_text="Chocolate vs Vanilla vs Strawberry Cupcake Sales"
)
fig.show()
