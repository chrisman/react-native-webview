function Filter({ name, isPressed, setFilter }) {
  return (
    <button area-pressed={isPressed ? 'true' : 'false'} onClick={() => setFilter(name)}>{name}</button>
  )
}

export default Filter;
