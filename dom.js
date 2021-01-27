document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm a developer</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm a developer"
document.getElementsByTagName('h1')[0].innerText="I m from software background"
"I m from software background"
document.getElementsByTagName('h1')[0].style.color="red"
"red"
document.getElementsByTagName('h1')[0].style.visibility="hidden"
"hidden"
document.getElementsByTagName('h1')[0].style.visibility="visible"
"visible"

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0]
<a href=​"#skills" class=​"scroll">​JavaScript</a>​
document.getElementsByClassName('scroll')[0].innerText
"Skills"
document.getElementsByClassName('scroll')[0].innerText="React"
"React"

var a = document.getElementsByClassName('scroll')[0];
a.getElementsByClassName('student')[0
