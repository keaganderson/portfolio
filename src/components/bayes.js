import { Link } from "react-router-dom";
import back from '../Images/backButton.png'
import matrix from '../Images/matrix.JPG'



function Bayes() {
  return (
      <main>
        <Link to='/projects'>
            <div className='backButton'>
                <img src={back} alt="back button"/>
            </div>
        </Link>
        <div className='singleProject'>
            <h2>Custom Naive Bayes Classifier</h2>
            <p><b>Source:</b> <a href='https://github.com/keaganderson/naiveBayes'>https://github.com/keaganderson/naiveBayes</a></p>
            <p>
                <b>Description:</b> A project done for the class TCSS 455, Intro to Machine Learning. This is a Naive Bayes classification made from 
                scratch that can be used to classify data. It does this by waiting until a query has been made (a lazy classification) then running 
                an algorithm that calculates the percentage needed. To test it, it uses the Spambase Dataset to create a machine learning classification 
                on the probability of text being spam depending on its contents. The effectiveness of the classifier is calculated with a Confusion
                Matrix and an Auc Roc Plot. Then a Naive Bayes implementation is created from the SKLearn library to compare.
            
            </p>
            <img className='pentagoImg' src={matrix} alt="a confusion matrix" />
        </div>
      </main>
  )};

export default Bayes;