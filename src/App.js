import './App.css';
import Toshies from './Toooth';
import Meme from './Meme';


export default function App() {
  return(
    <div className='whole'>
      <h2>THE TOSHIES NFT</h2>
      <div className='main-b'>
        <section>
          <img src="/images/toooth1.jpg" alt="Toshies Art" />
          <img src="/images/toooth3.png" alt="Toshies Art" />
        </section>
        <section>
          <img src="/images/toooth3.png" alt="Toshies Art" />
          <img src="/images/toooth.png" alt="Toshies Art" />
        </section>
      </div>
      <div className='main-a'>
        <h3>About the project</h3>
        <div>
          <div className='tag'>
            <p>Supply:</p>
            <h4>5469</h4>
          </div>
          <div className='tag'>
            <p>Mint price:</p>
            <h4>0.0369E</h4>
          </div>
          <div className='tag'>
            <p>Blockchain:</p>
            <h4>Ethereum</h4>
          </div>
          <div className='tag'>
            <p>Mint date:</p>
            <h4>January 24, 2023</h4>
          </div>
        </div>
        <div className='btn'>
          <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/toshies/drop">Opensea</a>
          <a target="_blank" rel="noreferrer" href="https://toshies.xyz/">Website</a>
          <a target="_blank" rel="noreferrer" href="https://discord.com/invite/toshies">Discord</a>
        </div>
        <p>
        </p>
      </div>
      <div className='abt'>
        <h3>About the founder</h3>
        <p>Chuckchee is a skilled pixel artist<br />
          with 
          over 15 years of experience<br /> in the industry. 
          He started drawing<br />
          at the young age of 5 and fell
          in <br />love with pixel art later on, using it<br /> as a way to  
          express himself. <br />Chuckchee is known for his diverse,<br />
          humorous, and inclusive art style,<br /> as well as his 
          pioneering work in the <br />NFT space. His art is highly valued<br />
          by major companies and has over <br />9500 unique NFT holders on
          his<br /> previous collections including <br />Alpacadabraz.
        </p>
        <div className='btn-a'>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/ToshiesByChuck">Click here to know more</a>
        </div>
      </div>
      <div className='img'></div>
      <h3 className='font'>My Fan Art</h3>
      <img className='fan-art' src="/images/fanart.jpg" alt="My Toshies Fan art" />
      <div className='b-tag'>
        <a target="_blank" rel="noreferrer" className='c-tag' href="https://twitter.com/Arsenalpromax/status/1614574024796868609">View Fan Art</a>
      </div>
      <h3 className='mtm'>MY #TOOOTH MEMES</h3>
      <div className='whole-d'>
        
          <Meme 
            pixs = "images/meme-1.jpeg"
          />
          <Meme 
            pixs = "images/meme-2.jpeg"
          />
        
          <Meme 
            pixs = "images/meme-3.jpeg"
          />
          <Meme 
            pixs = "images/meme-5.jpeg"
          />
      
        {/* <a target="_blank" rel="noreferrer" className='c-tag' href="https://twitter.com/Arsenalpromax">View My Toshies Memes</a> */}
      </div>
      <div className='whole-b'>
        <Toshies />
      </div>
      <div className='main-c'>
        <h3>Meet the team</h3>
        <div className='whole-b'>
          <div>
            <Toshies 
              img = "\images\p1.jpg"
              logo ="\images\twitter_PNG.png"
              at = "Just...sand"
            />
            <Toshies 
              img = "\images\p2.jpg"
              logo ="\images\twitter_PNG.png"
              at = "Keungz"
            />
            <Toshies
              img = "\images\p3.jpg"
              logo ="\images\twitter_PNG.png"
              at = "C-Medici"
            />
          </div>
          <div>
            <Toshies 
              img = "\images\p4.jpg"
              logo ="\images\twitter_PNG.png"
              at = "Jaxthedog"
            />
            <Toshies 
              img = "\images\p5.jpg"
              logo ="\images\twitter_PNG.png"
              at = "C.De'Medici"
            />
            <Toshies 
              img = "\images\p6.jpg"
              logo ="\images\twitter_PNG.png"
              at = "Deeze"
            />
          </div>
          <div>
            <Toshies 
              img = "\images\p7.jpg"
              logo ="\images\twitter_PNG.png"
              at = "Dr.Terminus"
            />
            <Toshies 
              img = "\images\p8.jpg"
              logo ="\images\twitter_PNG.png"
              at = "Fiskantes"
            />
            <Toshies 
              img = "\images\p9.jpg"
              logo ="\images\twitter_PNG.png"
              at = "Foobar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}