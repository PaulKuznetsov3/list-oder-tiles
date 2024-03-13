import './style.css'

const Header = ({ handleFormat }) => {

  return (
    <div className="header">
        <button className='button' onClick={() => handleFormat('list')}>
            list
        </button>
        <button className='button' onClick={() => handleFormat('tile')}>
            tile
        </button>
    </div>
  );
}

export default Header;