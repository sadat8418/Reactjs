git init  
git add readme.md 
git commit -m "Start of react"
git branch -M main
git remote add origin https://github.com/sadat8418/Reactjs.git
git push -u origin main

force push : 
git push -f -u origin main


1. npx create-react-app 01basicReact
npx .. # needa loto time x   

react dom 
ract native

jest-dom
react scripts
web vitals (koto fast choltese webste, tracks)

scripts:
start :dev env te 
build : production
test
eject : eituku kaj cilo ract er .. baki ta kore nibo ...
lint : error/ red line dekhay VS code a .. oitai lint 

#   Vite
2. npm create vite@latest
3. npm i

#   Tailwind
npm install tailwindcss @tailwindcss/vite


npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
# 1 tailwind.config.js
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

# 2 src/ index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

rfce    // import react , function
npm i react-router-dom


keys na likhle performance degrade hoye jay 
classbased .. redux , but react sob funtional based ... 

# React Router

e.target.value
Remember the key in loop in react

React router: 
<RouteProvider>  in main.jsx instead of App.jsx
import outlet  --> vitore change , header footer same thakbe 
a tag use hoy na , refresh er somoy full page reload hobe . tai Link use hoy
Navlink : isActive ==> colour change hoy hover a 

<Outlet >... nesting hobe ... <header> <Outlet> <footer>  only outlet change hobe ...
useParams hook to take userid
loader : click korar aggei load , hook: useLoaderData

<Route path, element, loader >
loader : hover & fetching start , cache ao rakhe 

# CONTEXT API 

context api :
redux , redux tool-kit

userContext.js
LoginContext.js
React.createContext()

UserContextProvider.jsx   [Top level এ রাখতে হবে তাই jsx ] 
import UserContext 
const UserContextProvider = ({children}) => { 
			const [user. setUser] = React.useState

 value = {{user, setUser}}
  
  App.jsx --> <UserContextProvider>
 
 Login 
 Profile.jsx 
  if (!user) return <div>please login</div>
    return <div>Welcome {user.username}</div>
useContext use koro , data fetch koro from UserContext.js 	
	
	App.js or main.js e wrap kora jay .. <themeProvider>
	
	method functionality kivabe nibo ?? define kore dao ,
	themeMode. lightMode eigulo method, 
	eder functinality : const lightTheme = ()=> {setThemeMOde("light")}
	you will have to write html as well  
	 useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
	
App.jsx e <Card /> anlam <ThemeBtn />	
	 onChange={onChangeBtn}
	 
	 define onChange 
	   const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
	
	tailwind config:
	darkMode: "class" ,  system er base e chole by default
	
	
	Funtion only declared in UserContext , functionality written in App.jsx
	
	
# 10th project Todo: 
	
  contexts/ TodoContext.js  --> 
	
	index.js --> সব একসাথে export 
	
	local storage : you can store in key values, One issue  everything stores/becomes string format. 
	query : take every value from local storage & insert in the todo ..  useEffect method 
	
	if not server side renderiing, there is something in the browser side.   
	localStorage.getItem("todos")
	
	useEffect(()=>{})
	

# Extra
flux -- state management 
redux (library) --- you should never modify your state ,
          changes should be made through pure functions (reducers)
          so that anyone canot change it ..
         
      redux- toolkit  (onek kisu preinstalled)

      reducer , useSelector , useDispatch (to send)

      redux : 07 July 2025
npm i @reduxjs/toolkit
npm i react-redux


# REDUX:

	data flow is strong in redux than context api ..
	... spread korte vule gele , everything will get overwritten ...
	you should never mutate your state , changes should be made though functions (reducers)
	
	redux toolkit  ...built in middleware, slicing
	store: single source of truth  (just  like global variable)
	reducers: mini stores update 
	useSelector, useDispatch
	
	app/store.js -->
	configureStore({})
	todoSlice.js
	slice --> initialState, reducers
	slice : reducers এর বড় version 
	
	reducers : functionality & definition 2 tai likhi ...
	 state, action 
	  state : current situation dey, 10 todos now 
	  action : যে data pass হচ্ছে . . payload
	payload : is a an object .  payload.text,  payload.email	
array --> push    			 state.todos.push(todo)  আগে( context api) state থেকে সব value নিয়ে আসতাম, spread করতাম, then update , এইখানে state preversed থাকে 
object -->  property add
AddTodo : 
useSelector. useDispath : React hooks to use Redux
Dispath uses "reducers" to change value in "store"

list all todos , loop  ,  store teke nibo 
state theke na , store theke nibo

when someone clicks it will execute , we have to give reference , 
onClick{() => dispatch()}    
 onClick={dispatch()}   xx
 
 main.js 
 provider
 store 
 
log, monitor, which reducer is time consuming, gives every state, jump 


# 12 
npm i @reduxjs/toolkit react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form