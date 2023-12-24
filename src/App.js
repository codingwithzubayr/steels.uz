import React, { Component } from 'react';
import './App.css';
import Configs from './configurations.json';
import Typist from 'react-typist';
import ParticlesBg from 'particles-bg';
import logoImage from '../src/logo.jpg'
import instagram from '../src/instagram.svg'
import telegram from '../src/telegram.svg'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        'day',
        'terminal',
        'torquoise',
        'alizarin',
        'amythyst',
        'carrot',
        'peterriver'
      ],
      lightBackgroundModes: [
        'night',
        'lightred',
        'lightpurple',
        'lightgreen',
        'lightblue',
        'lightyellow'
      ],
      backgroundType: Configs.backgroundType || 'plain',
      appClass: Configs.plainBackgroundMode || 'daylight',
      devIntro: Configs.devIntro || 'Lorem Ipsum',
      devDesc:
        Configs.devDesc ||
        'Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.',
      backgroundMode: 'default',
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || []
    };
  }

  componentWillMount = () => {
    
  };

  render() {
    const {
      appClass, bgStyle, backgroundMode, devIntro, devDesc, icons
    } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div
          className={backgroundMode}
        >
          <main className="App-main">
            <ParticlesBg type="thick" bg={true} />
            <div className="container">
            <img
              className="logo"
              src={logoImage}
              alt="Logo"
            />
              <div className="shell"><Typist>Welcome to steels.uz</Typist></div>
              <p className="text">По поводу заказa {' '}
                 <a className='admin_text' href='https://t.me/steelsadmin'>
                 @steelsadmin
                 </a>{' '}
                 предоплата 30-50%
                 возврат не существует 
                 все качественно
              </p>              
              <div className="icons-social">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://t.me/steels_uz'
                    className='social_link'
                  >
                    <img src={telegram}/>
                    <p className='social_text'>Telegram Account</p>

                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.instagram.com/steels.uz/'
                    className='social_link instagram'
                  >
                    <img src={instagram}/>
                    <p className='social_text'>Instagram Account</p>
                  </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
