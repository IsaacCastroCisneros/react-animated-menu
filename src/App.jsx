import { useState,useRef } from 'react'
import {CSSTransition} from 'react-transition-group'

function App() 
{
   const[showPoop,setShowPoop]=useState(false);
   const[showClown,setShowClown]=useState(false);
   const[showCowBoy,setShowCowBoy]=useState(false);

   const[h,setH]=useState(null)

   const menuContainer = useRef()

   function calcH(el)
   {
      const h = el.offsetHeight;
      setH(`${h+(64*2)}px`)
   }

  return (
    <>
      <span class="block uppercase font-bold text-[1.4rem] text-center absolute w-[100%] top-0 py-[.8rem] bg-gradient-to-b from-blue-500 to-violet-600 z-50">
        the best animated menu
      </span>

      <article className="h-[100vh] px-[1rem]">
        <div
          ref={menuContainer}
          style={{ height: h }}
          className="px-[5rem] menu-container flex p-[4rem] relative w-[35rem] my-0 mx-auto overflow-hidden max-w-[100%] h-[30rem] rounded-[.5rem] bg-slate-800 top-[50%] translate-y-[-50%]"
        >
          <div className="yoContainer w-[200%] flex items-center absolute left-0 p-[4rem] gap-[8rem]">
            <Menu
              setShowClown={setShowClown}
              setShowCowBoy={setShowCowBoy}
              setShowPoop={setShowPoop}
            />
            <CSSTransition
              in={showPoop}
              timeout={500}
              unmountOnExit
              classNames="poop"
              onEnter={calcH}
              onExit={() => setH(null)}
            >
              <SubMenu setShow={setShowPoop}>
                <Item icon="💩" text="poop" />
                <Item icon="💩" text="poop" />
                <Item icon="💩" text="poop" />
              </SubMenu>
            </CSSTransition>
            <CSSTransition
              in={showClown}
              timeout={500}
              unmountOnExit
              classNames="clown"
              onEnter={calcH}
              onExit={() => setH(null)}
            >
              <SubMenu setShow={setShowClown}>
                <Item icon="🤡" text="clown" />
                <Item icon="🤡" text="clown" />
                <Item icon="🤡" text="clown" />
                <Item icon="🤡" text="clown" />
              </SubMenu>
            </CSSTransition>
            <CSSTransition
              in={showCowBoy}
              timeout={500}
              unmountOnExit
              classNames="cowboy"
              onEnter={calcH}
              onExit={() => setH(null)}
            >
              <SubMenu icon="🤠" setShow={setShowCowBoy} text="cowBoy">
                <Item icon="🤠" text="cowboy" />
                <Item icon="🤠" text="cowboy" />
                <Item icon="🤠" text="cowboy" />
                <Item icon="🤠" text="cowboy" />
                <Item icon="🤠" text="cowboy" />
              </SubMenu>
            </CSSTransition>
          </div>
        </div>
      </article>
    </>
  );
}

function Menu(props) 
{
  const{
   setShowClown,
   setShowCowBoy,
   setShowPoop,
  }=props

  function show(setShowPoop)
  {
    const container = document.querySelector('.yoContainer');
    
    container.classList.add('active')
    setShowPoop(true)
  }

  return (
      <ul className="list h-[100%] w-[calc(50%-4rem)] flex flex-col gap-[1rem] justify-center">
        <li className="block">
          <button
            className="flex w-[100%] items-center gap-[1rem] text-[1.5rem] p-[1rem] bg-slate-700 hover:bg-slate-500 transition-all duration-[500ms] rounded-[1rem] uppercase font-bold"
            onClick={()=>show(setShowPoop)}
          >
            <span className="text-[2rem]">💩</span>
            <p className="flex-1 text-center">poop</p>
          </button>
        </li>
        <li className="block">
          <button className="flex w-[100%] items-center gap-[1rem] text-[1.5rem] p-[1rem] bg-slate-700 hover:bg-slate-500 transition-all duration-[500ms] rounded-[1rem] uppercase font-bold"
           onClick={()=>show(setShowClown)}
          >
            <span className="text-[2rem]">🤡</span>
            <p className="flex-1 text-center">clown</p>
          </button>
        </li>
        <li className="block">
          <button className="flex w-[100%] items-center gap-[1rem] text-[1.5rem] p-[1rem] bg-slate-700 hover:bg-slate-500 transition-all duration-[500ms] rounded-[1rem] uppercase font-bold"
          onClick={()=>show(setShowCowBoy)}
         >
            <span className="text-[2rem]">🤠</span>
            <p className="flex-1 text-center">cowboy</p>
          </button>
        </li>
      </ul>
  );
}

function SubMenu(props)
{

   return (
      <ul className="h-[100%] flex-1 flex flex-col gap-[1rem] justify-center">
         <li className="block w-[100%]">
            <button className="flex w-[100%] items-center gap-[1rem] text-[1.5rem] p-[1rem] bg-slate-700 hover:bg-slate-500 transition-all duration-[500ms] rounded-[1rem] uppercase font-bold"
            onClick={()=>
            {
               document.querySelector('.yoContainer').classList.remove('active');
               props.setShow(false) 
            } }
            >
               <span className="text-[2rem]">⬅</span>
               <p className="flex-1 text-center">back</p>
            </button>
         </li>
         {props.children}
      </ul>
   );  
}

function Item(props)
{
  return (
    <li className="block w-[100%]">
      <button className="flex w-[100%] items-center gap-[1rem] text-[1.5rem] p-[1rem] bg-slate-700 hover:bg-slate-500 transition-all duration-[500ms] rounded-[1rem] uppercase font-bold">
        <span className="text-[2rem]">{props.icon}</span>
        <p className="flex-1 text-center">{props.text}</p>
      </button>
    </li>
  );
}

export default App

  