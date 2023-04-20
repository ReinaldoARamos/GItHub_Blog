import { useCallback, useEffect, useState } from "react";
import { PostContent } from "./Components/PostContent";
import { PostHeader } from "./Components/PostHeader";
import { IPosts } from "../../Context/context";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { ContentContainer } from "./style";


const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {

  

  const [postData, setPostData] = useState<IPosts>({} as IPosts);
  const [isLoading, SetLoading] = useState(true);
  const { id } = useParams();
  
  const getPostDetails = useCallback(async () => {
    try {
      SetLoading(true);
      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`
      );
      setPostData(response.data);
      console.log(response.data);
    } finally {
      SetLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails;
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);
  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      <ContentContainer>
      {!isLoading && <PostContent content={postData.body} /> }
      </ContentContainer>
     
    </>
  );
}
