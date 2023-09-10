import Buttons from "./content/Buttons"

function Header() {
  return (
    <header className="bg-white shadow-drop-2">
      <div className="container m-auto flex items-center justify-between">
        <Buttons/>
      </div>
    </header>
  )
}

export default Header