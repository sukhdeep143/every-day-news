import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
      let {title, describe, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{describe}...</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primar bg-dark text-white" rel="noreferrer">Read mode</a>
            </div>
            
        </div>
      </div>
    )
  }
}

export default NewsItem
