import React from 'react'
import Navbar from '../navbar/Navbar'
/* import axios from axios; */
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
	const[news,setNews]=useState('headlines');
	const [data,setData]=useState([]);

	const update=(e)=>{
		let name=e.target.outerText.toLowerCase();
		console.log(name);
		setNews(name)
		e.preventDefault();
		//window.location.reload();
		fetchData();
	}

	const axios = require('axios').default;
	const fetchData=()=>{
		if(news=="headlines"){
			 axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=0a1b405214f0415f9f377825ec615cd4")
			.then(res => {
				console.log(res.data.articles)
				setData(res.data.articles)
				console.log(data)
			})
		}else{
			 axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${news}&apiKey=0a1b405214f0415f9f377825ec615cd4`)
			.then(res => {
				setData(res.data.articles)
				console.log(data)
				//window.location.reload()
			})
		}	
	}
	useEffect(()=>{
		fetchData();
	})

  return (
    <>
        <div className="home">
            <Navbar/>
            <div className="news-title">
				<ul className='news-list'>
					<li onClick={(e)=>update(e)}>HeadLines</li>
					<li onClick={(e)=>update(e)}>Sports</li>
					<li onClick={(e)=>update(e)}>Business</li>
					<li onClick={(e)=>update(e)}>Technology</li>
					<li onClick={(e)=>update(e)}>Health</li>
					<li onClick={(e)=>update(e)}>Science</li>
					<li onClick={(e)=>update(e)}>Entertainment</li>
				</ul>
     		</div>

			 <div className="content">
				 <div className="cards">
					{data.map((item) => (
						<div key={item.title} className="card">
							
							<div className="img">
								<img src={item.urlToImage} alt="No Image" />
							</div>
							<div className="card-content">
								<div className="title">
									<h2>{item.title}</h2>
								</div>
								<div className="content">
									<h3>{item.content}</h3>
								</div>
								<div className="more">
									<a href={item.url} target="_blank">Read More</a>
								</div>
							</div>
						</div>
						
					))}
				 </div>
			 </div>
        </div>
    </>
  )
}

export default Home