/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";


const AllUsers = () => {
  const { toast } = useToast();

  const { data: creators, isPending, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });
    
    return;
  }

  return (
    <div className="common-container">
      <div className="user-container ">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isPending && !creators ? (
          <Loader />
        ) : (
          <ul >
          {creators?.pages?.map((creator,index) => (
            <li className="user-grid" key={index}>
              <UserCard user={creator} />
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;