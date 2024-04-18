import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  Articles = [
 
  
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "MICHAEL R. SISAK, ERIC TUCKER",
        "title": "How a hush money scandal tied to a porn star led to Trump's first criminal trial - The Associated Press",
        "description": "On the eve of the 2016 presidential election, a story came out that Donald Trump feared would cost him votes. A porn actor was claiming that she had had sex with Trump years earlier. Prosecutors say Trump arranged to pay actor Stormy Daniels to keep quiet. No…",
        "url": "https://apnews.com/article/donald-trump-michael-cohen-stormy-daniels-e40532d3bce7768e296fdaf9591ef05b",
        "urlToImage": "https://dims.apnews.com/dims4/default/d039f47/2147483647/strip/true/crop/2000x1125+0+105/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F99%2Fe9%2Fd15a3b380c9e451f4541932f3f18%2F6bbac647cf8e4be5b65e28196d65ba53",
        "publishedAt": "2024-04-13T12:05:00Z",
        "content": "NEW YORK (AP) It was the kind of tawdry tale that Donald Trump might have relished before politics: a porn actor claiming they had had sex.\r\nBut on the eve of the 2016 presidential election, Trump fe… [+7600 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fox Business"
        },
        "author": "Emily Trainham, Janelle Ash",
        "title": "'Golden Bachelor' stars Gerry Turner and Theresa Nist could lose out on big payday because of divorce: experts - Fox Business",
        "description": "Gerry Turner and Theresa Nist found love on \"The Golden Bachelor,\" but now that they're divorcing, they stand to lose out on a fortune, experts explain to Fox News Digital.",
        "url": "https://www.foxbusiness.com/entertainment/golden-bachelor-stars-gerry-turner-theresa-nist-could-lose-big-payday-because-divorce",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/04/0/0/theresa-nist-gerry-turner2.jpg?ve=1&tl=1",
        "publishedAt": "2024-04-13T12:00:00Z",
        "content": "In filing for divorce, \"Golden Bachelor\" couple Gerry Turner and Theresa Nist are not only losing out on love, but also a lucrative business venture.\r\nTurner won the title of the first \"Golden Bachel… [+7174 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Brent D. Griffiths",
        "title": "Kamala Harris leads Biden's charge on abortion rights - Business Insider",
        "description": "The vice president teed off on Donald Trump during a rally in the critical state of Arizona.",
        "url": "https://www.businessinsider.com/kamala-harris-trump-biden-abortion-rights-roe-arizona-ruling-2024-4",
        "urlToImage": "https://i.insider.com/66197c2d16bde8d4ead87fa5?width=1200&format=jpeg",
        "publishedAt": "2024-04-13T11:49:00Z",
        "content": "Vice President Kamala Harris is making sure abortion rights stay at the forefront of the 2024 campaign.\r\nHarris repeatedly tore into former President Donald Trump during a Friday evening campaign app… [+4504 chars]"
    },
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Maziar Motamedi",
        "title": "Iran’s IRGC seizes ‘Israeli-linked’ ship near Strait of Hormuz - Al Jazeera English",
        "description": "IRGC forces conducted an operation via helicopter to take control of the commercial vessel, state media reports.",
        "url": "https://www.aljazeera.com/news/2024/4/13/irans-irgc-seizes-israeli-linked-ship-near-strait-of-hormuz",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/04/AP24104339126398-1713008084.jpg?resize=1200%2C675",
        "publishedAt": "2024-04-13T11:35:44Z",
        "content": "Tehran, Iran Iranian armed forces have seized a container ship near the Strait of Hormuz amid rising tensions across the region after a deadly Israeli attack on Irans consulate in Syria.\r\nThe ship wa… [+3711 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Jeff Cox",
        "title": "Surging inflation fears sent markets tumbling and Fed officials scrambling - CNBC",
        "description": "The early data is in for the path of inflation during the first three months of 2024, and the news so far is not good.",
        "url": "https://www.cnbc.com/2024/04/13/surging-inflation-fears-sent-markets-tumbling-and-fed-officials-scrambling.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107400201-1712873066466-gettyimages-2148324040-rent402979_qlj2b5su.jpeg?v=1712873254&w=1920&h=1080",
        "publishedAt": "2024-04-13T11:23:16Z",
        "content": "A sign advertising units for rent is displayed outside of a Manhattan building on April 11, 2024 in New York City.\r\nThe early data is in for the path of inflation during the first three months of 202… [+7490 chars]"
    },
   
]
  constructor(){
    super();
    console.log("Hello constructor");
    this.state = {
      Articles: this.Articles,
      loding: false
    }
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/everything?q=apple&from=2024-04-16&to=2024-04-16&sortBy=popularity&apiKey=aaffe24e0f0d400dbd1ceb3c8e567412'
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({Articles: parsedData.articles    })
  }
  
  nextButton = ()=>{
    console.log("Nextbtn");
  }
  
  prevButton= ()=>{
    console.log("previous");
  }
  
  
  render() {
    return (
      <div className='container my-3 '>
        <h1 className='py-2'> Whole world News </h1>  
            <div className="row ">
              {this.state.Articles.map((element)=>{
                return   <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem title={element.title} describe={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              }) }
          
        </div>
        <div className="d-flex justify-content-between ">
          <button type="button" onClick={this.prevbtn} className="btn btn-dark mr-2  ">&larr; Previous</button>
          <button type="button" onClick={this.nextButton} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
