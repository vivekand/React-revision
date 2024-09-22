import MyComponent from './MyComponent.js'
// import MyComponent from './MyComponent.js'
//  // This is a component 


// import { Children } from "react"

// // const Title=()=>{             
// //     console.log("This is the title");
// //       return(
// //     <div>
// //       Good morning
// //     </div>
// //   )
// // }


// // starting props 


// // Unpac or destructure 
// const obj={name:"Vivek",sub:"Java"};
// const {name,sub}=obj;

// console.log(name);
// console.log(sub);
// // console.log(obj.name);  // this also work

// const Lernprops =(props)=>{
//   const {text,passing,bgcolor}=props; //destructure props.
//   // console.log(text);
//   console.log(props);
//   return(
//     <div style={{
//       background:bgcolor
//     }}> I am leaning props and {text} and {passing}</div>
//   )
// }

// const App=()=>{    // component is alwayse written in first capital
//   return(
//     <div>
//       <Lernprops text="how props work" passing="props kam kr rha hai" bgcolor="purpal"/>
//   </div>
//   )
// }

// const Box = (props) => {
//   const { background, color, text ,check} = props;
//   console.log(check);
//   return (
//     <div style={{ background: background, color: color , fontSize:check? '40px':'20px' }}>{text}</div>
//   )
// }


// const App = () => {
//   return (
//     <div>

//       <Box check={true} background="black" color="White" text="Data flows from the parent to the child component." />
//       <Box check ={false} background="pink" color="White" text="Immutable: Once passed to a component, props cannot be changed by that component. They are read-only." />
//       <Box background="blue" color="White" text="Customization: Props allow you to pass data (like strings, numbers, arrays, objects, and functions) into child components, enabling you to make components more flexible."/>
//     </div>
//   )
// }


// // Building new component in nseperate fils

//  const MyComponent=(props)=>{
//   const {children,bgcolor,height,colour}=props;
//   // console.log(props)
//   return(
//     <div style={{background:bgcolor,height:height+'px', color:colour}}>
//       {children}
//     </div>
//   )
//  }


const App = () => {
  return (
    <div>
      <MyComponent bgcolor="black" height={50} colour="White">
        Hello world 
      </MyComponent>
      <MyComponent bgcolor="pink" height={100} colour="White">
        Hello world 
      </MyComponent>
    </div>
  )
}

export default App;  // expot as app only 
