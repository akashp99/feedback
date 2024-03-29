import Card from "./shared/Card";
import { useState } from "react";
function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>how would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <button type="submit" className="btn btn-secondary">send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
