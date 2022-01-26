import Header from './Header'
import { Link } from "react-router-dom";
import tree from '../Images/SkLearnGraph.png'
import pentago from '../Images/pentagoNew.jpg'
import sliding from '../Images/fifteen.png'
import bayes from '../Images/naiveBayesSample.png'
import menu from '../Images/menu.jpg'

function Projects() {
  return (
      <main>
        <Header />
        <h2> Welcome to the Projects Page</h2>
        <div className="projectBox">

            <article className="project">
                <Link to="/project-runic">
                    <h3 className='link'>Unity / C# / CloudScript - Runic Wars: Character Collector Game</h3>
                    <img src={menu} alt="decision tree"/>
                    <p>
                        A game where you collect, power up, and fight with various characters. Developed as a side project over the summer with a
                        classmate.
                    </p>
                </Link>
            </article>

            <article className="project">
                <Link to="/project-pentago">
                    <h3 className ='link'>Java - Pentago Game Vs Artificial Intelligence</h3>
                    <img src={pentago} alt="a text form of pentago"/>
                    <p>
                        Implementation of the game Pentago playing against an Artificial Intelligence.
                    </p>
                </Link>
            </article>

            <article className="project">
                <Link to="/project-bayes">
                    <h3 className ='link'>Python - Custom Naive Bayes Classification (Spambase Dataset)</h3>
                    <img src={bayes} alt="a venn diagram"/>
                    <p>
                       Implements a custom Naive Bayes classifier then trains and tests it on the SpamBase Dataset.
                    </p>
                </Link>
            </article>
            
            <article className="project">
                <Link to="/project-sliding">
                    <h3 className ='link'>Java - Fifteen Tile Sliding Puzzle Solver (Multiple Algorithms)</h3>
                    <img src={sliding} alt="an example of a Fifteen game"/>
                    <p>
                        Uses various possible algorithms to solve Fifteen puzzles and calculate the efficiency of the algorithm.
                    </p>
                </Link>
            </article>

            <article className="project">
                <Link to="/project-decision">
                    <h3 className='link'>Python - Custom Decision Tree Classification (Titanic Dataset)</h3>
                    <img src={tree} alt="decision tree"/>
                    <p>
                        Implements a custom Decision Tree classifier then trains and tests it using the Titanic Dataset.
                    </p>
                </Link>
            </article>
            
            
        </div>
      </main>
  );
}

export default Projects;
