import React, { useState, useEffect } from 'react';

function DynamicTitle() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title;
    console.log(`Title updated to: ${title}`);
  }, [title]); // Effect re-runs whenever 'title' changes
  return (
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Type to change document title..."
    />
  );
}
export default DynamicTitle;