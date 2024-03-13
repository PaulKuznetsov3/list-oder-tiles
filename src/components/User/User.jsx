import './style.css';

const List = ({ user }) => {

    return (
      <div className="user">
       <div>
        {user?.name}
       </div>
       <div>
        {user?.email}
       </div>
       <div>
        {user?.tel}
       </div>
      </div>
    )
  }
  
  export default List;