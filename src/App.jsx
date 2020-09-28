import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Aircraft } from './components/Aircraft'
import { DestinationsUS } from './components/DestinationsUS'
import { DestinationsEG } from './components/DestinationsEG'
import { Food } from './components/Food'
import data from './components/data.json'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to my SPA</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/fighteraircrafts">Fighter Aircrafts</Link>
              </li>
              <li>
                <Link to="/egypt">Egypt must see</Link>
              </li>
              <li>
                <Link to="/us">US must see</Link>
              </li>
              <li>
                <Link to="/food">Top non-American foods</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <div className="parent">
              <Aircraft
                title={data.aircrafts.title}
                desc={data.aircrafts.description}
                imageURL={data.aircrafts.photos[0].imageURL}
              />
              <DestinationsEG
                title={data.EgyptMustGo.title}
                desc={data.EgyptMustGo.description}
                imageURL={data.EgyptMustGo.photos[0].imageURL}
              />
              <DestinationsUS
                title={data.DestinationsUS.title}
                desc={data.DestinationsUS.description}
                imageURL={data.DestinationsUS.photos[0].imageURL}
              />
              <Food
                title={data.TopFoodList.title}
                desc={data.TopFoodList.description}
                imageURL={data.TopFoodList.photos[0].imageURL}
              />
            </div>
          </Route>
          <Route exact path="/fighteraircrafts">
            {data.aircrafts.photos.map(photo => (
              <Aircraft title={photo.title} imageURL={photo.imageURL} />
            ))}
          </Route>

          <Route exact path="/egypt">
            {data.EgyptMustGo.photos.map(photo => (
              <DestinationsEG title={photo.title} imageURL={photo.imageURL} />
            ))}
          </Route>

          <Route exact path="/us">
            {data.DestinationsUS.photos.map(photo => (
              <DestinationsUS title={photo.title} imageURL={photo.imageURL} />
            ))}
          </Route>

          <Route exact path="/food">
            {data.TopFoodList.photos.map(photo => (
              <section>
                <Food title={photo.title} imageURL={photo.imageURL} />
              </section>
            ))}
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
