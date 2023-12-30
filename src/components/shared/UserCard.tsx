import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
  <>
      {user.documents.map((document) => (
        <Link
          to={`/profile/${document.$id}`}  // or use another unique identifier
          className="user-card"
          key={document.$id}  // or use another unique identifier
        >
          <img
        src={document.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
      />

      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 mt-4  text-center line-clamp-1">
          {document.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{document.username}
        </p>
      </div>

      <Button type="button" size="sm" className="shad-button_primary px-5 mt-4">
        Follow
      </Button>
        </Link>
      ))}
  </>
  );
};

export default UserCard;
