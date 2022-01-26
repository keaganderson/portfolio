import { Link } from "react-router-dom";
import back from '../Images/backButton.png'
import pentago from '../Images/pentago.jpg'



function Pentago() {
  return (
      <main>
        <Link to='/projects'>
            <div className='backButton'>
                <img src={back} alt="back button"/>
            </div>
        </Link>
        <div className='singleProject'>
            <h2>Pentago Game Vs Artificial Intelligence</h2>
            <p><b>Source:</b> <a href='https://github.com/keaganderson/pentagoGame'>https://github.com/keaganderson/pentagoGame</a></p>
            <p><b>Description:</b> A project done for the class TCSS 435, Artificial Intelligence and Knowledge Acquisition. It implements a full
            one sided version of the board game Pentago where you play against a computer. The computer AI generates all possible future moves looking
            steps ahead and calculating the best possible move it can make. It then uses pruning techniques so it doesn't have to check every possible move.
            This means the AI is rather complex and it takes looking a few steps ahead to beat the computer at this game. </p>
            <img className='pentagoImg' src={pentago} alt="a text form of pentago" />
        </div>
      </main>
  )};

export default Pentago;