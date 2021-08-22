import React from 'react';
import logo from './logo.svg';
import profile from './assets/profile-pic.jpg';
import './App.scss';
import ReactPlayer from 'react-player';
import { HashRouter, Link, Switch, Route} from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import { BrowserRouter as Router} from "react-router-dom";


import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';


const chatClient = StreamChat.getInstance('hh25h7nc69ux');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktY2xvdWQtOCJ9.tLPqy7Cmqi3tHgp1YCskOr1iGPmuls_Wxsa-ZWWabEQ';

const streamUrl = "https://1866e1c67cf5.us-east-1.playback.live-video.net/api/video/v1/us-east-1.076756187427.channel.dxAcGso3e9GQ.m3u8"

chatClient.connectUser(
  {
    id: 'fancy-cloud-8',
    name: 'fancy-cloud-8',
    image: 'https://getstream.io/random_png/?id=fancy-cloud-8&name=fancy-cloud-8',
  },
  userToken,
);

const channel = chatClient.channel('gaming', 'yummy', {
  image: '',
  name: 'Yummy Live Chat',
});


function App() {

  return (
    <div className="App">
<div className="navbarRouter">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={""} />
      </Switch>
    </Router>
</div>
      <div className="liveWrapper">
        <div className="liveBox">
          <div className="livestream">
            <ReactPlayer 
            url={streamUrl}
            width='100%'
            height='500px'
            playing
            controls
            />
            <Description></Description>
            
          </div>
          <Chat client={chatClient} theme='gaming light'>
            <Channel channel={channel}>
              <Window>
                <VirtualizedMessageList />
                <MessageInput Input={MessageInputSmall} focus />
              </Window>
            </Channel>
          </Chat>
        </div>
      </div>
    </div>
  );
}


export default App;
