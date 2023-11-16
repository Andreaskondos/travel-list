export default function Item(props) {
  return (
    <li>
      <input
        checked={props.packed}
        type="checkbox"
        onChange={() => props.onPackedItem(props.id)}
      />
      <span style={props.packed ? { textDecoration: "line-through" } : {}}>
        {props.quantity} {props.description}
      </span>
      <button onClick={() => props.onDeleteItem(props.id)}>❌</button>
    </li>
  );
}
