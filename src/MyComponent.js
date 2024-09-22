const MyComponent=(props)=>{
    const {children,bgcolor,height,colour}=props;
    // console.log(props)
    return(
      <div style={{background:bgcolor,height:height+'px', color:colour}}>
        {children}
      </div>
    )
   }
   export default MyComponent;