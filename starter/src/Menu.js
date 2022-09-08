import PropTypes from "prop-types";

const Menu = ({val, onShelfChange}) =>{
    return <div className="book-shelf-changer">
    <select defaultValue={val??"none"} onChange={(event)=> onShelfChange(event)}>
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">
        Currently Reading
      </option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>;
};

Menu.propTypes = {
    val: PropTypes.string,
    onShelfChange: PropTypes.func.isRequired
}

export default Menu;