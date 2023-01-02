export default function Header({ title }) {
  return (
      <>
          <h1 className="title">{title}</h1>
          <div>
            <a href={"/"}>Home</a> &nbsp;
            <a href={"/videos"}>Videos</a>
          </div>
      </>
  )
}
