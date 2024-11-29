//creating the method
function customRender(reactElement, container){
    /* 
      aro element asle proble, loopbased code lagbe
    
    const domElement = document.createElement(reactElement.type)
   
    domElement.innerHTML = reactElement.children //children add 
    domElement.setAttribute('href', reactElement.props.href) //setting attribute
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
  */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

    
}
 //method continously element create kortei thake 
 //element tree graph toiri hote thake
const reactElement = {
    type: 'a',
    props: {  
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}  //these are terminologies, every element eivabe likhte hobe 

const mainContainer = document.querySelector('#root') //id = root