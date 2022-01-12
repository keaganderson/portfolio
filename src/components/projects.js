import Header from './Header'
import { Link } from "react-router-dom";
import tree from '../Images/decisiontREE.png'
import pig from '../Images/pig.jpg'
import lynx from '../Images/lynx.jpg'

function Projects() {
  return (
      <main>
        <Header />
        <h2> Welcome to the Projects Page</h2>
        <div className="projectBox">
            <article className="project">
                <Link to="/project-decision">
                    <h3><Link to="/project-decision"><p className='link'>Custom Decision Tree</p></Link></h3>
                    <img src={tree} alt="decision tree"/>
                    <p>The otter project was one where I taught otters to wear cute hats. Honestly I'm not quite sure what I was
                        thinking when I initiated it, but it worked so much better than expected.
                    </p>
                </Link>
            </article>
            <article className="project">
                <h3>The Piggy Cuteness Project</h3>
                <img src={pig} alt="pig"/>
                <p>
                    The pig was cute so I did it. :D
                </p>
            </article>
            <article className="project">
                <h3>This is an overly complicated and exaggerated title to test how my system can handle it. Also Lynx *heart*</h3>
                <img src={lynx} alt="lynx"/>
                <p>
                    Lynxxxxx yayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                </p>
            </article>
            <article className="project">
                <p>Project 4 Content</p>
            </article>
            
        </div>
      </main>
  );
}

export default Projects;
