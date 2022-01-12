import Header from './Header'


function Contact() {
  return (
      <main>
        <Header />
        <h1 className='temp'>Contact Information</h1>
        <div className='contactBox'>
          <div>
            <p>Name:</p>
            <p>Email:</p>
            <p>Phone:</p>
            <p>Linked-In:</p>
          </div>
          <div>
            <p>Keagan Anderson</p>
            <p>keagan39@yahoo.com</p>
            <p>(253)-310-7570</p>
            <p><a href='https://www.linkedin.com/in/keagan-anderson-093670194'>https://www.linkedin.com/in/keagan-anderson-093670194</a></p>
          </div>
        </div>
      </main>
                /* <div className="projectHolder">
          <span className="project">
            <h3>Runic Wars</h3>
            <img src="https://www.gannett-cdn.com/presto/2019/06/24/USAT/ccb69e45-b78b-46c1-b5c0-c01369b56814-16X9.png?crop=1279,719,x0,y0&width=1278&height=719&format=pjpg&auto=webp"></img>
          </span>
          <span className="project">
            <h3>Decision Tree</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiO4lw3FYovFyQhMcVZ8nXaUaoRGhUZvx81w&usqp=CAU" alt="Girl in a jacket"></img>
          </span>
        </div> */
  );
}

export default Contact;
