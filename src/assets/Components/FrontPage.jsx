import ElectricBorder from "./ElectricBorder";
import Getin from "./Getin";
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';
import { ImFire } from "react-icons/im";
function FrontPage(){

    return(
        // CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN


        <div id="body"style={{marginTop:"200"}}>
            <div style={{ width: '600px', height: '400px' ,marginLeft:"880px",marginBottom:"-580px",marginTop:"200px"}}>
    <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
    />
</div >
        <nav>
        <a href="">Home</a>
        <a href="#aboutme">About</a>
        <a href="#projects">Projects</a>
        <a href="">Contacts</a>
        </nav>
        <div>
            <div style={{marginLeft:"80px",marginBottom:"100px"}}>
            <p style={{fontWeight:"bold",color:"white",marginBottom:"-30px",marginTop:"100px",fontSize:"20px"}}>Hey! I'm Bhuvanesh</p>    
            <h1 className="frontEnd">Front-End </h1>
            <h1 className="frontEnd1">Developer</h1>
            <p style={{fontWeight:"bold",color:"white",fontSize:"20px"}}>I'm a FrontEnd Developer, I'll help you <br />build beautiful websites users will Love!..</p>
            <a href="" path="/getin"element={<Getin/>}><button id="getin">Get touch</button></a>
            <button id="Browseprojects">Browse Projects</button>
            <img className="bhuvanimg" src="data:image/jpeg;base64,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" alt="" />
            </div>
            
        </div>
        <section1 id="aboutme">
        <div style={{marginLeft:"90px",marginTop:'100px',marginBottom:"100px",backgroundColor:"#3f3e3e"}}>
            <h1 style={{fontWeight:"bold",color:"white",fontSize:"50px"}}>About Me <span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
            <p style={{fontWeight:"bold",color:"white",fontSize:"20px",marginLeft:"10%"}}>I’m a passionate Frontend Developer with a strong focus on building clean, responsive, <br/> and user-friendly web interfaces. I enjoy turning ideas into real digital experiences using modern <br/> technologies like React, JavaScript, and Tailwind CSS. I constantly learn new tools, improve <br/>UI/UX quality, and deliver scalable solutions that create real impact. <br/>
            new challenge.</p>
            <div style={{display:"flex"}}>
            <p style={{fontWeight:"bold",marginLeft:"80px",marginTop:"20px",fontSize:"20px",color:"#bdb8b8ff",textShadow:"0 10px 20px #51dbe7"}}>My stack</p>
        <div style={{marginTop:"80px",marginLeft:"-90px",borderRadius:"20px",boxShadow:"0 20px 30px #51dbe7"}}>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(174, 231, 237, 0.2)">
            <ul style={{fontWeight:"bold",fontSize:"23px",marginTop:"20px",marginLeft:"0px",width:"300px"}}>
            <li><ImFire style={{marginRight:"20px",color:"rgba(61, 153, 163, 0.2)"}}/>Figma</li>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>VS code</li>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>Eclipse</li>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>Postgreede</li>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>Postman</li>
        </ul>
        </SpotlightCard>
            </div>
                <p style={{fontWeight:"bold",marginLeft:"150px",fontSize:"20px",color:"#bdb8b8ff",textShadow:"0 10px 20px #51dbe7"}}>My Special Tools</p>
            <div style={{marginTop:"80px",marginLeft:"-180px",borderRadius:"20px",boxShadow:"0 20px 30px #51dbe7"}}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(99, 210, 223, 0.2)">
            <ul style={{fontWeight:"bold",fontSize:"23px",marginLeft:"0px",width:"300px",paddingBottom:"30px"}}>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>React Boostrap</li>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>Material UI</li>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>Spline</li>
            <li><ImFire style={{marginRight:"20px",color:"rgba(31, 149, 162, 0.2)"}}/>React Bits</li>
            <li></li>
        </ul>
            </SpotlightCard>
            </div>
            </div>
            </div>
        </section1>
        <section2>
            <div style={{marginLeft:"80px",marginBottom:"100px",backgroundColor:"#3f3e3e"}}>
            <h1 style={{fontWeight:"bold",color:"white",fontSize:"50px"}}>Experience<span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
            <p style={{color:"rgb(148, 69, 205)",display:"flex",fontWeight:"bold",fontSize:"20px",marginBottom:"-0px"}}>Cloudlogic
            <p style={{color:"rgba(255, 255, 255, 1)",marginLeft:"180px",fontWeight:"bold",fontSize:"20px",marginTop:"-0px"}}>I have got Good Foundation about Web Designing and Development strategies on that startup.</p>
            </p>
            <p style={{color:"rgb(148, 69, 205)",display:"flex",fontWeight:"bold",fontSize:"20px"}}>NanLogical <br/> Consultancy Services
            <p style={{color:"rgba(255, 255, 255, 1)",marginLeft:"100px",fontWeight:"bold",fontSize:"20px"}}>I got a Work Experience as a Junior Web Developer on that Sector and I Gained a Real time Problem solving skills.</p>
            </p>
            <div className="grid" style={{padding:"40px",display:"flex"}}>
            <img className="item" style={{width:"360px", marginLeft:"-20px",borderRadius:"10px",height:"280px",boxShadow:"0 20px 40px rgba(143, 143, 143, 0.5)",border:"solid 20px white"}}src="https://media.licdn.com/dms/image/v2/C510BAQG-fWviRtZG4g/company-logo_200_200/company-logo_200_200/0/1631436535279/cloudlogictech_logo?e=2147483647&v=beta&t=Yo6xedYKKuaYmnm73EtwkW5aYwyS0Ju27TiVlJ5inHk" alt="" />
            <img className="item" style={{width:"420px", marginLeft:"100px",height:"320px",borderRadius:"10px",boxShadow:"0 20px 40px rgba(143, 143, 143, 0.5)"}}src="https://media.licdn.com/dms/image/v2/C4D1BAQGMgOjxw6WUUA/company-background_10000/company-background_10000/0/1583059938369?e=2147483647&v=beta&t=9xzdozoS2QdhE8NSTvEi_aDXIdlfu3KeX90ggfg7O-Q" alt="" />
            <img className="item" style={{width:"420px", marginLeft:"100px",height:"280px",borderRadius:"10px",boxShadow:"0 20px 40px rgba(143, 143, 143, 0.5)",border:"solid 20px white"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtrclW5qZ-JDyf3kjM-DI0lAFYTXP2HFazA&s" alt="" />
            </div>
            </div>
        </section2>
        <section3 id="projects" >
            <div style={{marginLeft:"80px",marginBottom:"100px",backgroundColor:"#3f3e3e"}}>
            <h1 style={{fontWeight:"bold",color:"white",fontSize:"50px"}}>Projects<span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
                <div style={{display:"flex",gap:"30px"}}>
<ElectricBorder
            color="#7df9ff"
            speed={1}
        chaos={0.5}
        thickness={3}
        style={{ borderRadius: 16}}
        >
        <div  className="electric" style={{opacity:"1",backgroundColor:"transparent"}}>
            <h1>To-Do List</h1>
            <p style={{ margin: '6px 0 0', width:"300px"}}>
                        To-Do list App works upon CRUD Operation by using Reactjs and Javascript.
            <br />
            <button style={{width:"100% ",padding:"10px",marginTop:"90px",fontWeight:"bold"}}>Get Started</button>
            </p>
        </div>
        </ElectricBorder>
        <ElectricBorder  color="#7df9ff"
            speed={1}
        chaos={0.5}
        thickness={3}
        style={{ borderRadius: 16 }}>
            <div >
            <h1>LinkedIn Login Page</h1>
            <p style={{ margin: '6px 0 0', opacity: 1, width:"300px"}}>
            I've Created a Clone of Linkedin Login Page using
            Html, CSS and Javascript with responsive Web page.
            <br />
            <button style={{width:"100% ",padding:"10px",marginTop:"90px",fontWeight:"bold"}}>Get Started</button>
            </p>
        </div>
        </ElectricBorder><ElectricBorder  color="#7df9ff"
            speed={1}
        chaos={0.5}
        thickness={3}
        style={{ borderRadius: 16 }}>
            <div >
            <h1>Shop Owner Management System</h1>
            <p style={{ margin: '6px 0 0', opacity: 1, width:"350px"}}>
            I've Created a Full stack Development Project.
            By using SpringTool,Postgreede,Postman .
            <br />
            <button style={{width:"100% ",padding:"10px",marginTop:"70px",fontWeight:"bold"}}>Get Started</button>
            </p>
        </div>
        </ElectricBorder>
    </div>
            <p style={{fontWeight:"bold",color:"white"}}> </p>
            </div>
        </section3>
        <section4 id="skills">
            <div style={{marginLeft:"80px",marginBottom:"50px",backgroundColor:"#3f3e3e"}}>
            <h1 style={{fontWeight:"bold",color:"white",fontSize:"50px"}}>Skills<span style={{color:"rgb(148, 69, 205)"}}>.</span></h1>
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