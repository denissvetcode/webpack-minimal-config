import React from 'react'
import App from './App.jsx'
import {renderToString} from 'react-dom/server'

console.log(renderToString(<App/>))
