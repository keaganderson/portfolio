import Header from './Header'


function Home() {
  return (
    <main>
        <Header />
        <h2>Welcome to my Portfolio</h2>
        <div className='homePage'>
          <h3>This is a collection of projects for easier display and presentation. Please use the Navigation Bar at the top to browse the various pages</h3>
          <p><b>Home:</b> Default page used as a hub for the other pages</p>
          <p><b>About Me:</b> Short bio so you can get to know a little about me and who I am</p>
          <p><b>Projects:</b> Collection of projects and their descriptions</p>
          <p><b>Contact:</b> My contact information if you want to get in touch.</p>
          
        </div>
    </main>
  );
}

export default Home;
