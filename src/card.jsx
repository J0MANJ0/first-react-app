import './App.css';
export default function Card() {
    return (
        <div>
            <div className='container'>
                <div className='image'>
                    <h2>NETFLIX</h2>
                    <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" alt="TBD" width={180} />
                </div>
                <div className='description'>
                    <span><a href="https://www.netflix.com/" target='blank'>Netflix</a> is a streaming service that offers a wide variety of <br></br> award-winning TV shows, movies, anime, documentaries, <br></br> and more on thousands of internet-connected devices.</span>
                    <br />
                    <br />
                    <br />
                    <span>Kindly submit your details for <br />any inquiries and subscriptions</span>

                </div>


            </div>

        </div>
    )
}