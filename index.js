let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let mainDiv = document.createElement('div')
mainDiv.setAttribute('class','dog-content')

let image = document.createElement('img')
image.setAttribute('class', 'dog-image')
image.setAttribute('src','./assets/rizzo.jpg')


content.append(mainDiv)

mainDiv.append(image)

let detailDiv = document.createElement('div')
detailDiv.setAttribute('class','dog-details')

let description = document.createElement('h3')
description.append("Description:")

detailDiv.append(description)
mainDiv.append(detailDiv)

let text = document.createElement('p')
text.textContent = "This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her, and dislikes other animals."

detailDiv.append(text)

let times = document.createElement('h3')
times.append("Feeding Times:")

detailDiv.append(times)

let list = document.createElement('ul')
let item1 = document.createElement('li')
let item2 = document.createElement('li')
let item3 = document.createElement('li')

item1.append("9:00 am")
item2.append("12:00 pm")
item3.append("5:00 pm")

list.append(item1)
list.append(item2)
list.append(item3)

detailDiv.append(list)