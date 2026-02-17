
const CreatPost = () => {
    return (
        <div className=" bg-blue-300 p-8 rounded-xl h-screen   m-4">
            <p className=" text-2xl font-semibold m " > What's the  situation ? </p>
            <div className="flex-row p-4 flex-between items-center ">
                <button>
                    <p>I lost Something</p>
                </button>
                <button>
                    <p>I found Something</p>
                </button>
            </div>
            <form action="" className="">
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Title</label>
                    <input type="text" className=" h-10 w-full mt-2  bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Description</label>
                    <input type="text" className=" h-10 w-full mt-2 bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Title</label>
                    <input type="text" className=" h-10 w-full mt-2 bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Location</label>
                    <input type="text" className=" h-10 w-full mt-2  bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div className="m-12     ">
                    <button className=" bg-blue-500 h-12 rounded-xl w-64   "> Post My Item</button>
                </div>

            </form>
            <p className="text-gray-500 text-center">By posting , you agree to our community <br /> guidelines .  Please do not include sensitive <br /> personal informaion .</p>
        </div>
    )
}

export default CreatPost