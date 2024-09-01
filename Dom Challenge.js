//Create Header With Class
let header = document.createElement('header');
header.className = 'website-head';
//Create Logo Div With Class
let logoDiv = document.createElement('div');
logoDiv.className = 'logo';
//Text Inside Logo Div
let logoText = document.createTextNode('Elzero');
logoDiv.appendChild(logoText);
//Create Ul With Class
let ul = document.createElement('ul');
ul.className = 'menu';
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let liTextContent = ['Home', 'About', 'Service', 'Contact']
for (i = 0; i < liTextContent.length; i++){
    let li = document.createElement('li');
    li.style.cssText = 'margin-right: 10px; display: inline-block;';
    let a = document.createElement('a');
    a.href = `#`;
    a.style.cssText = `text-decoration: none; color: #333;`;
    let liText = document.createTextNode(liTextContent[i]);
    a.appendChild(liText);
    li.appendChild(a);
    ul.appendChild(li);
}
//Styling>>>>>>>>>>>>>>>>>>>>>>>
document.body.style.cssText = 'font-family: arial, sans-serif; margin: 0; padding: 0;';
header.style.cssText = `background-color: rgb(255,255,255); align-items: center; justify-content: space-between;
display: flex; padding: 20px; `;
ul.style.cssText = `list-style: none;`;
logoDiv.style.cssText = 'color: #008000; font-size: 24px; font-weight: bolder;';
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
header.appendChild(logoDiv);
header.appendChild(ul);
document.body.appendChild(header);

//Content ===================================
let content = document.createElement('div');
content.className = `content`;
content.style.cssText = `display: grid; padding: 25px; grid-template-columns: repeat(3,1fr); background-color: #f8f8f8`;

for (i = 1; i <= 15; i++){
    let product = document.createElement('div');
    product.style.cssText = `background-color: rgb(255,255,255); text-align: center; border: 1px solid #ddd; 
    padding: 20px; margin: 5px; border-radius: 8px; font-size: 10px`;
    let span = document.createElement('span');
    span.style.cssText = `font-weight: normal; font-size: 30px; color: black; display: block; margin-bottom: 5px; 
    margin-top: 5px;`;
    let divText = document.createTextNode('Product');
    let spanNumber = document.createTextNode(i);
    span.append(spanNumber);
    product.append(span);
    product.append(divText);
    content.appendChild(product);
}
header.after(content);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let foot = document.createElement('footer');
let footText = document.createTextNode('Copy Right 2024')
foot.append(footText);
//Style
foot.style.cssText = `background-color: green; color: #fff; text-align: center; padding-top: 10px; padding-bottom: 10px; 
width: 100%;`;

content.after(foot);







































