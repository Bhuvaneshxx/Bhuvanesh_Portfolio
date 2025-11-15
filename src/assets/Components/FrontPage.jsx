import ElectricBorder from "./ElectricBorder";


function FrontPage(){


    return(
        // CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

    
        <div id="body">
        <nav>
        <a href="">Home</a>
        <a href="aboutme">About</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
        </nav>
        <div>
            <div style={{marginLeft:"60px"}}>
            <p style={{fontWeight:"bold",color:"white",marginBottom:"-30px",marginTop:"100px"}}>Hey! I'm Bhuvanesh</p>    
            <h1 className="frontEnd">Front-End </h1>
            <h1 className="frontEnd1">Developer</h1>
            <p style={{fontWeight:"bold",color:"white"}}>I'm a FrontEnd Developer, I'll help you <br />build beautiful websites users will Love!..</p>
            <button id="getin">Get touch</button>
            <button id="Browseprojects">Browse Projects</button>
            
            </div>
            
        </div>
        <section1 id="aboutme">
        <div style={{marginLeft:"60px"}}>
            <h1 style={{fontWeight:"bold",color:"white"}}>About Me <span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
            <p style={{fontWeight:"bold",color:"white"}}>Developing a beautiful and functional Website is what I love doing, and that's why I give my all in every <br/>
            new challenge.</p>
            <div style={{display:"flex"}}>
            <p style={{fontWeight:"bold",marginLeft:"10px",fontSize:"20px"}}>My stack</p>
            <img style={{width:"390px",height:"290px", marginTop:"80px",marginLeft:"-90px",borderRadius:"10px"}} class="stack" src="http://127.0.0.1:5500/ChatGPT%20Image%20Aug%2015,%202025,%2004_39_08%20PM.png" alt=""/>
            <p style={{fontWeight:"bold",marginLeft:"150px",fontSize:"20px"}}>My Special Place</p>
            <img style={{width:"500px",margin:"30px",marginTop:"80px",height:"290px", marginLeft:"-170px",borderRadius:"10px"}} class="stack" src="http://127.0.0.1:5500/ChatGPT%20Image%20Aug%2015,%202025,%2004_42_55%20PM.png" alt=""/>
            </div>
            </div>
        </section1>
        <section2>
            <div style={{marginLeft:"60px"}}>
            <h1 style={{fontWeight:"bold",color:"white"}}>Experience<span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
            <p style={{color:"rgb(148, 69, 205)",display:"flex",fontWeight:"bold"}}>Cloudlogic
            <p style={{color:"rgba(255, 255, 255, 1)",marginLeft:"180px",fontWeight:"bold"}}>I have got Good Foundation about Web Designing and Development strategies on that startup.</p>
            </p>
            <p style={{color:"rgb(148, 69, 205)",display:"flex",fontWeight:"bold"}}>NanLogical <br/> Consultancy Services
            <p style={{color:"rgba(255, 255, 255, 1)",marginLeft:"100px",fontWeight:"bold"}}>I got a Work Experience as a Junior Web Developer on that Sector and I Gained a Real time Problem solving skills.</p>
            </p>
            <div style={{padding:"40px"}}>
            <img style={{width:"350px", marginLeft:"-20px",borderRadius:"10px",height:"250px"}}src="https://media.licdn.com/dms/image/v2/C510BAQG-fWviRtZG4g/company-logo_200_200/company-logo_200_200/0/1631436535279/cloudlogictech_logo?e=2147483647&v=beta&t=Yo6xedYKKuaYmnm73EtwkW5aYwyS0Ju27TiVlJ5inHk" alt="" />
            <img style={{width:"390px", marginLeft:"100px",height:"250px",borderRadius:"10px"}}src="https://media.licdn.com/dms/image/v2/C4D1BAQGMgOjxw6WUUA/company-background_10000/company-background_10000/0/1583059938369?e=2147483647&v=beta&t=9xzdozoS2QdhE8NSTvEi_aDXIdlfu3KeX90ggfg7O-Q" alt="" />
            </div>
            </div>
        </section2>
        <section3>
            <div style={{marginLeft:"60px"}}>
            <h1 style={{fontWeight:"bold",color:"white"}}>Projects<span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
                <div style={{display:"flex",gap:"30px"}}>
<ElectricBorder
            color="#7df9ff"
            speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
        >
        <div >
            <h1>To-Do List</h1>
            <p style={{ margin: '6px 0 0', opacity: 0.8, width:"300px"}}>
                        To-Do list App works upon CRUD Operation by using Reactjs and Javascript.
            <br />
            <button style={{width:"100% ",padding:"5px",marginTop:"80px",fontWeight:"bold"}}>Get Started</button>
            </p>
        </div>
        </ElectricBorder>
        <ElectricBorder  color="#7df9ff"
            speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}>
            <div >
            <h1>LinkedIn Login Page</h1>
            <p style={{ margin: '6px 0 0', opacity: 0.8, width:"300px"}}>
            I've Created a Clone of Linkedin Login Page using
            Html, CSS and Javascript with responsive Web page.
            <br />
            <button style={{width:"100% ",padding:"5px",marginTop:"80px",fontWeight:"bold"}}>Get Started</button>
            </p>
        </div>
        </ElectricBorder>
    </div>
            <p style={{fontWeight:"bold",color:"white"}}> </p>
            </div>
        </section3>
        <section4 id="skills">
            <div style={{marginLeft:"60px"}}>
            <h1 style={{fontWeight:"bold",color:"white"}}>Skills<span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
            <div className="skillitem">
            <ul >
                <li style={{color:"rgb(148, 69, 205)"}}>Web Design</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Figma</li>
                <li>VS code</li>
            </ul>
            <ul>
                <li style={{color:"rgb(148, 69, 205)"}}>FrontEnd</li>
                <li>Html</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>React JS</li>
            </ul>
            <ul>
                <li style={{color:"rgb(148, 69, 205)"}}>Backend</li>
                <li>SpringBoot</li>
                <li>Postgreede</li>
                <li>Postman</li>
                <li>PHP</li>
                <li>Java</li>
            </ul>
            <ul>
                <li style={{color:"rgb(148, 69, 205)"}}>Softskills</li>
                <li>Effective Communication</li>
                <li>Commitment</li>
                <li>Collaboration</li>
                </ul></div></div>
        </section4>
    <a href="contactus.html"><button className="contactus">Contact us</button></a>
        </div>
    )
}
export default FrontPage