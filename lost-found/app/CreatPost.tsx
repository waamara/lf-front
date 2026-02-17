
const CreatPost = () => {
    return (
        <div className=" bg-blue-200">
            <p className=" text-2xl font-semibold " > What's he  situation ? </p>
            <div>
                <button>
                    <p>I lost Something</p>
                </button>
                <button>
                    <p>I found Something</p>
                </button>
            </div>
            <form action="">
                <label htmlFor="">Item Title</label>
                <input type="text" />
                <label htmlFor="">Description</label>
                <input type="text" />
                <label htmlFor="">Last seen Location</label>
                <input type="text" />
                <label htmlFor="">Item Title</label>
                <input type="image" />
                <input type="submit" />
            </form>
            <p>By posting , yu agree o our community guidelines .  Please do not include sensitive personal informaion .</p>
        </div>
    )
}

export default CreatPost