import Post from "../app/CreatPost"

export default function Home() {
  return (
    <div className="">
      <p> What's he  situation ? </p>
      <div>
        <button>
          <img src="" alt="" />
          <p>I lost Something</p>
        </button>
        <button>
          <img src="" alt="" />
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
      
    </div>
  );
}
