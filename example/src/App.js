import React from 'react'

import { Button, Text } from 'parrotui'
import 'parrotui/dist/index.css'

const App = () => {
  return (
    <div>
      <Button text='Primary Button' type='primary' />
      <Button text='Default Button' type='default' />
      <Button text='Dashed Button' type='dashed' />
      <br />
      <Button text='Text Button' type='text' />
      <Button text='Link Button' type='link' />
      <br />
      <br />
      <Text text='There are primary button, default button, dashed button, text button and link button in parrotui' />
    </div>
  )
}

export default App
