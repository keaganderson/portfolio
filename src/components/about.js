import Header from './Header'
import Self from '../Images/portrait.jpg'



function About() {
  return (
      <main>
        <Header />
        <h2>About Me</h2>
        <div className='aboutBox'>
          <div className='tempCollect'>
            <h3>Introduction</h3>
            <p>
              My name is Keagan Anderson. I am a recent University graduate with a great passion for programming and problem solving. I graduated from the University of Washington with
              a Bachelor's Degree in Computer Science and Systems. During this time I have completed numerous projects, both for classes and on the side following my interests or curiosities.
              I collected the bigger ones here to better organize and display them.
            </p>
            <h3>Education</h3>
            <p><b>Degree:</b> Bachelor's</p>
            <p><b>Major:</b> Computer Science and Systems</p>
            <p><b>GPA:</b> 3.39</p>
            <p><b>Major Only GPA:</b> 3.56</p>
          </div>
          <img src={Self} alt="A self portrait of myself"/>
        </div>
      </main>
  );
}

export default About;
