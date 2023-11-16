export default function Footer({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items for your trip 🚀</em>
      </footer>
    );

  const packed = items.filter((i) => i.packed).length;
  const percent =
    items.length > 0 ? Math.round((packed / items.length) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You are ready go! ✈️"
          : `🧳 You have added ${items.length} items on your list and you have already
        packed ${packed}(${percent}%)`}
      </em>
    </footer>
  );
}
