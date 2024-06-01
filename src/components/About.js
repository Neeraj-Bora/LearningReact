import React from 'react'

export default function About(props){
    // const [myStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, changeText]= useState("Enable Dark Mode")
    // const [myStyle2,setMyStyle]= useState({
    //     backgroundColor:'#F8F9FA',
    //     color:'black'
    // })

    //We can write it in better way
    // let myStyle={
    //   color: props.mode==='light'?'black':'white',
    //   backgroundColor: props.mode==='light'?'white':'black'
    // }

    let myStyleL ={
      color:'black',
      backgroundColor:'white'
    }
    let myStyleD ={
      color:'white',
      backgroundColor:'black'
    }
    let myStyle2L={
      color:'black',
      backgroundColor:"#f8f9fa"
    }
    let myStyle2D={
      color:'white',
      backgroundColor:"rgb(33,33,33)"
    }
    // const toggleStyle=()=>{
    //   if(props.mode==='white'){
    //     setStyle({
    //       color:'black',
    //       backgroundColor:'white'
    //     })
    //   }else{
    //     setStyle({
    //       color:'white',
    //       backgroundColor:'black'
    //     })
    //   }
    //   if(myStyle2.color==='white'){
    //     setMyStyle({
    //       backgroundColor:'white',
    //       color:'black'
    //     })
    //   }else{
    //     setMyStyle({
    //       backgroundColor:'rgb(33,33,33)',
    //       color:'white'
    //     })
    //   }
    // }
    return (
      <div className="conatiner" style={props.mode==='light'?myStyleL:myStyleD}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample" style={props.mode==='light'?myStyleL:myStyleD}>
          <div className="accordion-item" style={props.mode==='light'?myStyleL:myStyleD}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne" 
                style={props.mode==='light'?myStyle2L:myStyle2D}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={props.mode==='light'?myStyleL:myStyleD}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo" style={props.mode==='light'?myStyle2L:myStyle2D}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={props.mode==='light'?myStyleL:myStyleD}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree" style={props.mode==='light'?myStyle2L:myStyle2D}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}