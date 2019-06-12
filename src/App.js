import React, { Component } from 'react';

import InputBox from './Components/InputBox';
import List from './Components/List'

// import {action} from './actions/action'

class App extends Component {

    render() {
        return (
            <div>
              <InputBox
              />
              <List
              />
            </div>
        )
    }
}

export default App
