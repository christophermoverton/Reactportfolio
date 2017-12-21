import React, { Component } from 'react';
import './FirstWork.css';
import gicon from './Githubicon.png';
import licon from './Linkedinicon.png';
import Workscomponent from './Workscomponent';
import Col3Blur from './Col3ablur.png';
import KHSRA from './KHSRA_GEOLOGY_V03_100416.mp4';
import Video1 from './Video1.mp4';
import ScreenCaptureProject14 from './ScreenCaptureProject14.mp4';


class FirstWork extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }
  render() {
    //        <iframe id="frame2" src="https://my-app-13d40.firebaseapp.com/">
        
    //</iframe>
    var variant;
    if(this.props.on){
     variant = 'BgImage2';
    } else {
     variant = 'BgImage3';
    }
    if (!this.props.show){
      console.log('hit1');
      return null;
    }
    else{

      //<Workscomponent id="frame2"/> <img id={variant} src={Col3Blur} alt="None"/>
      /*        <br/><br/><br/>
    <div className="htext">
    <div > Harvest Moon Studio -  Kenneth Hahn State Park </div>
    <div className='resumeHeader2'>Video animations for Kenneth Hahn State Park Visitor's Center </div>
    <br/>
    <br/>
    <div className='resumeLine'>Project scene work</div>
    <br/><br/>
    <div className='resumeLine'>Scene 1:</div>
    <ul className='resumeLine'>
        <li >Approximately 10 seconds of video on a height topographically accurate scale model landscape with terrain colorization.</li>
        <li >Design of custom physics collision and gravity system (python).</li>
        <li > Vertically translated motion of scene objects (oil derricks) to collide with in and around park terrain with animated camera lens angle width and motion pans.</li>
        <li> Usage of accurate terrain dem heightmap data of park environs from the U.S. Geological resource website.</li>
        <li>Usage of GIS software for stitching terrain mosaics and creating terrain colorization reliefs. </li>
        <li> Animation of mesh model petroleum pipelines were also constructed alongside illustrating cross sectional diagrams of the park's geology and historical petroleum production land use.</li>
    </ul>
    <br/><br/>
    <div className='resumeLine'>Scene 2:</div>
    <ul className='resumeLine'>
        <li>Creation of an Earth planet model and with camera motion pan on a rotating Earth while zooming the camera to the city of Los Angeles region.</li>
    </ul>
    <br/><br/>
    <div className='resumeLine'>Scene 3 and 4:</div>
    <ul className='resumeLine'>
        <li>Tectonic animation and creation of model thrust fold plates for educational purposes.</li>
        <li>Creation of static and animated cross sectional textures representating the park's geology. </li>
    </ul>
    <video className="resumeVideo" width="640" height="480" controls>
        <source src={KHSRA} type="video/mp4"/>
        
    </video>
    <br/><br/>
    <div className='resumeLine' >Tools and Skills:</div>
        <ul className='resumeLine'>
        <li>Blender 3D</li>
        <li>Python and Blender python console. </li>
        <li> Key frame motion of scene camera and objects.</li>
        <li> 3D modeling and handling of materials and textures assignments (base and overlay using Cycles) and UV coordinate generation.</li>
        <li> Scene lighting and skybox generation</li>
        <li> Handling rendering parameters.</li>
        <li> Scripting batch key frame animations and motion physics of scene objects expediting animation work especially important for minor scene changes.</li>  
        <li>Cloud rendering solutions.</li>
        <li>Team collaboration with video editor/project manager providing resource assets and communications for scene generation.</li>
        <li>Research for scene assets inclusions.</li>
    </ul>
    <br/><br/>
    <div className='resumeHeader' > Harvest Moon Studio -  App for Don Knabe Exhibit </div>
    <div className='resumeHeader2' >Don Knabe, Manger for the City of Los Angeles.  City Hall exhibit in honor of Don Knabe's service. </div>
    <ul className='resumeLine' > 
        <li>Team management collaboration through Git, Github, and Google Groups.</li>
        <li>Planning, Testing and Developing app.   </li>
        <li>Software development using Visual Studio 2015 and C#.NET</li>
        <li>Mixed front end media integrations: images, animations (i.e. image sequencing), video, animated screen transitions.</li>
        <li>Model View Controller software design used for Windows Presentation Foundation development.</li>
        <li>Project highlights include: custom randomized animated tile sliding sequencing with page selection handling on imaged tiles.  Custom randomized image photo gallery using Mondrian based subdivision processes for randomized gallery layouts.  Implementing touch delta transformation of the images for a touch foil based system with custom collision handling on image objects.</li>
    </ul>
        <video className="resumeVideo" width="640" height="480" controls>
        <source src="ScreenCaptureProject14.mp4" type="video/mp4"/>
    </video>
    <br/><br/>
    <div className='resumeHeader' > Harvest Moon Studio -  Channel Islands National Park and National Marine Sanctuary iOS App </div>
    <div className='resumeHeader2' >National Park Service and National Oceanic and Atmospheric Administration app </div>
    <ul className='resumeLine' > 
        <li>Team management collaboration through Git, Github, and Google Groups.</li>
        <li>Planning, Testing and Developing collaboratively the Park app.</li>
        <li>Software development using XCode and Swift.</li>
        <li>App developed for use on various tablet hardware (i.e., iPad Air/Air2, Retina, iPad Pro 12"). </li>
        <li>Mixed front end media integrations: images, animations (i.e. batch image sequenced files), video, animated screen transitions.</li>
        <li>Model View Controller software design used for iOS app development.</li>
    </ul>

    <video className="resumeVideo" width="640" height="480" controls>
        <source src="./Video1.mp4" type="video/mp4"/>
    </video>
    <br/><br/> */
    return (
        <div>
        <img id={variant} src={Col3Blur} alt="None"/>
        <Workscomponent id="frame2"/> 
          <div id="t3"> 
          <div > Harvest Moon Studio -  Kenneth Hahn State Park </div>
    <div className='resumeHeader2'>Video animations for Kenneth Hahn State Park Visitor's Center </div>
    <br/>
    <br/>
    <div className='resumeLine'>Project scene work</div>
    <br/>
    <div className='resumeLine'>Scene 1:</div>
    <ul className='resumeLine'>
        <li >Approximately 10 seconds of video on a height topographically accurate scale model landscape with terrain colorization.</li>
        <li >Design of custom physics collision and gravity system (python).</li>
        <li > Vertically translated motion of scene objects (oil derricks) to collide with in and around park terrain with animated camera lens angle width and motion pans.</li>
        <li> Usage of accurate terrain dem heightmap data of park environs from the U.S. Geological resource website.</li>
        <li>Usage of GIS software for stitching terrain mosaics and creating terrain colorization reliefs. </li>
        <li> Animation of mesh model petroleum pipelines were also constructed alongside illustrating cross sectional diagrams of the park's geology and historical petroleum production land use.</li>
    </ul>
    <br/>
    <div className='resumeLine'>Scene 2:</div>
    <ul className='resumeLine'>
        <li>Creation of an Earth planet model and with camera motion pan on a rotating Earth while zooming the camera to the city of Los Angeles region.</li>
    </ul>
    <br/>
    <div className='resumeLine'>Scene 3 and 4:</div>
    <ul className='resumeLine'>
        <li>Tectonic animation and creation of model thrust fold plates for educational purposes.</li>
        <li>Creation of static and animated cross sectional textures representating the park's geology. </li>
    </ul>
    <video className="resumeVideo"  controls>
        <source src={KHSRA} type="video/mp4"/>
        
    </video>
    <br/><br/>
    <div className='resumeLine' >Tools and Skills:</div>
        <ul className='resumeLine'>
        <li>Blender 3D</li>
        <li>Python and Blender python console. </li>
        <li> Key frame motion of scene camera and objects.</li>
        <li> 3D modeling and handling of materials and textures assignments (base and overlay using Cycles) and UV coordinate generation.</li>
        <li> Scene lighting and skybox generation</li>
        <li> Handling rendering parameters.</li>
        <li> Scripting batch key frame animations and motion physics of scene objects expediting animation work especially important for minor scene changes.</li>  
        <li>Cloud rendering solutions.</li>
        <li>Team collaboration with video editor/project manager providing resource assets and communications for scene generation.</li>
        <li>Research for scene assets inclusions.</li>
    </ul>
    <br/>
    <div className='resumeHeader' > Harvest Moon Studio -  App for Don Knabe Exhibit </div>
    <div className='resumeHeader2' >Don Knabe, Manger for the City of Los Angeles.  City Hall exhibit in honor of Don Knabe's service. </div>
    <ul className='resumeLine' > 
        <li>Team management collaboration through Git, Github, and Google Groups.</li>
        <li>Planning, Testing and Developing app.   </li>
        <li>Software development using Visual Studio 2015 and C#.NET</li>
        <li>Mixed front end media integrations: images, animations (i.e. image sequencing), video, animated screen transitions.</li>
        <li>Model View Controller software design used for Windows Presentation Foundation development.</li>
        <li>Project highlights include: custom randomized animated tile sliding sequencing with page selection handling on imaged tiles.  Custom randomized image photo gallery using Mondrian based subdivision processes for randomized gallery layouts.  Implementing touch delta transformation of the images for a touch foil based system with custom collision handling on image objects.</li>
    </ul>
        <video className="resumeVideo" controls>
        <source src={ScreenCaptureProject14} type="video/mp4"/>
    </video>
    <br/><br/>
    <div className='resumeHeader' > Harvest Moon Studio -  Channel Islands National Park and National Marine Sanctuary iOS App </div>
    <div className='resumeHeader2' >National Park Service and National Oceanic and Atmospheric Administration app </div>
    <ul className='resumeLine' > 
        <li>Team management collaboration through Git, Github, and Google Groups.</li>
        <li>Planning, Testing and Developing collaboratively the Park app.</li>
        <li>Software development using XCode and Swift.</li>
        <li>App developed for use on various tablet hardware (i.e., iPad Air/Air2, Retina, iPad Pro 12"). </li>
        <li>Mixed front end media integrations: images, animations (i.e. batch image sequenced files), video, animated screen transitions.</li>
        <li>Model View Controller software design used for iOS app development.</li>
    </ul>

    <video className="resumeVideo" controls>
        <source src={Video1} type="video/mp4"/>
    </video>
    <br/><br/>
          </div>
        </div>
      );
    }
  }
}

export default FirstWork;