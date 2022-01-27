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
            <p><b>Description:</b> A project done for the class TCSS 455, Intro to Machine Learning. This program takes in the Titanic Dataset, splits it into
            test and train datasets, and constructs a custom Decision Tree machine learning classifier for the data categories out of the train dataset.
             It then tests this classifier, on the test dataset calculating the probability of survival of the test people given the attributes
            of the person. It then compares these calculations to the actual results. Then a decision tree made with the SKLearn library is implemented for comparison. </p>
            <img className='decisionImg' src={tree} alt="decision tree" />
        </div>
      </main>
  )};

export default Decision;