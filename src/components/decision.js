import { Link } from "react-router-dom";
import back from '../Images/backButton.png'
import tree from '../Images/tempGraph.png'



function Decision() {
  return (
      <main>
        <Link to='/projects'>
            <div className='backButton'>
                <img src={back} alt="back button"/>
            </div>
        </Link>
        <div className='singleProject'>
            <h2>The Custom Decision Tree Algorithm</h2>
            <p><b>Source:</b> <a href='https://github.com/keaganderson/decision_tree'>https://github.com/keaganderson/decision_tree</a></p>
            <p><b>Description:</b> A project done for the class TCSS 455, Intro to Machine Learning. This is a decision tree classification made from scratch that can be used to classify
            data by contructing a decision tree out of the categories. To test it, it uses the Titanic Dataset to create a machine learning classification on the probability of survival given the attributes
            of the person. There is also a decision tree made with the SKLearn library for comparison. </p>
            <img className='decisionImg' src={tree} alt="decision tree" />
        </div>
      </main>
  )};

export default Decision;