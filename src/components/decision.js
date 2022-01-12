import Header from './Header'
import { Link } from "react-router-dom";
import back from '../Images/backButton.png'
import tree from '../Images/decisiontREE.png'



function Decision() {
  return (
      <main>
        <Link to='/projects'>
            <div className='backButton'>
                <img src={back}/>
            </div>
        </Link>
        <div className='singleProject'>
            <h2>The Custom Decision Tree Algorithm</h2>
            <p><b>Source:</b> <a href='http://google.com'>http://google.com</a></p>
            <p><b>Description:</b> A project done for the class TCSS 455, Intro to Machine Learning. This is a decision tree classification made from scratch that can be used to classify
            data by contructing a decision tree out of the categories. In the notebook, I then go on to test it by traversing through the created tree and compute the accuracy compared
            to the basic Sci-Learn decision tree classiciation. </p>
            <img src={tree} />
        </div>
      </main>
  )};

export default Decision;