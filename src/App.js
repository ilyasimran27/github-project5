import React from 'react';
import logo from './images/logo.png';
import sixth from './images/sixth.svg';

import nine from './images/nine.png';
import bc from './images/bc.jpg';
import NavBar from './components/NavBar.jsx';
import Form from './components/Form.jsx';
import './App.css';
import { brotliCompress } from 'zlib';
import FirstContent from './components/FirstContent.jsx';
import Second from './components/Second.jsx';
import Enterprice from './components/Seventh/Enterprice.jsx';
import Develop from './components/Eleven/Develop.jsx'
import './header.css';


function App() {
  return (
    <div className="header">
      <NavBar></NavBar>
      <div className="first">
        <FirstContent></FirstContent>
        <Form></Form>

      </div>
      <Second></Second>
      <section className="third">
        <div class="third-content">
          <h3>Introducing GitHub Actions with CI/CD</h3>
          <p>Take collaboration to the next level with security and administrative features built for businesses.</p>
          <button>Check it out</button>
        </div>
      </section>
      <section className="fourth">
        <div className="fourth-content">
          <p>More than 2.1 million businesses and organizations use GitHub</p>
          <ul>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/airbnb-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/sap-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/ibm-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/google-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/paypal-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/bloomberg-logo.png"></img></li>

            <li><img src="https://github.githubassets.com/images/modules/site/logos/spotify-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/swift-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/facebook-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/node-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/nasa-logo.png"></img></li>
            <li><img src="https://github.githubassets.com/images/modules/site/logos/walmart-logo.png"></img></li>
          </ul>
        </div>

      </section>
      <section className="fifth">
        <label>github for teams</label>
        <h1>A better way to work together</h1>
        <p>GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.</p>
        <button>Sign Up your team</button>

      </section>
      <section className="sixth">
        <div className="picture">
          <img src={sixth}></img>
        </div>
        <div className="sixth-content">
          <div className="h1-p">
            <h3>Write better code</h3>
            <p>Collaboration makes perfect. The conversations and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build. </p>

          </div>
          <div className="h1-p">
            <h3>Manage your chaos</h3>
            <p>Collaboration makes perfect. The conversations and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build. </p>

          </div>
          <div className="h1-p">
            <h3>Find the right tools</h3>
            <p>Collaboration makes perfect. The conversations and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build. </p>

          </div>
        </div>

      </section>
      <Enterprice></Enterprice>

      <section className="eight">
        <label>Security and administration</label>
        <h1>Your business needs, met</h1>
        <p>From flexible hosting to granular access controls, we’ve got your security requirements covered.</p>
        <button>Learn how GitHub Enterprise works </button>

      </section>
      <section className="nine">

        <div className="nine-content">
          <div className="h1-p">
            <h3>Code security</h3>
            <p>Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code. </p>

          </div>
          <div className="h1-p">
            <h3>Access controlled</h3>
            <p>Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP. </p>

          </div>

        </div>
        <div className="picture">
          <img src={nine}></img>
        </div>

      </section>
      <section className="eight">
        <label>Integrations</label>
        <h1>Build on GitHub</h1>
        <p>Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.</p>
        <button>Learn about integrations  </button>

      </section>
      <section className="ten">
        <div class="eight">
          <label>Community</label>
          <h1>Welcome home,developers</h1>
          <p>GitHub is home to the world’s largest community of developers and their projects...</p>

        </div>
        <Develop></Develop>

      </section>
      <section className="eleven">
        <p className="eleven-content">
          Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.
      </p>
        <div className="elements">

          <div class="elements-content">
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div class="elements-content">
            <label>email</label>
            <input type="email"></input>
          </div>
          <div class="elements-content">
            <label>password</label>
            <input type="password"></input>
          </div>

          <button>Sign up for guthub</button>
        </div>
        <p>By clicking “Sign up for GitHub”, you agree to our terms of service and privacy statement. We’ll occasionally send you account related emails.</p>
      </section>
      <section className="twelve">
        <h1>GitHub</h1>
        <div className="twe-content">
          <ul>
            <li>product</li>
            <li>feature</li>
            <li>security</li>
            <li>Enterprise</li>
            <li>Customer stories</li>
          </ul>
          <ul>
            <li>Platform</li>
            <li>Developer API</li>
            <li>Partners</li>
            <li>Atom</li>
            <li>electron</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>help</li>
            <li>community</li>
            <li>Training</li>
            <li>status</li>
          </ul>
          <ul>
            <li>company</li>
            <li>about</li>
            <li>blog</li>
            <li>career</li>
            <li>press</li>
          </ul>
        </div>
      </section>
    </div>

  );
}

export default App;
