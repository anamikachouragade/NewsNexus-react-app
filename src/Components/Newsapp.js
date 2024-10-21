import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,10)
        setNewsData(dt)
        
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">NewsNexus</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex", gap: "11px" }}>
            
          </ul>
          <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); getData(); }}>
            <input
              classNames="form-control me-2"
              type="search"
              placeholder="Search News"
              value={search}
              onChange={handleInput}
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

        
        <div >
           <figure className="text-center" >
             <blockquote className="blockquote">
               <p className="head">"The more you know, the more you grow. Stay curious, stay informed."</p>
             </blockquote>
             <figcaption className="blockquote-footer">
               <cite className="head1" title="Source Title">Anonymous</cite>
             </figcaption>
           </figure>
        </div>

        



        <div className='categoryBtn'>
            
            <button onClick={userInput} value="sports" class="btn btn-primary">Sports</button>
            <button onClick={userInput} value="politics" class="btn btn-secondary">Politics</button>
            <button onClick={userInput} value="entertainment" class="btn btn-success">Entertainment</button>
            <button onClick={userInput} value="health" class="btn btn-warning">Health</button>
            <button onClick={userInput} value="fitness" class="btn btn-info">Fitness</button>
            <button onClick={userInput} value="technology" class="btn btn-danger">Technology</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>

        <footer class="bd-footer py-5 mt-5 bg-light">
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img"><title>NewsNexus</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
          <span class="fs-5">NewsNexus</span>
        </a>
        <ul class="list-unstyled small text-muted">
          <li class="mb-2">Bringing you the top news from business, sports, politics, and more, curated by our team.</li>
          <li class="mb-2">Daily quizzes, notes, and instant word definitions.</li>
          <li class="mb-2">AI-powered insights.</li>
          <li class="mb-2">© 2024 NewsNexus Team. All rights reserved.</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Sections</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/business" class="link-style">Business</a></li>
          <li class="mb-2"><a href="/sports" class="link-style">Sports</a></li>
          <li class="mb-2"><a href="/politics" class="link-style">Politics</a></li>
          <li class="mb-2"><a href="/technology" class="link-style">Technology</a></li>
          <li class="mb-2"><a href="/entertainment" class="link-style">Entertainment</a></li>
        </ul>
      </div>
      
      <div class="col-6 col-lg-2 mb-3">
        <h5>Tools</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/quiz" class="link-style">Daily Quiz</a></li>
          <li class="mb-2"><a href="/dictionary" class="link-style">Dictionary</a></li>
          <li class="mb-2"><a href="/notes" class="link-style">Notes</a></li>
          <li class="mb-2"><a href="/saved-articles" class="link-style">Saved Articles</a></li>
        </ul>
      </div>
      
      <div class="col-6 col-lg-2 mb-3">
        <h5>Resources</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/about" class="link-style">About Us</a></li>
          <li class="mb-2"><a href="/contact" class="link-style">Contact Us</a></li>
          <li class="mb-2"><a href="/terms" class="link-style">Terms & Conditions</a></li>
          <li class="mb-2"><a href="/privacy" class="link-style">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 mb-3">
        <h5>Community</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/discussions" class="link-style">Discussions</a></li>
          <li class="mb-2"><a href="/feedback" class="link-style">Feedback</a></li>
          <li class="mb-2"><a href="/newsletter" class="link-style">Subscribe to Newsletter</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Newsapp