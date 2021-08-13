import React, { useState } from "react";
import Bucket from "./../Bucket";
import styles from "./bucketlist.module.css";

function BucketList() {
  const [bucket, setBucket] = useState("");
  const [bucketList, setBucketList] = useState([]);

  const handleChange = (e) => {
    setBucket(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBucketList((bucketList) => [...bucketList, bucket]);
  };

  return (
    <div>
      <h1 className={styles.bucket}>Welcome to the Bucket Dome</h1>
      <div>David Blaine says you are typing {bucket}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          name="text"
          value={bucket}
          onChange={handleChange}
        />
        <button>Add bucket list items</button>
      </form>
      <ul>
        {bucketList.map((item, index) => (
          <Bucket key={index}>{item}</Bucket>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
