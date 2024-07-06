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
              My name is Keagan Anderson. I am an experienced Software Developer with a great passion for programming and problem solving. I graduated from the University of Washington with
              a Bachelor's Degree in Computer Science and Systems in 2021. During this time I have completed numerous projects, both for classes and on the side following my interests or curiosities.
              I collected the bigger ones here to better organize and display them. After that, I joined Amazon's Halo Health Tech team until 2023 and worked to develop and maintain the Sleep Tracker for the Halo Band
              and the Halo Rise. After which I moved to Lockheed Martin on the Signature Integration team where I am currently working on creating web based internal tools for thousands of people to use daily
              in order to track tasks and schedules.
            </p>
            <h3>Experience</h3>
            <p><b>May 2022 - June 2023:</b> Amazon</p>
            <p><b>November 2023 - Present:</b> Lockheed Martin</p>
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
