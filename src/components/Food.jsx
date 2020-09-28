import React, { Component } from 'react'
import data from './data.json'

export class Food extends Component {
  render() {
    return (
      <>
        <article>
          <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <img src={this.props.imageURL}></img>
          </div>
        </article>
      </>
    )
  }
}
