import React from 'react';

const App = ({lakes}) => {return (
  <ul>
    {lakes.map(lake => <li key={lake.id}>{lake.name} | Trail Head: {lake.trailHead}</li>)}
  </ul>
)};

export default App;
