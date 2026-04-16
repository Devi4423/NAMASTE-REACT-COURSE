const Contact = () => {
    return(
        <div>
            <h1 className="font-bold py-5 px-6 text-3xl">Contact Us </h1>
            <form>
                <input type="text" name="email" placeholder="Enter email" className="border-2 px-4 py-2 m-4"/>
                <input type="text" name="password" placeholder="Enter Password" className="border-2 px-4 py-2"/>
                <button type="submit" className="bg-gray-200 px-4 py-2 m-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;