import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Comment() {
 const [comments, setComments] = React.useState([]);
   let { id } = useParams();
        React.useEffect(() => {
          axios
            .get(`https://myways-backend.herokuapp.com/api/getcomments/${id}`)
            .then((response) => {
              setComments(response.data);
              return comments;
            })
            .catch((error) => {
              console.log(error);
            });
        }, [comments, id]);
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm mt-2 font-semibold text-gray-900 truncate">
              {comments.map((item, i) => {
      return (
        <option key={i} value={item}>
          {item}
        </option>
      );
    })}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}
