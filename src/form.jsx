import './App.css'
const Form = () => {
    return (
        <div className="form">
            <form action="https://httpbin.org/get" method="get">
                <div className='label-input'>
                    <label
                        className="label" htmlFor="name">NAME:</label>
                    <input type="text" required id="name" placeholder='Enter your name' />
                </div>
                <div className='label-input'>
                    <label className="label" htmlFor="email">EMAIL:</label>
                    <input type="email" required id="email" placeholder='Enter your Email' />
                </div>
                <div className='submit'>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Form;