# learnings
 
## 1. height: calc(100vh - 60px);

- made the height whole height minus 60 as we did 60 from top so to make it full

2. Getting Font Awesome Icon in react

- step 1 >
  npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons

- step 2 >
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

- step 3 >
  import { faCoffee, faAddressCard, faUser } from "@fortawesome/free-solid-svg-icons";

- step 5 >  
   <FontAwesomeIcon icon={faCoffee} />
  <FontAwesomeIcon icon={faAddressCard} />
  <FontAwesomeIcon icon={faUser} />
  

- step 6 (optional)

  <FontAwesomeIcon icon={faCoffee} style={{ color: "green", fontSize: "2em" }} />

3. How Navbar Work

  - firs we 3 divs

    - logo div
    - hamburger icon
    - nav items

  - for nav items

    - using media queries we change them on mobile
      -position : absolute
      -overflow : hidden
      -right : 0
    - logic and working
      - according to the state .active class is added to navitems
      - active class have this styling
        - .nav-elements.active {width: 270px}
      - <div className={`nav-elements  ${showNavbar && 'active'}`}>

  - for hamburger iocn
    - display block on mobile verison
    - display none on desktop version
    - then when click, it change the state
    - according to the state .active class is added to navitems
    - <div className={`nav-elements  ${showNavbar && 'active'}`}>
