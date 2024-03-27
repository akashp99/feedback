function FeedbackItem({ item, handleDelete }) {
  return (
    <div className="card">
      {" "}
      <div className="num-display">{item.rating}</div>{" "}
      <div className="text-display">{item.text}</div>{" "}
      <button className="btn btn-secondary" style={{fontSize:'15px', marginTop:'10px'}} onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
}
export default FeedbackItem;
