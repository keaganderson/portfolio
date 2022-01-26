import { Link } from "react-router-dom";
import back from '../Images/backButton.png'
import sliding from '../Images/fifteenSolutions.jpg'



function Sliding() {
  return (
      <main>
        <Link to='/projects'>
            <div className='backButton'>
                <img src={back} alt="back button"/>
            </div>
        </Link>
        <div className='singleProject'>
            <h2>Fifteen Sliding Game Solver</h2>
            <p><b>Source:</b> <a href='https://github.com/keaganderson/fifteenProblem'>https://github.com/keaganderson/fifteenProblem</a></p>
            <p>
                <b>Description:</b> A project done for the class TCSS 435, Artificial Intelligence and Knowledge Acquisition. It takes a fifteen 
                problem and an algorithm and uses the algorithm to solve the fifteen problem and calculate how effectively the algorithm did it.
                It will also return and tell you if the puzzle is unsolvable. Possible algorithms to use are Breadth First Search, Depth First Search,
                Greedy Breadth First Search (with choice of two heuristics), Depth Limited Search (with a given limited depth), and AStar (with choice
                of two heuristics). The program then prints the amount of steps the algorithm found needed to solve the problem, the total puzzles needed
                explored, the total puzzle states fully expanded, and the max solutions that were on the stack at a time.
            
            </p>
            <img className='pentagoImg' src={sliding} alt="a text form of pentago" />
        </div>
      </main>
  )};

export default Sliding;