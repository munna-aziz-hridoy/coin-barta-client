import { useEffect, useState } from "react";

const useComments = (serverUrl, newsId, refetch) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`${serverUrl}/api/v1/comments/get-all-comments?id=${newsId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.result));
  }, [serverUrl, newsId, refetch]);
  return [comments];
};

export default useComments;
