import { ArrowBigUp, ArrowBigDown, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface PostProps {
  post: {
    id: number;
    title: string;
    author: string;
    upvotes: number;
    downvotes: number;
    comments: number;
    time: string;
  };
}

export function PostCard({ post }: PostProps) {
  return (
    <Card>
      <Link to="/comment/post_id">
        <CardContent className="p-4">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <button className="text-gray-500 hover:text-blue-500">
                <ArrowBigUp size={24} />
              </button>
              <span className="font-bold my-1">
                {post.upvotes - post.downvotes}
              </span>
              <button className="text-gray-500 hover:text-red-500">
                <ArrowBigDown size={24} />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500">
                게시자: {post.author} • {post.time}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center text-gray-500">
            <MessageSquare size={18} className="mr-1" />
            <span>{post.comments} 댓글</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
