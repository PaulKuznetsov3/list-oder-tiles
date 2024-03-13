import { dataUser } from '../../data/data';
import './style.css';
import User from '../User/User';

const Users = ({ format }) => {

    const users = `${format === 'list' ? 'list' : 'tile'} `;

    return (
      <div className={users}>
        {dataUser.map((user, index) => <User key={index} user={user} />)}
      </div>
    );
}
  
  export default Users;